import type { Locale } from "./config";

export interface ConferenceEntry {
  time: string;
  title: string;
  speaker?: string;
  affiliation?: string;
}

export interface ConferenceSession {
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
  keynote: { name: string; affiliation: string; role: string };
  host: string;
  contact: string;
  poster: string;
  summary: string;
  days: ConferenceDay[];
}

const ko: ConferenceItem[] = [
  {
    id: "2026",
    label: "2026 국제학술대회",
    title: "기술 거버넌스의 이데올로기적 지형",
    subtitle: "The Ideological Landscape of Technological Governance",
    isoDate: "2026-10-23",
    date: "2026.10.23 (금) - 10.25 (일)",
    venue: "한양대학교 서울",
    keynote: {
      name: "Andrew Bailey",
      affiliation: "Yale-NUS",
      role: "철학 교수",
    },
    host: "한양대학교 비트코인·화폐철학 연구소",
    contact: "hybitcoinologylab@gmail.com",
    poster: "/academics/conference-2026-poster.jpg",
    summary:
      "Andrew Bailey 교수(Yale-NUS)의 기조강연과 세 개의 세션으로 구성된 3일간의 국제학술대회",
    days: [
      {
        label: "Day 1",
        date: "10.23 (금)",
        sessions: [
          { entries: [{ time: "13:30 - 14:00", title: "개회사" }] },
          {
            title: "[세션 1] 화폐의 담론과 금융 인프라의 지정학",
            entries: [
              { time: "14:00 - 15:00", speaker: "이광희 교수", affiliation: "한양대학교", title: "화폐의 언어" },
              { time: "15:00 - 15:15", title: "중간 휴식" },
              { time: "15:15 - 16:15", speaker: "김승우 교수", affiliation: "한양대학교", title: "유로달러의 역사와 달러 스테이블코인" },
              { time: "16:15 - 16:30", title: "중간 휴식" },
              { time: "16:30 - 17:30", speaker: "오태민 교수", affiliation: "한양대학교", title: "미국과 크립토 대전환" },
            ],
          },
        ],
      },
      {
        label: "Day 2",
        date: "10.24 (토)",
        sessions: [
          {
            title: "[기조강연] Keynote Speech",
            entries: [
              { time: "10:00 - 11:30", speaker: "Andrew Bailey 교수", affiliation: "Yale-NUS", title: "The problem of monetary luck" },
              { time: "11:30 - 13:00", title: "점심시간 및 휴식 (90분)" },
            ],
          },
          {
            title: "[세션 2] 크립토 대전환과 기술 거버넌스",
            entries: [
              { time: "13:00 - 14:00", speaker: "Yoshiyuki Kato 교수", affiliation: "Rikkyo University", title: "트럼프 2기 행정부의 정치 신학과 포퓰리즘" },
              { time: "14:00 - 14:15", title: "중간 휴식" },
              { time: "14:15 - 15:15", speaker: "윤성호 교수", affiliation: "한양대학교", title: "피터 틸, 사토시 2.0: 기술 거버넌스의 이데올로기적 지형" },
              { time: "15:15 - 15:30", title: "중간 휴식" },
              { time: "15:30 - 16:30", speaker: "이상욱 교수", affiliation: "한양대학교", title: "AI 시대, 미래는 오지 않는다" },
            ],
          },
        ],
      },
      {
        label: "Day 3",
        date: "10.25 (일)",
        sessions: [
          {
            title: "[세션 3] 신진 연구자 세션",
            entries: [
              { time: "10:00 - 10:40", speaker: "박민구 석사과정", affiliation: "한양대학교", title: "화폐의 역사" },
              { time: "10:40 - 10:55", title: "중간 휴식" },
              { time: "10:55 - 11:35", speaker: "박수훈 석사과정", affiliation: "한양대학교", title: "자산 토큰화의 시대" },
              { time: "11:35 - 11:50", title: "중간 휴식" },
              { time: "11:50 - 12:30", speaker: "박시우 석사과정", affiliation: "한양대학교", title: "AI와 암호화폐" },
              { time: "12:30 -", title: "전체 학술대회 폐회" },
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
    isoDate: "2026-10-23",
    date: "October 23 (Fri) - 25 (Sun), 2026",
    venue: "Hanyang University, Seoul",
    keynote: {
      name: "Andrew Bailey",
      affiliation: "Yale-NUS",
      role: "Professor of Philosophy",
    },
    host: "Bitcoinology Lab, Hanyang University",
    contact: "hybitcoinologylab@gmail.com",
    poster: "/academics/conference-2026-poster.jpg",
    summary:
      "A three-day international conference featuring a keynote by Andrew Bailey (Yale-NUS) and three sessions.",
    days: [
      {
        label: "Day 1",
        date: "Oct 23 (Fri)",
        sessions: [
          { entries: [{ time: "13:30 - 14:00", title: "Opening Remarks" }] },
          {
            title: "Session 1: Discourses of Money and the Geopolitics of Financial Infrastructure",
            entries: [
              { time: "14:00 - 15:00", speaker: "Kwanghee Lee", affiliation: "Hanyang University", title: "The Language of Money" },
              { time: "15:00 - 15:15", title: "Break" },
              { time: "15:15 - 16:15", speaker: "Seungwoo Kim", affiliation: "Hanyang University", title: "That noble dream: European unit of account and the making a global currency, 1956-1974" },
              { time: "16:15 - 16:30", title: "Break" },
              { time: "16:30 - 17:30", speaker: "Taemin Oh", affiliation: "Hanyang University", title: "America and the Great Crypto Transition" },
            ],
          },
        ],
      },
      {
        label: "Day 2",
        date: "Oct 24 (Sat)",
        sessions: [
          {
            title: "Keynote Speech",
            entries: [
              { time: "10:00 - 11:30", speaker: "Andrew Bailey", affiliation: "Yale-NUS", title: "The problem of monetary luck" },
              { time: "11:30 - 13:00", title: "Lunch Break (90 min)" },
            ],
          },
          {
            title: "Session 2: The Great Crypto Transition and Technological Governance",
            entries: [
              { time: "13:00 - 14:00", speaker: "Yoshiyuki Kato", affiliation: "Rikkyo University", title: "Technology, Postliberalism, and Japan after the Liberal Order" },
              { time: "14:00 - 14:15", title: "Break" },
              { time: "14:15 - 15:15", speaker: "Seongho Yoon", affiliation: "Hanyang University", title: "From Mimetic Rivalry to Infrastructural Rule: Peter Thiel’s Girardian Politics of Monopoly, Knowledge, and State Power" },
              { time: "15:15 - 15:30", title: "Break" },
              { time: "15:30 - 16:30", speaker: "Sangwook Lee", affiliation: "Hanyang University", title: "In the Age of AI, the Future Will Not Come" },
            ],
          },
        ],
      },
      {
        label: "Day 3",
        date: "Oct 25 (Sun)",
        sessions: [
          {
            title: "Session 3: Emerging Scholars",
            entries: [
              { time: "10:00 - 10:40", speaker: "Mingu Park", affiliation: "M.A. Student, Hanyang University", title: "The History of Money" },
              { time: "10:40 - 10:55", title: "Break" },
              { time: "10:55 - 11:35", speaker: "Suhoon Park", affiliation: "M.A. Student, Hanyang University", title: "The Age of Asset Tokenization" },
              { time: "11:35 - 11:50", title: "Break" },
              { time: "11:50 - 12:30", speaker: "Siwoo Park", affiliation: "M.A. Student, Hanyang University", title: "AI and Cryptocurrency" },
              { time: "12:30 -", title: "Closing of the Conference" },
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
