// Rebuilds the HY-Bitcoinology LAB logo:
//   1) web mark:   public/brand/logo-mark.png  — graphic only, 1024x1024, transparent bg
//   2) print full: public/brand/logo-full.png  — original graphic + new text
//                                                rendered in Quintessential @ #0E4A84
//
// Text is converted to SVG paths via opentype.js so it renders identically
// regardless of the downstream SVG renderer.
//
// Usage: node scripts/rebuild-logo.mjs
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import opentype from "opentype.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(__dirname, "logo-src.png");
const OUT_MARK = path.join(ROOT, "public/brand/logo-mark.png");
const OUT_FULL = path.join(ROOT, "public/brand/logo-full.png");
const FONT_TTF = path.join(ROOT, "public/fonts/Quintessential-Regular.ttf");

const BRAND_BLUE = "#0E4A84";

// Measured from the 5000x5000 source:
const GRAPHIC = { minX: 1305, minY: 881, maxX: 3750, maxY: 3329 };
const PAD = 80;
const TEXT = "HY-Bitcoinology LAB";

async function buildMark() {
  // Build a square crop centered on the graphic, BUT clamp vertical extent
  // so it never pulls in pixels from the original text region (y >= 3384).
  const cx = Math.round((GRAPHIC.minX + GRAPHIC.maxX) / 2);
  const cy = Math.round((GRAPHIC.minY + GRAPHIC.maxY) / 2);
  const TEXT_TOP = 3384;
  const maxSideFromVertical = 2 * Math.min(cy - GRAPHIC.minY + PAD, TEXT_TOP - cy - PAD);
  const desired = Math.max(GRAPHIC.maxX - GRAPHIC.minX, GRAPHIC.maxY - GRAPHIC.minY) + PAD * 2;
  const side = Math.min(desired, maxSideFromVertical);
  const sqLeft = Math.max(0, cx - Math.round(side / 2));
  const sqTop = Math.max(0, cy - Math.round(side / 2));

  // 1. crop square around graphic
  // 2. resize to 1024
  // 3. make near-white transparent
  const cropped = await sharp(SRC)
    .extract({ left: sqLeft, top: sqTop, width: side, height: side })
    .resize(1024, 1024)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { data, info } = cropped;
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    if (r > 235 && g > 235 && b > 235) data[i + 3] = 0;
  }
  await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(OUT_MARK);

  console.log("✓ wrote", path.relative(ROOT, OUT_MARK), `(${side}x${side} → 1024x1024, transparent bg)`);
}

async function buildFull() {
  // Crop graphic region tightly from source, ending *before* the original text.
  // Original text starts at y≈3384. We cut at 3330 to leave no ghost.
  const graphicTop = 700;
  const graphicBottom = 3330;
  const graphicH = graphicBottom - graphicTop;
  const graphicSlice = await sharp(SRC)
    .extract({ left: 0, top: graphicTop, width: 5000, height: graphicH })
    .toBuffer();

  // Render "HY-Bitcoinology LAB" as SVG path via opentype.
  const font = opentype.loadSync(FONT_TTF);
  const textFontSize = 440;
  // opentype.Path gives us an SVG <path> d-attribute.
  // We first measure width to center the text horizontally.
  const advance = font.getAdvanceWidth(TEXT, textFontSize);
  const textBlockW = 5000;
  const textX = (textBlockW - advance) / 2;
  const textY = 500; // baseline within the 1200-tall text canvas
  const textPath = font.getPath(TEXT, textX, textY, textFontSize).toSVG(2);

  // Separator line — dot — line, centered.
  const sepY = 780;
  const textCanvasH = 1200;
  const textSvg = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${textBlockW}" height="${textCanvasH}" viewBox="0 0 ${textBlockW} ${textCanvasH}">
  <g fill="${BRAND_BLUE}">${textPath}</g>
  <g stroke="${BRAND_BLUE}" stroke-width="6" fill="${BRAND_BLUE}">
    <line x1="2060" y1="${sepY}" x2="2430" y2="${sepY}"/>
    <circle cx="2500" cy="${sepY}" r="14"/>
    <line x1="2570" y1="${sepY}" x2="2940" y2="${sepY}"/>
  </g>
</svg>`);

  // Compose onto 5000x5000 white canvas.
  // Graphic goes at top=300, text block goes right below (top=graphicH+300).
  await sharp({
    create: {
      width: 5000,
      height: 5000,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    },
  })
    .composite([
      { input: graphicSlice, top: 300, left: 0 },
      { input: textSvg, top: 300 + graphicH, left: 0 },
    ])
    .png({ compressionLevel: 9 })
    .toFile(OUT_FULL);

  console.log("✓ wrote", path.relative(ROOT, OUT_FULL), "(5000x5000)");
}

await buildMark();
await buildFull();
