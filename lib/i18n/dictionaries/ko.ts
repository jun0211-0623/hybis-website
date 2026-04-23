const ko = {
  meta: {
    title: "Bitcoinology Lab — Where Money, Code, Culture Converge",
    description:
      "디지털 화폐와 인공지능 시대의 가치·신뢰·사회를 인문학적으로 탐구하는 학제적 연구 허브",
  },
  nav: {
    links: [
      {
        label: "소개",
        children: [
          { label: "인사말", href: "/about/greeting" },
          { label: "설립 취지", href: "/about/mission" },
          { label: "연혁", href: "/about/history" },
          { label: "구조도", href: "/about/structure" },
          { label: "대외협력", href: "/about/partners" },
          { label: "오시는길", href: "/about/location" },
        ],
      },
      {
        label: "소식",
        children: [{ label: "언론보도", href: "/news" }],
      },
      {
        label: "프로그램",
        children: [
          { label: "최고위 과정", href: "/programs/executive" },
          { label: "대학원 협동과정", href: "/programs/graduate" },
        ],
      },
      {
        label: "자료",
        children: [
          { label: "모노그래프", href: "/resources/monographs" },
          { label: "논문", href: "/resources/papers" },
          { label: "보고서", href: "/resources/reports" },
          { label: "학술행사 사진", href: "/resources/photos" },
        ],
      },
    ],
    contact: "문의하기",
    openMenu: "메뉴 열기",
    closeMenu: "메뉴 닫기",
  },
  hero: {
    eyebrow: "Value, Code, Society",
    title: "Bitcoinology Lab",
    tagline: {
      prefix: "화폐의 본질을 ",
      highlight: "학문",
      suffix: "으로 증명하다.",
    },
    body:
      "Bitcoinology Lab은 디지털 화폐와 인공지능 시대에 가치·신뢰·사회가 어떻게 재구성되는지를 인문학적으로 탐구하는 학제적 연구 허브입니다.",
    ctaResearch: "연구 살펴보기",
    ctaPrograms: "프로그램 안내",
  },
  about: {
    eyebrow: "Research Areas",
    title: "연구 분야",
    body:
      "디지털 화폐와 인공지능 시대에 가치·신뢰·사회가 어떻게 재구성되는지를 인문학적으로 탐구합니다.",
    coreResearchBadge: "Core Research",
    areas: [
      {
        title: "가치·신뢰·사회의 인문학적 탐구",
        description:
          "비트코인을 문명사적 실험으로 읽어내며, 공동체의 조율 방식, 권위의 정당화, 화폐와 자유의 의미가 어떻게 재편되는지 인문학적으로 분석합니다.",
        featured: true,
      },
      {
        title: "연산적 신뢰의 인프라 연구",
        description:
          "블록체인, 플랫폼, AI 기반 의사결정 시스템 등 computational trust의 인프라와 상상력을 철학·윤리·정치사상의 렌즈로 분석합니다.",
      },
      {
        title: "학제적 융합 연구",
        description:
          "철학, 문학·문화연구, 지성사, 윤리학, 정치사상, 과학기술학(STS)을 연결하고, 시장·규제·일상 실천에 대한 경험적 연구를 결합합니다.",
      },
      {
        title: "학문적 엄밀성과 공적 통찰",
        description:
          "세미나·워크숍·출판·공동 프로젝트를 통해 엄밀한 학술 연구와 사회적 통찰을 함께 생산하고, 더 책임 있는 미래를 설계합니다.",
      },
    ],
  },
  programs: {
    eyebrow: "Programs",
    title: "프로그램",
    tabs: {
      executive: "최고위 과정",
      graduate: "대학원 협동과정",
    },
    detailCta: "자세히 보기 →",
    deptCta: "학과 홈페이지 →",
    executive: {
      title: "비트코인화폐철학 최고위과정",
      subtitle: "Bitcoin & Monetary Philosophy Executive Program",
      description:
        "비트코인이라는 지적 현상은 화폐의 모든 이슈가 '오래된 미래'임을 보여줍니다. 본 과정은 비트코인을 단순 기술이 아닌 '화폐현상'으로 정의하고, 경제·정치·문화적 변화를 다학제적으로 분석합니다.",
      highlights: [
        { label: "주임교수", value: "윤성호" },
        { label: "강사진", value: "21명 (학계·산업·정책 전문가)" },
        { label: "대상", value: "기업 임원, 정책 관계자, 전문가" },
      ],
    },
    graduate: {
      title: "비트코인화폐철학과 대학원 협동과정",
      subtitle:
        "Graduate Cooperative Program in Bitcoin & Monetary Philosophy",
      description:
        "인문과학대학의 학과간 협동과정으로, 디지털 화폐와 블록체인 기술이 야기한 경제·정치·문화 변화를 인문학적 관점에서 연구합니다. 문학석사(M.A.) 학위를 수여하며 매년 20명을 모집합니다.",
      highlights: [
        { label: "학위", value: "문학석사 (Master of Arts)" },
        { label: "이수 학점", value: "27학점 이상 (전공 18학점 이상)" },
        { label: "모집 인원", value: "매년 20명" },
      ],
    },
  },
  resources: {
    eyebrow: "Resources",
    title: "연구 자료",
    body: "Bitcoinology Lab의 모노그래프, 학술논문, 정책보고서를 확인하세요.",
    tabs: {
      monograph: "모노그래프",
      paper: "학술논문",
      report: "정책보고서",
    },
    monographBadge: "모노그래프",
    authorSuffix: " 지음",
    isbnPrefix: "ISBN",
    moreLink: "자세히 보기",
  },
  footer: {
    cta: {
      eyebrow: "Join Us",
      title: "함께 연구에 참여하세요.",
      body:
        "비트코인과 화폐철학의 미래를 함께 만들어갈 연구자, 학생, 기관의 참여를 기다립니다.",
      contact: "Contact Us",
      viewPrograms: "프로그램 보기",
    },
    groups: [
      {
        title: "소개",
        links: [
          { label: "인사말", href: "/about/greeting" },
          { label: "설립 취지", href: "/about/mission" },
          { label: "연혁", href: "/about/history" },
          { label: "구조도", href: "/about/structure" },
          { label: "대외협력", href: "/about/partners" },
          { label: "오시는길", href: "/about/location" },
        ],
      },
      {
        title: "소식",
        links: [{ label: "언론보도", href: "/news" }],
      },
      {
        title: "프로그램",
        links: [
          { label: "최고위 과정", href: "/programs/executive" },
          { label: "대학원 협동과정", href: "/programs/graduate" },
        ],
      },
      {
        title: "자료",
        links: [
          { label: "모노그래프", href: "/resources/monographs" },
          { label: "논문", href: "/resources/papers" },
          { label: "보고서", href: "/resources/reports" },
          { label: "학술행사 사진", href: "/resources/photos" },
        ],
      },
    ],
    copyright: "Bitcoinology Lab",
    contacts: {
      email: "iamyam@hanyang.ac.kr",
      phone: "02-2220-0751",
      address: "서울 성동구 왕십리로 222",
      deptLink: "비트코인화폐철학과 →",
    },
  },
  aboutPage: {
    backHome: "홈",
    eyebrowAbout: "About Bitcoinology Lab",
    title: "센터 소개",
    intro:
      "Bitcoinology Lab은 디지털 화폐와 인공지능이 결합하는 시대에 가치(value)·신뢰(trust)·사회(society)가 어떻게 재구성되는지를 인문학적으로 탐구하는 학제적 연구 허브입니다.",
    sections: {
      bitcoinology: {
        eyebrow: "Greeting",
        title: "인사말 — Bitcoinology란",
        paragraphs: [
          {
            type: "mixed",
            parts: [
              { text: "'Bitcoinology'는 비트코인을 단순한 기술이나 투자대상이 아니라, " },
              {
                text:
                  "신뢰의 계산화·제도화, 화폐와 주권의 재배치, 자유와 공동체의 재정의",
                strong: true,
              },
              { text: "를 촉발하는 문명사적 실험으로 읽어내는 연구영역을 뜻합니다." },
            ],
          },
          {
            type: "mixed",
            parts: [
              { text: "본 랩은 철학, 문학·문화연구, 지성사, 윤리학, 정치사상, 과학기술학(STS) 등을 연결하여 블록체인, 플랫폼, AI 기반 의사결정 시스템 등 " },
              { text: "연산적 신뢰(computational trust)", strong: true },
              { text: "의 인프라와 상상력을 분석합니다." },
            ],
          },
          {
            type: "plain",
            text:
              "개념 분석과 텍스트 읽기를 기반으로 하되, 시장·규제·일상적 실천에 대한 경험적 연구를 결합해 실제 세계의 변화를 입체적으로 해명합니다. 세미나·워크숍·출판·공동 프로젝트를 통해 학문적 엄밀성과 공적 통찰을 함께 생산하는 것이 목표입니다.",
          },
        ],
        director: "윤성호",
        directorRole: "Bitcoinology Lab 센터장 · 한양대학교 영어영문학과 교수",
      },
      mission: {
        eyebrow: "Mission",
        title: "설립 취지",
        items: [
          {
            num: "01",
            title: "가치·신뢰·사회의 인문학적 탐구",
            desc:
              "비트코인을 문명사적 실험으로 읽어내며, 공동체의 조율 방식, 권위의 정당화, 화폐와 자유의 의미가 어떻게 재편되는지 인문학적으로 분석합니다.",
          },
          {
            num: "02",
            title: "연산적 신뢰의 인프라 연구",
            desc:
              "블록체인, 플랫폼, AI 기반 의사결정 시스템 등 computational trust의 인프라와 상상력을 철학·윤리·정치사상의 렌즈로 분석합니다.",
          },
          {
            num: "03",
            title: "학제적 융합 연구",
            desc:
              "철학, 문학·문화연구, 지성사, 윤리학, 정치사상, 과학기술학(STS)을 연결하고, 시장·규제·일상 실천에 대한 경험적 연구를 결합합니다.",
          },
          {
            num: "04",
            title: "학문적 엄밀성과 공적 통찰",
            desc:
              "세미나·워크숍·출판·공동 프로젝트를 통해 엄밀한 학술 연구와 사회적 통찰을 함께 생산하고, 더 책임 있는 미래를 설계합니다.",
          },
        ],
      },
      history: {
        eyebrow: "History",
        title: "연혁",
        items: [
          { date: "2025.07", event: "비트코인화폐철학 대학원협동과정 출범" },
          { date: "2025.01", event: "Bitcoinology Lab 모노그래프 시리즈 출간" },
          { date: "2024.05", event: "Bitcoinology Lab 설립" },
          { date: "2024.03", event: "제1기 비트코인화폐철학 최고위과정 개설" },
          { date: "2024.02", event: "비트코인화폐철학 대학원협동과정 정식 인가" },
        ],
      },
      organization: {
        eyebrow: "Organization",
        title: "조직 구성",
        directorRole: "센터장",
        director: { name: "윤성호 교수", dept: "영어영문학과" },
        groups: [
          {
            title: "참여교수",
            members: [
              { name: "오태민", dept: "비트코인화폐철학과" },
              { name: "이상욱", dept: "철학과" },
              { name: "이광희", dept: "대중문화시나리오학과" },
              { name: "김승우", dept: "사학과" },
              { name: "이형섭", dept: "영문과" },
              { name: "신성환", dept: "미래인문융합전공학부" },
            ],
          },
          {
            title: "자문위원",
            members: [
              { name: "홍남기", dept: "전 부총리·기획재정부 장관" },
              { name: "윤호주", dept: "한양대학교 의료원장" },
              { name: "유규창", dept: "전 경영대학장, 백남학술정보관장" },
              { name: "김판규", dept: "전 나이지리아 대사, 해군사관학교장" },
              { name: "전진우", dept: "삼일회계법인 파트너 공인회계사" },
              { name: "황재성", dept: "리딩투자증권 헤지펀드운용 본부장" },
              { name: "이원희", dept: "이원희세무회계 대표" },
            ],
          },
          {
            title: "연구원",
            members: [
              { name: "김성현", dept: "" },
              { name: "이승종", dept: "" },
              { name: "강대홍", dept: "" },
              { name: "이창준", dept: "대학원 조교" },
            ],
          },
        ],
      },
      partners: {
        eyebrow: "Partners",
        title: "협력 기관",
        items: [
          {
            name: "경북대 디지털 인문공학 연구센터",
            nameEn: "Digital Humanities Engineering Center",
            image: "/partners/dhec.jpeg",
          },
          {
            name: "오태버스(주)",
            nameEn: "OtaVerse Inc.",
            image: "/partners/otaverse.png",
          },
        ],
      },
      sponsors: {
        eyebrow: "Sponsors",
        title: "후원 기관",
        items: [
          {
            name: "모비커스(주)",
            nameEn: "Mobickers Inc.",
            image: "/partners/mobickers.png",
          },
        ],
      },
      contact: {
        eyebrow: "Contact",
        title: "연락처",
        email: "Email",
        phone: "Phone",
        address: "Address",
        addressValue: "서울 성동구 왕십리로 222 한양대학교",
      },
    },
  },
  newsPage: {
    backHome: "홈",
    eyebrow: "News",
    title: "소식",
    body: "Bitcoinology Lab 관련 언론보도와 주요 소식을 확인하세요.",
    pressEyebrow: "Press",
    pressTitle: "언론보도",
    articleLink: "기사 보기",
  },
  executivePage: {
    back: "프로그램",
    eyebrow: "Executive Program",
    title: "비트코인화폐철학 최고위과정",
    intro:
      "비트코인이라는 지적 현상은 화폐의 모든 이슈가 '오래된 미래'임을 보여줍니다. 본 과정은 비트코인을 단순한 기술이나 경제 현상이 아닌 '화폐현상'으로 정의하며, 새로운 금융 형태의 탐구뿐 아니라 인류의 가치관과 사회 구조에 미치는 영향을 다학제적으로 분석합니다.",
    stats: [
      { label: "주임교수", value: "윤성호" },
      { label: "강사진", value: "21명" },
      { label: "대상", value: "기업 임원·정책 관계자·전문가" },
    ],
    curriculumEyebrow: "Curriculum",
    curriculumTitle: "커리큘럼",
    contactTitle: "참여를 원하시나요?",
    contactBody: "최고위과정에 대한 문의 사항이 있으시면 연락해 주세요.",
    contactCta: "문의하기 →",
  },
  graduatePage: {
    back: "프로그램",
    eyebrow: "Graduate Cooperative Program",
    title: "비트코인화폐철학과 대학원 협동과정",
    intro:
      "인문과학대학의 학과간 협동과정으로, 디지털 화폐와 블록체인 기술이 야기한 경제·정치·문화 변화를 인문학적 관점에서 연구합니다. 4차 산업혁명 시대의 핵심 의제인 탈중앙화된 화폐를 학제적으로 분석하는 학문적 중심지를 지향합니다.",
    purposeEyebrow: "Purpose",
    purposeTitle: "설립목적",
    purposeBody:
      "디지털 자산의 주류 자산화, 전통 금융 플랫폼의 재편, 탈중앙화 거버넌스(DAO) 확산 등 시대적 변곡점에 대응하기 위해 설립되었습니다. 철학, 경제학, 정치학을 아우르는 융합 연구를 수행하고, 블록체인 생태계의 가치·윤리·제도적 함의를 비판적으로 검토합니다.",
    goalsEyebrow: "Education Goals",
    goalsTitle: "교육 목표",
    goals: [
      "화폐·금융·정보철학 전통 위에서 비트코인 현상을 학술적으로 해석할 이론 역량을 기른다.",
      "블록체인 거버넌스와 정치경제 구조, 디지털 윤리 쟁점을 비판적으로 분석하는 사고력을 배양한다.",
      "DAO·스마트콘트랙트·메타버스 등 최신 의제를 현장 문제 해결과 연계할 융합 연구 능력을 강화한다.",
      "국제 학술 네트워크 참여를 통해 글로벌 연구·협업 역량을 증진한다.",
    ],
    curriculumEyebrow: "Curriculum",
    curriculumTitle: "커리큘럼",
    curriculum: {
      "1학기": {
        "1년차": [
          "비트코인 지성사",
          "정보철학 특강",
          "비트코인 화폐현상",
          "비트코인 기술과 산업",
        ],
        "2년차": [
          "크립토 문화연구",
          "DAO의 정치 철학",
          "비트코인과 달러의 지정학",
          "화폐의 역사",
        ],
      },
      "2학기": {
        "1년차": [
          "디지털 윤리학특강",
          "메타버스의 인문학과 경제학",
          "국제금융기초",
          "석사논문작성법",
        ],
        "2년차": [
          "공급사슬 금융 스마트 계약",
          "암호화폐 핵심 인물연구",
          "크립토 핵심 인물연구",
          "화폐와 언어의 철학",
        ],
      },
    } as Record<string, Record<string, string[]>>,
    requirementsEyebrow: "Requirements",
    requirementsTitle: "이수 요건",
    requirements: [
      { label: "학위", value: "문학석사 (Master of Arts)" },
      { label: "이수 학점", value: "정규 교과 27학점 이상" },
      { label: "전공 학점", value: "18학점 이상" },
      { label: "모집 인원", value: "매년 20명" },
      { label: "졸업 요건", value: "종합시험 → 논문 지도 → 학위청구 논문 발표" },
    ],
    careersEyebrow: "Career Paths",
    careersTitle: "졸업 후 진로",
    careers: [
      { title: "학계·연구기관", desc: "블록체인 철학·디지털 윤리·금융인문학 연구자" },
      { title: "핀테크·크립토 기업", desc: "정책·전략·거버넌스 컨설턴트" },
      { title: "규제기관", desc: "디지털 자산 규제기관 정책 연구원" },
      { title: "미디어·평론", desc: "디지털 금융·블록체인 문화 평론가" },
      { title: "국제기구·NGO", desc: "포용금융 프로젝트 매니저" },
    ],
    careersBody:
      "업계 장학금, 연구센터 네트워크, 최고위과정과의 연계를 통해 진로를 적극 지원합니다.",
    contactTitle: "지원을 원하시나요?",
    contactBody: "대학원 협동과정에 대한 문의 사항이 있으시면 연락해 주세요.",
    contactCta: "문의하기 →",
    phoneCta: "02-2220-0751",
    deptCta: "학과 홈페이지 →",
  },
  monographs: {
    eyebrow: "Monograph Series",
    title: "모노그래프",
    body:
      "Hanyang University Monograph Series on Bitcoin and the Humanities. Bitcoinology Lab 연구진의 학술 단행본 시리즈입니다.",
    badge: "단행본",
    authorSuffix: " 지음",
    isbnPrefix: "ISBN",
  },
  academics: {
    eyebrow: "Events & Activities",
    title: "행사 및 활동",
    body:
      "Bitcoinology Lab의 세미나, 콜로키움, 학술대회 등 주요 행사 이력을 확인하세요.",
    emptyMessage: "행사 정보가 준비되면 이곳에 게시됩니다.",
    cmsHint: "Sanity CMS에서 행사를 등록하면 자동으로 표시됩니다.",
    speakerPrefix: "발표:",
    categories: {
      seminar: "세미나",
      colloquium: "콜로키움",
      conference: "학술대회",
      workshop: "워크숍",
    },
  },
  research: {
    eyebrow: "Publications",
    title: "연구성과 및 발간물",
    body: "Bitcoinology Lab의 주요 출판물과 연구 성과를 확인하세요.",
    authorLabel: "저자",
    publisherLabel: "발행",
    more: "자세히 보기",
    emptyMessage: "발간물이 준비되면 이곳에 게시됩니다.",
    cmsHint: "Sanity CMS에서 출판물을 등록하면 자동으로 표시됩니다.",
  },
  gallery: {
    eyebrow: "Beyond the Page",
    title: "Beyond the Page",
    body:
      "북콘서트, 최고위과정 강의, 총동문회 등 Bitcoinology Lab의 주요 활동 현장을 소개합니다.",
    more: "활동 더 보기 →",
  },
  detail: {
    emptyBody: "아직 작성된 본문이 없습니다. 관리자 페이지에서 콘텐츠를 추가해주세요.",
    downloadFile: "파일 다운로드",
    details: "세부 사항",
  },
};

export default ko;
