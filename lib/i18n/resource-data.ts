// Publication data — shared across locales. Titles and author names stay in their
// original Korean (these are Korean-language publications), only UI labels are
// translated via the dictionary.

export interface MonographItem {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  description: string;
  image: string;
  isbn: string;
  publisher: string;
  year: string;
}

export interface PaperItem {
  id: string;
  categoryKey: "paper" | "report";
  title: string;
  summary: string;
  date: string;
  color: string;
  url: string;
}

export const monographs: MonographItem[] = [
  {
    id: "in-search-of-satoshi",
    title: "사토시를 찾아서",
    subtitle: "비트코인 지성사를 위하여",
    author: "윤성호",
    description:
      "비트코인의 창시자 사토시 나카모토의 사상적 배경을 추적하며, 암호학·경제학·철학이 어떻게 결합되어 비트코인이라는 혁신을 만들어냈는지를 지성사적 관점에서 탐구합니다.",
    image: "/books/9788972188513.jpg",
    isbn: "978-89-7218-851-3",
    publisher: "한양대학교 출판부",
    year: "2025",
  },
  {
    id: "no-future-without-bitcoin",
    title: "비트코인 없는 미래는 없다",
    subtitle: "",
    author: "오태민, 손혜민, 김유정",
    description:
      "화폐의 본질을 신뢰의 기록으로 정의하며, 비트코인이 분산된 기술 구조와 합의 메커니즘을 통해 세계 경제 질서를 어떻게 재편할 수 있는지를 인문학적 관점에서 탐구합니다.",
    image: "/books/9791193869338.jpg",
    isbn: "979-11-93869-33-8",
    publisher: "",
    year: "2025",
  },
  {
    id: "language-of-currency",
    title: "화폐의 언어",
    subtitle: "돈은 어떻게 우리에게 말을 거는가",
    author: "이광희",
    description:
      "화폐가 단순한 교환 수단을 넘어 사회적 소통의 매개이자 제도적 언어임을 철학적·경제학적으로 분석합니다. 화폐의 본질에 대한 근본적 질문을 던지는 학술서입니다.",
    image: "/books/9788972188537.jpg",
    isbn: "978-89-7218-853-7",
    publisher: "한양대학교 출판부",
    year: "2025",
  },
];

export const papersAndReports: PaperItem[] = [
  {
    id: "r1",
    categoryKey: "report",
    title:
      "스테이블코인의 지정학: 디지털 달러가 재편하는 세계체제와 한국의 대응 전략",
    summary:
      "디지털 달러 중심의 스테이블코인이 국제 금융 질서에 미치는 지정학적 영향과 한국의 전략적 대응 방안을 분석한 정책보고서",
    date: "2025",
    color: "#0E4A84",
    url: "/resources/stablecoin-geopolitics.pdf",
  },
  {
    id: "r2",
    categoryKey: "report",
    title: "스테이블 코인 해외입법례와 국내법안 비교",
    summary:
      "미국, EU 등 주요국의 스테이블코인 규제 법안과 국내 입법 동향을 비교 분석한 보고서",
    date: "2025",
    color: "#0E4A84",
    url: "/resources/stablecoin-legislation.pdf",
  },
  {
    id: "r3",
    categoryKey: "report",
    title: "자산 토큰화 혁신 및 머니 레고 기반 탈중앙 금융",
    summary:
      "진성훈. 자산 토큰화의 혁신적 접근과 머니 레고 구조를 활용한 탈중앙화 금융(DeFi) 체계를 분석한 보고서",
    date: "2025",
    color: "#0E4A84",
    url: "/resources/tokenization-composability.pdf",
  },
  {
    id: "r4",
    categoryKey: "report",
    title: "자산 토큰화(RWA) 보고서",
    summary:
      "이창준. 실물 자산 토큰화(Real World Assets)의 현황과 전망을 다룬 정책 보고서",
    date: "2025",
    color: "#0E4A84",
    url: "/resources/rwa-report.pdf",
  },
  {
    id: "r5",
    categoryKey: "report",
    title: "토큰화 경제: 삼성전자의 글로벌 전략",
    summary:
      "노성준. 토큰화 경제 패러다임 속에서 삼성전자의 글로벌 전략적 대응을 분석한 보고서",
    date: "2025",
    color: "#0E4A84",
    url: "/resources/samsung-tokenization.pdf",
  },
  {
    id: "r6",
    categoryKey: "report",
    title: "인프라시설 토큰화의 필요성과 유용성",
    summary:
      "박수훈. 공공 인프라 시설의 토큰화가 가져올 효율성과 접근성 개선 방안을 제시한 보고서",
    date: "2025",
    color: "#0E4A84",
    url: "/resources/infrastructure-tokenization.pdf",
  },
  {
    id: "p1",
    categoryKey: "paper",
    title: "반연방과 반연준: 미국 자유지상주의의 통화론",
    summary:
      "김승우. 미국 자유지상주의 전통에서 연방준비제도에 대한 비판과 대안적 통화 체계 논의를 다룬 학술논문 (『미국사연구』 제62호, 2025)",
    date: "2025",
    color: "#3A6EA5",
    url: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003267129",
  },
  {
    id: "p2",
    categoryKey: "paper",
    title: "출력제한 전력의 가치화: 암호화폐 채굴을 통한 계통 유연성 확보",
    summary:
      "유종민, 이서진 공저. 출력 제한 전력을 암호화폐 채굴에 활용하여 전력 계통의 유연성을 확보하는 방안을 제시 (『한국기후변화학회지』 제16권 6호, 2025)",
    date: "2025",
    color: "#3A6EA5",
    url: "/resources/mining-energy.pdf",
  },
];
