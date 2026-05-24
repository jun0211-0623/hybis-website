import type { Locale } from "./config";

export interface ColloquiumItem {
  id: string;
  topic: string;
  speaker: string;
  speakerRole: string;
  date: string;
  time: string;
  venue: string;
  poster: string;
  status: "upcoming" | "past";
  host: string;
  color: string;
}

const ko: ColloquiumItem[] = [
  {
    id: "colloq-3",
    topic: "The Political Culture of Cryptocurrency",
    speaker: "Martin Daunton",
    speakerRole: "University of Cambridge",
    date: "2026.05.20 (수)",
    time: "13:00 - 14:00",
    venue: "한양대학교 인문관 316호",
    poster: "/academics/martin-daunton-poster.jpg",
    status: "upcoming",
    host: "한양대학교 비트코인화폐철학과",
    color: "#0E4A84",
  },
  {
    id: "colloq-2",
    topic: "Reclaiming Asia",
    speaker: "이택광",
    speakerRole: "경희대학교",
    date: "2026.05.11 (월)",
    time: "14:00 - 15:30",
    venue: "한양대학교 인문관 316호",
    poster: "/academics/lee-taekgwang-poster.jpg",
    status: "past",
    host: "한양대학교 비트코인화폐철학과",
    color: "#0E4A84",
  },
  {
    id: "colloq-1",
    topic: "디지털기축통화국 대한민국의 크립토 기회",
    speaker: "하태경",
    speakerRole: "보험연수원 원장 · 전 3선 국회의원",
    date: "2026.04.27 (월)",
    time: "15:00",
    venue: "한양대학교 인문관 316호",
    poster: "/academics/ha-taekyung-poster.jpg",
    status: "past",
    host: "한양대학교 비트코인화폐철학과",
    color: "#0E4A84",
  },
];

const en: ColloquiumItem[] = [
  {
    id: "colloq-3",
    topic: "The Political Culture of Cryptocurrency",
    speaker: "Martin Daunton",
    speakerRole: "University of Cambridge",
    date: "May 20, 2026 (Wed)",
    time: "13:00 - 14:00",
    venue: "Hanyang University, Humanities Bldg. Rm. 316",
    poster: "/academics/martin-daunton-poster.jpg",
    status: "upcoming",
    host: "Department of Bitcoin and Monetary Philosophy, Hanyang University",
    color: "#0E4A84",
  },
  {
    id: "colloq-2",
    topic: "Reclaiming Asia",
    speaker: "Lee Taek-gwang",
    speakerRole: "Kyung Hee University",
    date: "May 11, 2026 (Mon)",
    time: "14:00 - 15:30",
    venue: "Hanyang University, Humanities Bldg. Rm. 316",
    poster: "/academics/lee-taekgwang-poster.jpg",
    status: "past",
    host: "Department of Bitcoin and Monetary Philosophy, Hanyang University",
    color: "#0E4A84",
  },
  {
    id: "colloq-1",
    topic:
      "Korea as a Digital Reserve Currency State: Opportunities in Crypto",
    speaker: "Ha Tae-kyung",
    speakerRole:
      "President, Korea Insurance Training Institute · Former 3-term National Assembly Member",
    date: "April 27, 2026 (Mon)",
    time: "15:00",
    venue: "Hanyang University, Humanities Bldg. Rm. 316",
    poster: "/academics/ha-taekyung-poster.jpg",
    status: "past",
    host: "Department of Bitcoin and Monetary Philosophy, Hanyang University",
    color: "#0E4A84",
  },
];

export function getColloquiumItems(locale: Locale): ColloquiumItem[] {
  return locale === "en" ? en : ko;
}
