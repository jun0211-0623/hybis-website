import sharp from "sharp";
import path from "node:path";

const cache = "C:/Users/이창준/.claude/image-cache/1b161a8f-22c7-406f-ba9b-7372b257a623";
const top = path.join(cache, "1.png");
const bottom = path.join(cache, "2.png");
const out = "public/press/chosun-monthly.jpg";

const TARGET_W = 1200;
const PAD = 48;
const GAP = 36;

const [topResized, bottomResized] = await Promise.all([
  sharp(top).resize({ width: TARGET_W - PAD * 2, withoutEnlargement: false }).toBuffer({ resolveWithObject: true }),
  sharp(bottom).resize({ width: TARGET_W - PAD * 2, withoutEnlargement: false }).toBuffer({ resolveWithObject: true }),
]);

const h = PAD + topResized.info.height + GAP + bottomResized.info.height + PAD;

await sharp({
  create: {
    width: TARGET_W,
    height: h,
    channels: 3,
    background: { r: 255, g: 255, b: 255 },
  },
})
  .composite([
    { input: topResized.data, top: PAD, left: PAD },
    { input: bottomResized.data, top: PAD + topResized.info.height + GAP, left: PAD },
  ])
  .jpeg({ quality: 85 })
  .toFile(out);

console.log(`wrote ${out} (${TARGET_W}x${h})`);
