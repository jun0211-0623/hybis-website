import type { Locale } from "./config";

export interface PressItem {
  id: string;
  title: string;
  source: string;
  date: string;
  summary: string;
  url: string;
  color: string;
}

const ko: PressItem[] = [
  {
    id: "press-4",
    title: "2026년은 이더리움이 제도권 금융 표준되는 '대관식'의 해가 될까",
    source: "조선경제 WEEKLY BIZ",
    date: "2025.01.11",
    summary:
      "JP모건의 이더리움 기반 머니마켓펀드 토큰화 상품 출시, 실물 자산 토큰화 시장 확대 등 이더리움이 제도권 금융의 표준 플랫폼으로 부상하는 현황을 분석한 기고문",
    url: "https://www.chosun.com/economy/weeklybiz/2026/01/08/PMI7ZXCSTZDMDBNEE3XKJHQL3A/",
    color: "#0E4A84",
  },
  {
    id: "press-3",
    title: "'인문학의 새로운 길 찾기 혹은 길 내기에 관하여' 윤성호 교수",
    source: "대학지성 In&Out",
    date: "2024.12.22",
    summary:
      "윤성호 교수가 저술한 『사토시를 찾아서』에 관한 인터뷰. 비트코인을 둘러싼 인문학적 논의와 학계의 역할을 탐구",
    url: "https://www.unipress.co.kr/news/articleView.html?idxno=13721",
    color: "#3A6EA5",
  },
  {
    id: "press-2",
    title: "'사토시를 찾아서' (윤성호 지음)",
    source: "국민일보",
    date: "2024.11.06",
    summary:
      "비트코인 창시자의 지성사적 계보를 추적하는 책 서평. 미국 프런티어 정신, 히피 운동, 캘리포니아 이데올로기 등 역사문화적 뿌리를 탐색",
    url: "https://www.kmib.co.kr/article/view.asp?arcid=1761730142",
    color: "#A89078",
  },
  {
    id: "press-1",
    title: "'비트코인 없는 미래는 없다'",
    source: "조선일보 (월간조선)",
    date: "2024.11.06",
    summary:
      "오태민·손혜민·김유정 공저. 화폐의 본질을 신뢰의 기록으로 정의하며, 비트코인이 세계 경제 질서를 어떻게 재편할 수 있는지를 인문학적 관점에서 탐구",
    url: "https://m.monthly.chosun.com/client/news/viw.asp?ctcd=F&nNewsNumb=202511100037",
    color: "#9B7A7A",
  },
];

const en: PressItem[] = [
  {
    id: "press-4",
    title:
      "Will 2026 Be the 'Coronation' Year of Ethereum as a Standard in Institutional Finance?",
    source: "Chosun WEEKLY BIZ",
    date: "2025.01.11",
    summary:
      "An op-ed analyzing how Ethereum is emerging as a standard platform for institutional finance, with JPMorgan launching a tokenized money market fund on Ethereum and the expansion of the real-world asset (RWA) tokenization market.",
    url: "https://www.chosun.com/economy/weeklybiz/2026/01/08/PMI7ZXCSTZDMDBNEE3XKJHQL3A/",
    color: "#0E4A84",
  },
  {
    id: "press-3",
    title:
      "Prof. Sungho Yoon on 'Searching for or Clearing a New Path in the Humanities'",
    source: "University Press In&Out",
    date: "2024.12.22",
    summary:
      "An interview with Prof. Sungho Yoon on his book 'In Search of Satoshi', exploring the humanistic debate around Bitcoin and the role of academia.",
    url: "https://www.unipress.co.kr/news/articleView.html?idxno=13721",
    color: "#3A6EA5",
  },
  {
    id: "press-2",
    title: "Book Review: 'In Search of Satoshi' by Sungho Yoon",
    source: "Kookmin Ilbo",
    date: "2024.11.06",
    summary:
      "A review of the book tracing the intellectual genealogy of Bitcoin's creator — exploring the American frontier spirit, hippie movement, and California ideology as historical and cultural roots.",
    url: "https://www.kmib.co.kr/article/view.asp?arcid=1761730142",
    color: "#A89078",
  },
  {
    id: "press-1",
    title: "'There Is No Future Without Bitcoin'",
    source: "Chosun Ilbo (Monthly Chosun)",
    date: "2024.11.06",
    summary:
      "Co-authored by Taemin Oh, Hyemin Son, and Yujung Kim. Defines money as a record of trust and explores, from a humanistic perspective, how Bitcoin may reshape the global economic order.",
    url: "https://m.monthly.chosun.com/client/news/viw.asp?ctcd=F&nNewsNumb=202511100037",
    color: "#9B7A7A",
  },
];

export function getPressItems(locale: Locale): PressItem[] {
  return locale === "en" ? en : ko;
}
