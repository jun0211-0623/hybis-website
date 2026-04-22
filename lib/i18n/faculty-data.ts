import type { Locale } from "./config";

export interface FacultyItem {
  name: string;
  topic: string;
  role: string;
}

const ko: FacultyItem[] = [
  { name: "Roland B Wilson", topic: "한반도에 대한 지정학적 이해: 미국의 관점", role: "한국조지메이슨대학교 분쟁분석 및 해결학부 교수" },
  { name: "고동진", topic: "AI의 현재! 우리는 무엇을 준비해야하는가?", role: "서울 강남구병 국회의원, 전 삼성전자 대표이사" },
  { name: "김동욱", topic: "비트코인 상용화의 첫 걸음: 라이트닝 네트워크", role: "㈜BetweenBits 대표" },
  { name: "김승주", topic: "비트코인과 국내외 스캠코인의 본질적 차이", role: "고려대학교 정보보호대학원 교수" },
  { name: "김연규", topic: "21세기 지정학과 기술: 글로벌 공급망과 전기차 배터리", role: "한양대학교 국제학대학원장" },
  { name: "김희진", topic: "느리게 나이 드는 기억력의 비밀", role: "한양대학교 의과대학 신경과학교실 교수" },
  { name: "남석관", topic: "손실 없는 투자원칙", role: "베스트인컴 회장" },
  { name: "백용기", topic: "블록체인분석을 통한 자금세탁방지(AML) 방안", role: "체이널리시스 코리아 지사장" },
  { name: "안병진", topic: "트럼피즘과 미국대선", role: "경희대학교 미래문명원 교수" },
  { name: "오태민", topic: "비트코인과 화폐현상", role: "한양대학교 비트코인화폐철학 겸임교수" },
  { name: "유철균", topic: "신라왕경 메타버스", role: "경북연구원장" },
  { name: "윤성호", topic: "나카모토 사토시를 찾아서", role: "한양대학교 영어영문학과 교수" },
  { name: "이상욱", topic: "NFT 인문학, 인공지능과 예술, AI 시대 미래", role: "한양대학교 철학과 및 인공지능학과 교수" },
  { name: "이장원", topic: "가상자산 과세 유예와 국세청 과세 체계", role: "세무법인 리치 대표" },
  { name: "이정엽", topic: "가상자산 규제와 금융혁신", role: "법무법인 로집사 대표변호사" },
  { name: "정석문", topic: "가상자산의 본질과 제도권화 트렌드", role: "프레스토 리서치 센터장" },
  { name: "정지열", topic: "암호화폐와 자금세탁", role: "한양대학교 컴퓨터S/W학부 겸임교수" },
  { name: "정희원", topic: "불확실성과 스트레스에서 나를 지키는 습관", role: "서울아산병원 노년내과 임상조교수" },
  { name: "조재우", topic: "비트코인 채굴과 내재가치", role: "한성대학교 사회과학부 교수" },
  { name: "최진홍", topic: "가상자산 투자 사기의 주요 유형 및 법률적 쟁점", role: "법무법인YK 파트너변호사" },
  { name: "홍남기", topic: "한국경제 점프업을 위한 6개 매듭풀이와 가상자산", role: "한국항공대학교 석좌교수, 전 경제부총리" },
];

const en: FacultyItem[] = [
  { name: "Roland B Wilson", topic: "Geopolitical Understanding of the Korean Peninsula: A U.S. Perspective", role: "Professor, School of Conflict Analysis & Resolution, George Mason University Korea" },
  { name: "Dongjin Koh", topic: "The Present of AI: What Must We Prepare For?", role: "Member of the National Assembly (Gangnam-B, Seoul); Former CEO of Samsung Electronics" },
  { name: "Dongwook Kim", topic: "The First Step in Bitcoin's Commercialization: The Lightning Network", role: "CEO, BetweenBits Inc." },
  { name: "Seungjoo Kim", topic: "The Essential Difference Between Bitcoin and Scam Coins, Domestic and International", role: "Professor, Graduate School of Information Security, Korea University" },
  { name: "Yeonkyu Kim", topic: "21st-Century Geopolitics and Technology: Global Supply Chains and EV Batteries", role: "Dean, Graduate School of International Studies, Hanyang University" },
  { name: "Heejin Kim", topic: "The Secret of Slowly Aging Memory", role: "Professor, Department of Neuroscience, Hanyang University College of Medicine" },
  { name: "Seokkwan Nam", topic: "Investment Principles Without Loss", role: "Chairman, Best Income" },
  { name: "Yonggi Baek", topic: "Anti–Money Laundering (AML) Measures via Blockchain Analysis", role: "Country Manager, Chainalysis Korea" },
  { name: "Byeongjin Ahn", topic: "Trumpism and the U.S. Presidential Election", role: "Professor, Kyung Hee Institute for the Future of Civilization" },
  { name: "Taemin Oh", topic: "Bitcoin and the Phenomenon of Money", role: "Adjunct Professor of Bitcoin & Monetary Philosophy, Hanyang University" },
  { name: "Cheolgyun Yoo", topic: "Silla Royal Capital Metaverse", role: "President, Gyeongbuk Research Institute" },
  { name: "Sungho Yoon", topic: "In Search of Nakamoto Satoshi", role: "Professor, Department of English Language & Literature, Hanyang University" },
  { name: "Sangwook Lee", topic: "NFT Humanities, AI & Art, and the Future of the AI Era", role: "Professor, Departments of Philosophy and Artificial Intelligence, Hanyang University" },
  { name: "Jangwon Lee", topic: "Virtual Asset Tax Deferral and the NTS Taxation System", role: "CEO, Rich Tax Accounting Corporation" },
  { name: "Jeongyeop Lee", topic: "Virtual Asset Regulation and Financial Innovation", role: "CEO & Attorney, Lawfirm Lojibsa" },
  { name: "Seokmun Jung", topic: "The Essence of Virtual Assets and Trends Toward Institutionalization", role: "Head of Research, Presto Research" },
  { name: "Jiyeol Jung", topic: "Cryptocurrency and Money Laundering", role: "Adjunct Professor, School of Computer Science, Hanyang University" },
  { name: "Heewon Jung", topic: "Habits That Protect You from Uncertainty and Stress", role: "Clinical Assistant Professor, Division of Geriatric Medicine, Asan Medical Center" },
  { name: "Jaewoo Cho", topic: "Bitcoin Mining and Intrinsic Value", role: "Professor, Division of Social Sciences, Hansung University" },
  { name: "Jinhong Choi", topic: "Major Types of Virtual Asset Investment Fraud and Legal Issues", role: "Partner Attorney, Lawfirm YK" },
  { name: "Namki Hong", topic: "Six Knots to Untie for Korea's Economic Jump-Up, and Virtual Assets", role: "Distinguished Professor, Korea Aerospace University; Former Deputy Prime Minister for Economy" },
];

export function getFacultyItems(locale: Locale): FacultyItem[] {
  return locale === "en" ? en : ko;
}
