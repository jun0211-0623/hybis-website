const ko = {
  meta: {
    title: "Bitcoinology Lab — Where Value, Trust, and Culture Converge",
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
          { label: "교수진", href: "/about/faculty" },
          { label: "대외협력", href: "/about/partners" },
          { label: "오시는길", href: "/about/location" },
        ],
      },
      {
        label: "소식",
        children: [{ label: "언론보도", href: "/news" }],
      },
      {
        label: "학술행사",
        children: [
          { label: "콜로퀴움", href: "/academics/colloquium" },
          {
            label: "국제 컨퍼런스",
            href: "/academics/international-conference",
          },
        ],
      },
      {
        label: "프로그램",
        href: "/programs/graduate",
      },
      {
        label: "자료",
        children: [
          { label: "모노그래프", href: "/resources/monographs" },
          { label: "공저 도서", href: "/resources/coauthored" },
          { label: "학술논문", href: "/resources/papers" },
          { label: "정책 보고서", href: "/resources/reports" },
          { label: "행사 사진", href: "/resources/photos" },
        ],
      },
    ],
    contact: "문의하기",
    openMenu: "메뉴 열기",
    closeMenu: "메뉴 닫기",
  },
  hero: {
    eyebrow: "Value, Trust, Society",
    title: "Bitcoinology Lab",
    tagline: {
      prefix: "가치, 신뢰, 문화가 ",
      highlight: "만나는",
      suffix: " 곳.",
    },
    body:
      "Bitcoinology Lab은 디지털 화폐와 인공지능 시대에 가치·신뢰·사회가 어떻게 재구성되는지를 인문학적으로 탐구하는 학제적 연구 허브입니다.",
    ctaResearch: "연구 살펴보기",
    ctaPrograms: "프로그램 안내",
  },
  highlights: {
    eyebrow: "News and Events",
    title: "연구소 소식",
    body:
      "Bitcoinology Lab의 학술행사, 모노그래프 발간, 언론보도 등 최신 활동을 한눈에 확인하세요.",
    readMore: "자세히 보기",
    viewArticle: "기사 보기",
    prev: "이전",
    next: "다음",
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
        image: "/research-areas/value-trust.png",
        featured: true,
      },
      {
        title: "연산적 신뢰의 인프라 연구",
        description:
          "블록체인, 플랫폼, AI 기반 의사결정 시스템 등 computational trust의 인프라와 상상력을 철학·윤리·정치사상의 렌즈로 분석합니다.",
        image: "/research-areas/computational-trust.png",
      },
      {
        title: "학제적 융합 연구",
        description:
          "철학, 문학·문화연구, 지성사, 윤리학, 정치사상, 과학기술학(STS)을 연결하고, 시장·규제·일상 실천에 대한 경험적 연구를 결합합니다.",
        image: "/research-areas/interdisciplinary.png",
      },
      {
        title: "학문적 엄밀성과 공적 통찰",
        description:
          "세미나·워크숍·출판·공동 프로젝트를 통해 엄밀한 학술 연구와 사회적 통찰을 함께 생산하고, 더 책임 있는 미래를 설계합니다.",
        image: "/research-areas/scholarly-insight.png",
      },
    ],
  },
  programs: {
    eyebrow: "Programs",
    title: "프로그램",
    detailCta: "자세히 보기 →",
    deptCta: "학과 홈페이지 →",
    graduate: {
      title: "비트코인화폐철학과 대학원 협동과정",
      subtitle:
        "Graduate Cooperative Program in Bitcoin and Monetary Philosophy",
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
      coauthored: "공저 도서",
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
          { label: "교수진", href: "/about/faculty" },
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
          { label: "대학원 협동과정", href: "/programs/graduate" },
        ],
      },
      {
        title: "자료",
        links: [
          { label: "모노그래프", href: "/resources/monographs" },
          { label: "공저 도서", href: "/resources/coauthored" },
          { label: "학술논문", href: "/resources/papers" },
          { label: "정책 보고서", href: "/resources/reports" },
          { label: "행사 사진", href: "/resources/photos" },
        ],
      },
    ],
    copyright: "Bitcoinology Lab",
    contacts: {
      email: "iamyam@hanyang.ac.kr",
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
        title: "인사말",
        subtitle: "Bitcoinology란",
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
          { date: "2024.02", event: "비트코인화폐철학 대학원협동과정 정식 인가" },
        ],
      },
      organization: {
        eyebrow: "Organization",
        title: "조직 구성",
        directorRole: "센터장",
        director: { name: "윤성호 교수" },
        groups: [
          {
            title: "참여교수",
            members: [
              { name: "오태민", dept: "비트코인화폐철학과" },
              { name: "이상욱", dept: "철학과" },
              { name: "이광희", dept: "대중문화시나리오학과" },
              { name: "김승우", dept: "사학과" },
              { name: "이형섭", dept: "영문과" },
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
              { name: "박민구", dept: "선임 연구원" },
              { name: "손혜민", dept: "선임 연구원" },
              { name: "최명승", dept: "조교" },
              { name: "이창준", dept: "조교" },
              { name: "조용래", dept: "산학협력 연구원" },
              { name: "강대홍", dept: "산학협력 연구원" },
            ],
          },
        ],
      },
      faculty: {
        eyebrow: "Faculty",
        title: "교수진",
        intro:
          "Bitcoinology Lab과 한양대학교 비트코인화폐철학과 협동과정에 함께 참여하는 교수진입니다.",
        people: [
          {
            name: "윤성호",
            role: "센터장 · 교수",
            affiliation: "한양대학교 영어영문학과 · 비트코인화폐철학과",
            field: "현대 미국문학 · 비트코인 인문학 연구",
            bio:
              "서울대학교 영문과를 졸업하고 미국 매사추세츠대학에서 박사학위를 취득. 비트코인지성사·크립토문화연구·크립토핵심인물연구 등을 강의하며 비트코인 인문학 연구를 이끌고 있다.",
            works: [
              { type: "book", title: "언더독의 글쓰기: 아시아계 미국문학의 지형도" },
              { type: "paper", title: "The Transgressive Spatial Imagination in the 20th-Century American Novel" },
              { type: "award", title: "한국영어영문학회 학술상 수상" },
              { type: "award", title: "한국예이츠학회 논문상 수상" },
            ],
            photo: "/faculty/yoon-seong-ho.png",
          },
          {
            name: "오태민",
            role: "겸임교수",
            affiliation: "한양대학교 비트코인화폐철학과",
            field: "인문학 · 지정학 · 국제금융질서",
            bio:
              "연세대학교를 졸업한 한국 비트코인 인문학의 개척자. 2014년 《비트코인은 강했다》를 시작으로 10여 권의 저서와 강의를 통해 비트코인을 신뢰 시스템의 재발명이자 달러 패권의 균열로 읽어내며, 독자적인 인문학 해석을 정립해왔다. 대학원생들과 끊임없는 공저를 이어가며, 디지털 자산을 둘러싼 지적 토대를 함께 다져가고 있다.",
            works: [
              { type: "book", title: "비트코인은 강했다 (2014)" },
              { type: "book", title: "스마트콘트랙 신뢰혁명 (2018)" },
              { type: "book", title: "달러의 지정학과 비트코인 (2023)" },
              { type: "book", title: "트럼프 시대의 지정학과 비트코인 (2025)" },
              { type: "book", title: "비트코인 없는 미래는 없다 (2025)" },
              { type: "book", title: "토큰화 없는 미래는 없다 (2026)" },
              { type: "book", title: "이더리움 없는 미래는 없다 (예정)" },
            ],
            photo: "/faculty/oh-tae-min.jpg",
          },
          {
            name: "이상욱",
            role: "부교수",
            affiliation: "한양대학교 철학과 · 인공지능학과",
            field: "과학철학 · 기술철학 · 과학기술학(STS) · 연구윤리",
            bio:
              "서울대학교 물리학과를 거쳐 런던정경대학(LSE)에서 응집물질물리학의 거시현상 모형화에 관한 철학적 분석으로 박사학위를 취득(로버트 맥켄지 논문상). 2002년 한양대학교에 부임해 과학기술철학·STS·연구윤리를 가르쳐왔으며, 본 학과에서는 디지털 윤리학과 암호화폐 정보철학을 강의한다. 인공지능과 블록체인이 제기하는 신뢰·정보·책임의 문제를 분석철학과 과학기술학의 시선에서 다룬다.",
            works: [
              { type: "paper", title: "인공지능의 한계와 일반화된 지능의 가능성 (『과학철학』 12권 1호, 2009)" },
              { type: "paper", title: "현장성과 지향성: 현대 기술철학을 읽는 한 방식 (『철학과현실』 통권 83, 2009 봄호)" },
              { type: "book", title: "과학기술의 철학적 이해 (제5판, 공저, 한양대학교출판부, 2010)" },
              { type: "book", title: "욕망하는 테크놀로지 (공저, 동아시아, 2009)" },
              { type: "book", title: "필로테크놀로지를 말한다 (공저, 해나무, 2008)" },
            ],
            photo: "/faculty/lee-sang-wook.jpg",
          },
          {
            name: "이광희",
            role: "조교수",
            affiliation: "한양대학교 영어영문학과 · 대중문화시나리오학과 · 비트코인화폐철학과",
            field: "언어학 기반 대중문화 및 화폐철학",
            bio:
              "언어학을 기반으로 대중문화와 화폐철학을 연구한다. 교과서·단행본 등 18종의 저서를 출간했다.",
            works: [],
            photo: "/faculty/lee-kwang-hee.png",
          },
          {
            name: "김승우",
            role: "조교수",
            affiliation: "한양대학교 사학과",
            field: "문화사 · 금융사회학 · 암호화폐와 신자유주의 · 공공역사",
            bio:
              "영국 케임브리지 대학교 역사학부에서 유로달러시장 역사로 박사 학위를 취득. 제네바 국제연구대학원 연구원, 웁살라 대학교 박사후 연구원, 경북대학교 사학과를 거쳐 2025년 3월부터 한양대학교 사학과에 재직.",
            works: [
              { type: "paper", title: "Exclusionary Regimes, Financial Corporations, and Human Rights Activism in the UK, 1973–92 (2023)" },
              { type: "paper", title: "A brief encounter — North Korea in the Eurocurrency market, 1973–1980 (2023)" },
              { type: "paper", title: "인플레이션과 F.A. 하이에크 그리고 암호화폐의 신자유주의적 기원 (2024)" },
              { type: "book", title: "시장을 이길 수 있는가? — 20세기 주식시장 읽기와 투자 기법들의 역사 (2021)" },
            ],
            photo: "/faculty/kim-seung-woo.jpg",
          },
          {
            name: "이형섭",
            role: "부교수",
            affiliation: "한양대학교 영어영문학과",
            field: "드라마 · 아일랜드학 · 영화학 · 문화정치",
            bio:
              "드라마와 영화, 아일랜드 문학을 매개로 비극·윤리·문화정치의 문제를 연구한다. 미국 교외문화의 비극적 표상과 트랜스내셔널 인문학을 다뤄왔으며, 본 학과에서는 이러한 문화비판의 시선을 디지털 화폐 시대의 가치·신뢰 재편 문제로 확장하는 작업을 모색한다.",
            works: [
              { type: "paper", title: "Ethical Contours of the (Sub)urban Space-Time Relationship in the Early Postwar American Drama (Forum for World Literature Studies 7.2)" },
              { type: "paper", title: "Love in the Time of the Troubles: The Cultural Politics of Tragic Form in Northern Irish Cinema (Literature and Film 19.1)" },
              { type: "paper", title: "'To every life an after-life. To every demon a fairy tale': The Life and Times of an Irish Policeman in the British Empire in Sebastian Barry's The Steward of Christendom (JELL 57.3)" },
              { type: "book", title: "영화로 보는 미국 역사 (공저, 건국대학교 출판부, 2018)" },
              { type: "book", title: "트랜스내셔널 지구공동체를 향하여 (공저, 한양대학교 출판부, 2018)" },
            ],
            photo: "/faculty/lee-hyung-seop.jpg",
          },
        ],
        worksLabel: "대표 저서·논문",
        placeholderBio: "약력 준비 중입니다.",
      },
      partners: {
        eyebrow: "Partners",
        title: "협력 기관",
        items: [
          {
            name: "경북대학교 미주·유럽연구소",
            nameEn: "Institute of American and European Studies, KNU",
            image: "/partners/knu.jpg",
            href: "https://iaes.knu.ac.kr/",
          },
          {
            name: "오태버스-메타노미아",
            nameEn: "OtaVerse — Metanomia",
            image: "/partners/otaverse.png",
            href: "https://btcmobick.org/metanomia",
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
        address: "Address",
        addressValue: "서울 성동구 왕십리로 222 한양대학교 5층 504호",
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
  colloquiumPage: {
    backHome: "홈",
    eyebrow: "Colloquium",
    title: "콜로퀴움",
    body:
      "한양대학교 비트코인화폐철학과가 주관하는 콜로퀴움 시리즈. 각계 전문가를 모시고 디지털 화폐·신뢰·사회를 둘러싼 최전선 논의를 공유합니다.",
    listEyebrow: "Upcoming and Past",
    listTitle: "콜로퀴움 일정",
    statusUpcoming: "예정",
    statusPast: "종료",
    topicLabel: "주제",
    speakerLabel: "발표자",
    dateLabel: "일시",
    venueLabel: "장소",
    hostLabel: "주관",
    posterAlt: "콜로퀴움 포스터",
  },
  internationalConferencePage: {
    backHome: "홈",
    eyebrow: "International Conference",
    title: "국제 컨퍼런스",
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
      "본 학과는 화폐 자체가 다시 정의되는 시대—주권화폐의 도전, 디지털 자산의 주류화, 탈중앙화 거버넌스(DAO)의 확산—에 응답하기 위해 한양대학교 인문대학에 설립된 국내 최초의 화폐철학 대학원 과정입니다. 기술적 옹호도 도덕적 거부도 아닌, 인문학적 비판과 학제간 분석을 통해 블록체인 생태계의 가치·윤리·제도적 함의를 검토합니다. 철학·경제학·정치학·문화연구를 가로지르는 융합 연구를 수행하며, 학계·정책·산업 현장에서 디지털 시대의 화폐와 신뢰를 다시 사유할 연구자를 양성합니다.",
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
      "1년차": {
        "1학기": [
          "bitcoin-intellectual-history",
          "philosophy-of-information",
          "blockchain-money-phenomena",
          "bitcoin-technology-industry",
        ],
        "2학기": [
          "digital-ethics-topics",
          "metaverse-humanities-economics",
          "international-finance-foundations",
          "thesis-writing-method",
        ],
      },
      "2년차": {
        "1학기": [
          "crypto-cultural-studies",
          "dao-political-philosophy",
          "bitcoin-dollar-geopolitics",
          "history-of-money",
          "central-banking",
        ],
        "2학기": [
          "supply-chain-finance-smart-contracts",
          "crypto-key-figures",
          "philosophy-currency-language",
          "cryptocurrency-information-philosophy",
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
      "업계 장학금과 연구센터 네트워크를 통해 진로를 적극 지원합니다.",
    contactTitle: "지원을 원하시나요?",
    contactBody: "대학원 협동과정에 대한 문의 사항이 있으시면 연락해 주세요.",
    contactCta: "문의하기 →",
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
  coAuthoredBooks: {
    eyebrow: "Co-authored Works",
    title: "공저 도서",
    body:
      "Bitcoinology Lab 연구진이 공동 집필한 일반 단행본입니다. 학술 모노그래프와 별도로, 보다 폭넓은 독자를 향한 저서를 모았습니다.",
    badge: "단행본",
    authorSuffix: " 지음",
    isbnPrefix: "ISBN",
  },
  academics: {
    eyebrow: "Events and Activities",
    title: "행사 및 활동",
    body:
      "Bitcoinology Lab의 세미나, 콜로퀴움, 학술대회 등 주요 행사 이력을 확인하세요.",
    emptyMessage: "행사 정보가 준비되면 이곳에 게시됩니다.",
    cmsHint: "Sanity CMS에서 행사를 등록하면 자동으로 표시됩니다.",
    speakerPrefix: "발표:",
    categories: {
      seminar: "세미나",
      colloquium: "콜로퀴움",
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
      "북콘서트, 콜로퀴움, 총동문회 등 Bitcoinology Lab의 주요 활동 현장을 소개합니다.",
    more: "활동 더 보기 →",
  },
  detail: {
    emptyBody: "아직 작성된 본문이 없습니다. 관리자 페이지에서 콘텐츠를 추가해주세요.",
    downloadFile: "파일 다운로드",
    details: "세부 사항",
  },
};

export default ko;
