import type { Locale } from "./config";
import { defaultLocale } from "./config";
import { getPressItems } from "./press-data";
import { getColloquiumItems } from "./colloquium-data";
import { getMonographs, formatMonographDate } from "./resource-data";

export type HighlightKind = "press" | "colloquium" | "monograph";

export interface HighlightItem {
  id: string;
  kind: HighlightKind;
  kindLabel: string;
  kindColor: string;
  date: string;
  isoDate: string;
  title: string;
  summary: string;
  image?: string;
  href: string;
  external?: boolean;
  source?: string;
}

const KIND_COLOR: Record<HighlightKind, string> = {
  press: "#9B7A7A",
  colloquium: "#0E4A84",
  monograph: "#3A6EA5",
};

type KindLabels = Record<HighlightKind, string>;

const KIND_LABELS: Record<Locale, KindLabels> = {
  ko: { press: "언론보도", colloquium: "콜로퀴움", monograph: "모노그래프" },
  en: { press: "Press", colloquium: "Colloquium", monograph: "Monograph" },
};

function toIsoFromDot(value: string): string {
  const match = value.match(/(\d{4})\.(\d{1,2})\.(\d{1,2})/);
  if (!match) return "1970-01-01";
  const [, y, m, d] = match;
  return `${y}-${m.padStart(2, "0")}-${d.padStart(2, "0")}`;
}

function toIsoFromEnglish(value: string): string {
  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];
  const match = value.match(/([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})/);
  if (!match) return toIsoFromDot(value);
  const [, mon, d, y] = match;
  const m = months.indexOf(mon.toLowerCase()) + 1;
  if (m === 0) return "1970-01-01";
  return `${y}-${String(m).padStart(2, "0")}-${d.padStart(2, "0")}`;
}

function parseIso(display: string, locale: Locale): string {
  return locale === defaultLocale
    ? toIsoFromDot(display)
    : toIsoFromEnglish(display);
}

function colloquiumHref(locale: Locale): string {
  return locale === defaultLocale ? "/academics/colloquium" : `/${locale}/academics/colloquium`;
}

function monographHref(locale: Locale): string {
  return locale === defaultLocale ? "/resources/monographs" : `/${locale}/resources/monographs`;
}

function monographIsoDate(m: { year: string; publishedAt?: string }): string {
  if (m.publishedAt) {
    const match = m.publishedAt.match(/(\d{4})-(\d{2})-(\d{2})/);
    if (match) return `${match[1]}-${match[2]}-${match[3]}`;
  }
  return `${m.year}-06-30`;
}

export function getHighlightItems(locale: Locale, limit = 6): HighlightItem[] {
  const labels = KIND_LABELS[locale];

  const press: HighlightItem[] = getPressItems(locale).map((p) => ({
    id: `press-${p.id}`,
    kind: "press",
    kindLabel: labels.press,
    kindColor: KIND_COLOR.press,
    date: p.date,
    isoDate: parseIso(p.date, locale),
    title: p.title,
    summary: p.summary,
    image: p.image,
    href: p.url,
    external: true,
    source: p.source,
  }));

  const colloquium: HighlightItem[] = getColloquiumItems(locale).map((c) => ({
    id: `colloq-${c.id}`,
    kind: "colloquium",
    kindLabel: labels.colloquium,
    kindColor: KIND_COLOR.colloquium,
    date: c.date,
    isoDate: parseIso(c.date, locale),
    title: c.topic,
    summary: `${c.speaker} · ${c.speakerRole}`,
    image: c.poster,
    href: colloquiumHref(locale),
    source: c.host,
  }));

  const monographs: HighlightItem[] = getMonographs(locale).map((m) => ({
    id: `mono-${m.id}`,
    kind: "monograph",
    kindLabel: labels.monograph,
    kindColor: KIND_COLOR.monograph,
    date: formatMonographDate(m, locale),
    isoDate: monographIsoDate(m),
    title: m.title,
    summary: m.description,
    image: m.image,
    href: monographHref(locale),
    source: m.author,
  }));

  return [...press, ...colloquium, ...monographs]
    .sort((a, b) => (a.isoDate < b.isoDate ? 1 : a.isoDate > b.isoDate ? -1 : 0))
    .slice(0, limit);
}
