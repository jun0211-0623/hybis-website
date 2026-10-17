import type { Locale } from "./config";

export interface ConferenceEntry {
  time?: string;
  title: string;
  speaker?: string;
  affiliation?: string;
}

export interface ConferenceSession {
  time?: string;
  title?: string;
  entries: ConferenceEntry[];
}

export interface ConferenceDay {
  label: string;
  date: string;
  sessions: ConferenceSession[];
}

export interface ConferenceItem {
  id: string;
  label: string;
  title: string;
  subtitle?: string;
  isoDate: string;
  date: string;
  venue: string;
  keynote: { name: string; affiliation: string; role?: string };
  host: string;
  contact: string;
  poster: string;
  summary: string;
  days: ConferenceDay[];
}

const ko: ConferenceItem[] = [
  {
    id: "2026",
    label: "2026 비트코인화폐철학과 국제학술대회",
    title: "기술 거버넌스의 이데올로기적 지형",
    subtitle: "The Ideological Landscape of Technological Governance",
    isoDate: "2026-10-24",
    date: "2026.10.24 (토) 12:00 - 17:00",
    venue: "한양대학교 인문과학대학 316호",
    keynote: {
      name: "Andrew Bailey",
      affiliation: "Bitcoin Policy Institute, USA",
    },
    host: "한양대학교 비트코인·화폐철학 연구소",
    contact: "hybitcoinologylab@gmail.com",
    poster: "/academics/conference-2026-poster.jpg",
    summary:
      "Andrew Bailey(Bitcoin Policy Institute)의 기조강연과 두 개의 세션으로 구성된 국제학술대회",
    days: [
      {
        label: "프로그램",
        date: "10.24 (토)",
        sessions: [
          {
            time: "12:00 - 13:00",
            title: "[기조강연] Keynote Speech",
            entries: [
              { speaker: "Andrew Bailey", affiliation: "Bitcoin Policy Institute, USA", title: "The Problem of Monetary Luck" },
            ],
          },
          { entries: [{ time: "13:00 - 13:30", title: "휴식" }] },
          {
            time: "13:30 - 15:00",
            title: "[세션 1] Technological Imaginaries and Political Order",
            entries: [
              { speaker: "윤성호 교수", affiliation: "한양대학교", title: "From Mimetic Rivalry to Infrastructural Rule: Peter Thiel’s Girardian Politics of Monopoly, Knowledge, and State Power" },
              { speaker: "이상욱 교수", affiliation: "한양대학교", title: "Ethics as Enabler: Responsible AI Innovation and Human Flourishing" },
              { speaker: "Yoshiyuki Kato 교수", affiliation: "Rikkyo University", title: "The Second Sailing: Technology, Postliberalism, and Japan after the Liberal Order" },
            ],
          },
          { entries: [{ time: "15:00 - 15:20", title: "휴식" }] },
          {
            time: "15:20 - 16:50",
            title: "[세션 2] Monetary Architectures and Global Power",
            entries: [
              { speaker: "이광희 교수", affiliation: "한양대학교", title: "From Mining to Flexible Load: The Linguistic Constitution of Value in Bitcoin and Mining Electricity" },
              { speaker: "오태민 교수", affiliation: "한양대학교", title: "Structural Power and Hegemonic Exhaustion in the Crypto Era: Reassessing Susan Strange’s Theory of Structural Power through the Lens of Raymond Aron" },
              { speaker: "김승우 교수", affiliation: "한양대학교", title: "That noble dream: European unit of account and the making of a global currency, 1956-1974" },
            ],
          },
        ],
      },
    ],
  },
];

const en: ConferenceItem[] = [
  {
    id: "2026",
    label: "2026 International Conference",
    title: "The Ideological Landscape of Technological Governance",
    isoDate: "2026-10-24",
    date: "October 24 (Sat), 2026, 12:00 - 17:00",
    venue: "Room 316, College of Humanities, Hanyang University",
    keynote: {
      name: "Andrew Bailey",
      affiliation: "Bitcoin Policy Institute, USA",
    },
    host: "Bitcoinology Lab, Hanyang University",
    contact: "hybitcoinologylab@gmail.com",
    poster: "/academics/conference-2026-poster.jpg",
    summary:
      "An international conference featuring a keynote by Andrew Bailey (Bitcoin Policy Institute) and two sessions.",
    days: [
      {
        label: "Program",
        date: "Oct 24 (Sat)",
        sessions: [
          {
            time: "12:00 - 13:00",
            title: "Keynote Speech",
            entries: [
              { speaker: "Andrew Bailey", affiliation: "Bitcoin Policy Institute, USA", title: "The Problem of Monetary Luck" },
            ],
          },
          { entries: [{ time: "13:00 - 13:30", title: "Break" }] },
          {
            time: "13:30 - 15:00",
            title: "Session 1: Technological Imaginaries and Political Order",
            entries: [
              { speaker: "Seongho Yoon", affiliation: "Hanyang University", title: "From Mimetic Rivalry to Infrastructural Rule: Peter Thiel’s Girardian Politics of Monopoly, Knowledge, and State Power" },
              { speaker: "Sang-Wook Yi", affiliation: "Hanyang University", title: "Ethics as Enabler: Responsible AI Innovation and Human Flourishing" },
              { speaker: "Yoshiyuki Kato", affiliation: "Rikkyo University, Japan", title: "The Second Sailing: Technology, Postliberalism, and Japan after the Liberal Order" },
            ],
          },
          { entries: [{ time: "15:00 - 15:20", title: "Break" }] },
          {
            time: "15:20 - 16:50",
            title: "Session 2: Monetary Architectures and Global Power",
            entries: [
              { speaker: "Kwanghee Lee", affiliation: "Hanyang University", title: "From Mining to Flexible Load: The Linguistic Constitution of Value in Bitcoin and Mining Electricity" },
              { speaker: "Taemin Oh", affiliation: "Hanyang University", title: "Structural Power and Hegemonic Exhaustion in the Crypto Era: Reassessing Susan Strange’s Theory of Structural Power through the Lens of Raymond Aron" },
              { speaker: "Seung Woo Kim", affiliation: "Hanyang University", title: "That noble dream: European unit of account and the making of a global currency, 1956-1974" },
            ],
          },
        ],
      },
    ],
  },
];

export function getConferenceItems(locale: Locale): ConferenceItem[] {
  return locale === "en" ? en : ko;
}
