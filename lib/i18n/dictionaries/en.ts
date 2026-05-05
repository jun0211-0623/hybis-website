import type ko from "./ko";

type KoDict = typeof ko;

const en: KoDict = {
  meta: {
    title: "Bitcoinology Lab — Where Value, Trust, and Culture Converge",
    description:
      "An interdisciplinary research hub exploring how value, trust, and society are being reconstituted in the age of digital money and artificial intelligence.",
  },
  nav: {
    links: [
      {
        label: "About",
        children: [
          { label: "Greeting", href: "/about/greeting" },
          { label: "Mission", href: "/about/mission" },
          { label: "History", href: "/about/history" },
          { label: "Organization", href: "/about/structure" },
          { label: "Faculty", href: "/about/faculty" },
          { label: "Partners", href: "/about/partners" },
          { label: "Location", href: "/about/location" },
        ],
      },
      {
        label: "News",
        children: [{ label: "Press", href: "/news" }],
      },
      {
        label: "Academic Events",
        children: [
          { label: "Colloquium", href: "/academics/colloquium" },
          {
            label: "International Conference",
            href: "/academics/international-conference",
          },
        ],
      },
      {
        label: "Programs",
        href: "/programs/graduate",
      },
      {
        label: "Resources",
        children: [
          { label: "Monographs", href: "/resources/monographs" },
          { label: "Co-authored Works", href: "/resources/coauthored" },
          { label: "Academic Papers", href: "/resources/papers" },
          { label: "Policy Reports", href: "/resources/reports" },
          { label: "Photos", href: "/resources/photos" },
        ],
      },
    ],
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    eyebrow: "Value, Trust, Society",
    title: "Bitcoinology Lab",
    tagline: {
      prefix: "Where Value, Trust, and Culture ",
      highlight: "Converge",
      suffix: ".",
    },
    body:
      "Bitcoinology Lab is an interdisciplinary research hub that examines, through the humanities, how value, trust, and society are being reconstituted in the era of digital money and artificial intelligence.",
    ctaResearch: "Explore Research",
    ctaPrograms: "View Programs",
  },
  highlights: {
    eyebrow: "News and Events",
    title: "Latest Highlights",
    body:
      "A snapshot of Bitcoinology Lab's latest colloquia, monographs, and press coverage.",
    readMore: "Read more",
    viewArticle: "Read article",
    prev: "Previous",
    next: "Next",
  },
  about: {
    eyebrow: "Research Areas",
    title: "Research Areas",
    body:
      "We investigate, through the humanities, how value, trust, and society are reconstituted in the age of digital money and artificial intelligence.",
    coreResearchBadge: "Core Research",
    areas: [
      {
        title: "The Humanities of Value, Trust, and Society",
        description:
          "Reading Bitcoin as a civilizational experiment, we analyze how modes of communal coordination, legitimation of authority, and the meaning of money and freedom are being reshaped.",
        image: "/research-areas/value-trust.png",
        featured: true,
      },
      {
        title: "Infrastructures of Computational Trust",
        description:
          "Blockchain, platforms, and AI-driven decision systems are examined through philosophy, ethics, and political thought as infrastructures and imaginaries of computational trust.",
        image: "/research-areas/computational-trust.png",
      },
      {
        title: "Interdisciplinary Integration",
        description:
          "We connect philosophy, literary and cultural studies, intellectual history, ethics, political thought, and science and technology studies (STS), combined with empirical work on markets, regulation, and everyday practice.",
        image: "/research-areas/interdisciplinary.png",
      },
      {
        title: "Scholarly Rigor and Public Insight",
        description:
          "Through seminars, workshops, publications, and joint projects, we produce both rigorous scholarship and public insight toward a more responsible future.",
        image: "/research-areas/scholarly-insight.png",
      },
    ],
  },
  programs: {
    eyebrow: "Programs",
    title: "Programs",
    detailCta: "Learn more →",
    deptCta: "Department →",
    graduate: {
      title: "Graduate Cooperative Program in Bitcoin and Monetary Philosophy",
      subtitle:
        "Graduate Cooperative Program in Bitcoin and Monetary Philosophy",
      description:
        "An inter-departmental cooperative program within the College of Humanities, studying the economic, political, and cultural shifts brought by digital money and blockchain technology from a humanistic perspective. Awards the Master of Arts degree, with an annual intake of 20 students.",
      highlights: [
        { label: "Degree", value: "Master of Arts" },
        {
          label: "Credits",
          value: "27+ credits (18+ in major)",
        },
        { label: "Annual Intake", value: "20 students" },
      ],
    },
  },
  resources: {
    eyebrow: "Resources",
    title: "Research Resources",
    body:
      "Monographs, academic papers, and policy reports from Bitcoinology Lab.",
    tabs: {
      monograph: "Monographs",
      coauthored: "Co-authored Works",
      paper: "Papers",
      report: "Policy Reports",
    },
    monographBadge: "Monograph",
    authorSuffix: "",
    isbnPrefix: "ISBN",
    moreLink: "Read more",
  },
  footer: {
    cta: {
      eyebrow: "Join Us",
      title: "Join us in shaping this research.",
      body:
        "We welcome researchers, students, and institutions who want to build the future of Bitcoin and monetary philosophy with us.",
      contact: "Contact Us",
      viewPrograms: "View Programs",
    },
    groups: [
      {
        title: "About",
        links: [
          { label: "Greeting", href: "/about/greeting" },
          { label: "Mission", href: "/about/mission" },
          { label: "History", href: "/about/history" },
          { label: "Organization", href: "/about/structure" },
          { label: "Faculty", href: "/about/faculty" },
          { label: "Partners", href: "/about/partners" },
          { label: "Location", href: "/about/location" },
        ],
      },
      {
        title: "News",
        links: [{ label: "Press", href: "/news" }],
      },
      {
        title: "Programs",
        links: [
          { label: "Graduate Program", href: "/programs/graduate" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Monographs", href: "/resources/monographs" },
          { label: "Co-authored Works", href: "/resources/coauthored" },
          { label: "Academic Papers", href: "/resources/papers" },
          { label: "Policy Reports", href: "/resources/reports" },
          { label: "Photos", href: "/resources/photos" },
        ],
      },
    ],
    copyright: "Bitcoinology Lab",
    contacts: {
      email: "hybitcoinologylab@gmail.com",
      address: "222 Wangsimni-ro, Seongdong-gu, Seoul",
      deptLink: "Dept. of Bitcoin Philosophy →",
    },
  },
  aboutPage: {
    backHome: "Home",
    eyebrowAbout: "About Bitcoinology Lab",
    title: "About the Lab",
    intro:
      "Bitcoinology Lab is an interdisciplinary research hub that examines, through the humanities, how value, trust, and society are being reconstituted as digital money converges with artificial intelligence.",
    sections: {
      bitcoinology: {
        eyebrow: "Greeting",
        title: "Greeting",
        subtitle: "What is Bitcoinology?",
        paragraphs: [
          {
            type: "mixed",
            parts: [
              {
                text:
                  "\"Bitcoinology\" treats Bitcoin not as a mere technology or speculative asset, but as a civilizational experiment that triggers ",
              },
              {
                text:
                  "the computation and institutionalization of trust, the reconfiguration of money and sovereignty, and the redefinition of freedom and community",
                strong: true,
              },
              { text: "." },
            ],
          },
          {
            type: "mixed",
            parts: [
              {
                text:
                  "The lab connects philosophy, literary and cultural studies, intellectual history, ethics, political thought, and science and technology studies (STS) to analyze the infrastructures and imaginaries of ",
              },
              { text: "computational trust", strong: true },
              {
                text:
                  " — including blockchain, platforms, and AI-based decision systems.",
              },
            ],
          },
          {
            type: "plain",
            text:
              "Grounded in conceptual analysis and close reading, we combine empirical research on markets, regulation, and everyday practice to make sense of real-world change. Through seminars, workshops, publications, and joint projects, we aim to produce both scholarly rigor and public insight.",
          },
        ],
        director: "Seongho Yoon",
        directorRole:
          "Director, Bitcoinology Lab · Professor, Dept. of English, Hanyang University",
      },
      mission: {
        eyebrow: "Mission",
        title: "Our Mission",
        items: [
          {
            num: "01",
            title: "The Humanities of Value, Trust, and Society",
            desc:
              "Reading Bitcoin as a civilizational experiment, we analyze how modes of communal coordination, legitimation of authority, and the meaning of money and freedom are being reshaped.",
          },
          {
            num: "02",
            title: "Infrastructures of Computational Trust",
            desc:
              "Blockchain, platforms, and AI-driven decision systems are examined through philosophy, ethics, and political thought as infrastructures and imaginaries of computational trust.",
          },
          {
            num: "03",
            title: "Interdisciplinary Integration",
            desc:
              "We connect philosophy, literary and cultural studies, intellectual history, ethics, political thought, and STS, combined with empirical work on markets, regulation, and everyday practice.",
          },
          {
            num: "04",
            title: "Scholarly Rigor and Public Insight",
            desc:
              "Through seminars, workshops, publications, and joint projects, we produce both rigorous scholarship and public insight toward a more responsible future.",
          },
        ],
      },
      history: {
        eyebrow: "History",
        title: "History",
        items: [
          {
            date: "2025.07",
            event: "Launch of the Graduate Cooperative Program in Bitcoin and Monetary Philosophy",
          },
          {
            date: "2025.01",
            event: "Launch of the Bitcoinology Lab Monograph Series",
          },
          { date: "2024.05", event: "Bitcoinology Lab founded" },
          {
            date: "2024.02",
            event:
              "Graduate Cooperative Program in Bitcoin and Monetary Philosophy officially approved",
          },
        ],
      },
      organization: {
        eyebrow: "Organization",
        title: "Organization",
        directorRole: "Director",
        director: {
          name: "Prof. Seongho Yoon",
        },
        groups: [
          {
            title: "Affiliated Faculty",
            members: [
              { name: "Taemin Oh", dept: "Bitcoin and Monetary Philosophy" },
              { name: "Sangwook Lee", dept: "Philosophy" },
              {
                name: "Kwanghee Lee",
                dept: "Popular Culture and Scenario Studies",
              },
              { name: "Seungwoo Kim", dept: "History" },
              { name: "Hyungseob Lee", dept: "English" },
            ],
          },
          {
            title: "Advisory Board",
            members: [
              {
                name: "Namki Hong",
                dept:
                  "Former Deputy Prime Minister and Minister of Economy and Finance",
              },
              {
                name: "Hojoo Yoon",
                dept: "President, Hanyang University Medical Center",
              },
              {
                name: "Gyuchang Yu",
                dept:
                  "Former Dean, School of Business · Former Director, Paiknam Academic Information Center",
              },
              {
                name: "Pangyu Kim",
                dept:
                  "Former Ambassador to Nigeria · Former Superintendent, Republic of Korea Naval Academy",
              },
              { name: "Jinwoo Jeon", dept: "Partner, Samil PwC" },
              {
                name: "Jaesung Hwang",
                dept:
                  "Head of Hedge Fund Management, Leading Investment and Securities",
              },
              { name: "Wonhee Lee", dept: "CEO, Lee Wonhee Tax and Accounting" },
            ],
          },
          {
            title: "Research Fellows",
            members: [
              { name: "Mingu Park", dept: "Senior Research Fellow" },
              { name: "Hyemin Son", dept: "Senior Research Fellow" },
              { name: "Myungseung Choi", dept: "Research Assistant" },
              { name: "Changjun Lee", dept: "Research Assistant" },
              { name: "Yongrae Cho", dept: "Industry-Academia Research Fellow" },
              { name: "Daehong Kang", dept: "Industry-Academia Research Fellow" },
            ],
          },
        ],
      },
      faculty: {
        eyebrow: "Faculty",
        title: "Faculty",
        intro:
          "Scholars affiliated with both Bitcoinology Lab and the Hanyang University Graduate Cooperative Program in Bitcoin and Monetary Philosophy.",
        people: [
          {
            name: "Seongho Yoon",
            role: "Director · Professor",
            affiliation:
              "Hanyang University, Department of English · Bitcoin and Monetary Philosophy",
            field: "Modern American Literature · Bitcoin Humanities",
            bio:
              "Earned his B.A. from Seoul National University and his Ph.D. from the University of Massachusetts. Teaches Bitcoin Intellectual History, Crypto Cultural Studies, and Crypto Key Figures, and leads research in Bitcoin humanities.",
            works: [
              { type: "book", title: "Underdog Writing: Mapping Asian American Literature" },
              { type: "paper", title: "The Transgressive Spatial Imagination in the 20th-Century American Novel" },
              { type: "award", title: "Academic Prize, The English Language and Literature Association of Korea" },
              { type: "award", title: "Best Paper Award, The Yeats Society of Korea" },
            ],
            photo: "/faculty/yoon-seong-ho.png",
          },
          {
            name: "Taemin Oh",
            role: "Adjunct Professor",
            affiliation: "Hanyang University, Department of Bitcoin and Monetary Philosophy",
            field: "Humanities · Geopolitics · International Financial Order",
            bio:
              "A graduate of Yonsei University and the pioneer of Bitcoin humanities in Korea. Beginning with Bitcoin Was Strong (2014), through more than ten books and continuous lectures, he reads Bitcoin as a reinvention of trust and a fissure in dollar hegemony — building an independent humanistic interpretation. Through unceasing co-authorship with his graduate students, he lays the intellectual foundations surrounding digital assets.",
            works: [
              { type: "book", title: "Bitcoin Was Strong (2014)" },
              { type: "book", title: "Smart Contract: A Trust Revolution (2018)" },
              { type: "book", title: "The Geopolitics of the Dollar and Bitcoin (2023)" },
              { type: "book", title: "Geopolitics in the Trump Era and Bitcoin (2025)" },
              { type: "book", title: "There Is No Future Without Bitcoin (2025)" },
              { type: "book", title: "There Is No Future Without Tokenization (2026)" },
              { type: "book", title: "There Is No Future Without Ethereum (Forthcoming)" },
            ],
            photo: "/faculty/oh-tae-min.jpg",
          },
          {
            name: "Sangwook Lee",
            role: "Associate Professor",
            affiliation: "Hanyang University, Department of Philosophy · Artificial Intelligence",
            field: "Philosophy of Science · Philosophy of Technology · Science and Technology Studies · Research Ethics",
            bio:
              "Earned his Ph.D. from the London School of Economics with a philosophical analysis of how condensed-matter physics models complex macroscopic phenomena (Robert McKenzie Prize), after studying physics at Seoul National University. Joined Hanyang University in 2002, where he teaches philosophy of science and technology, STS, and research ethics. In our program he leads Topics in Digital Ethics and Information Philosophy of Cryptocurrency, examining how AI and blockchain reframe the questions of trust, information, and responsibility through analytic philosophy and STS.",
            works: [
              { type: "paper", title: "The Limits of Artificial Intelligence and the Possibility of Generalized Intelligence (Philosophy of Science 12.1, 2009)" },
              { type: "paper", title: "Situatedness and Intentionality: A Way of Reading Contemporary Philosophy of Technology (Philosophy and Reality 83, Spring 2009)" },
              { type: "book", title: "A Philosophical Understanding of Science and Technology (5th ed., co-authored, Hanyang University Press, 2010)" },
              { type: "book", title: "Desiring Technology (co-authored, Donga-Asia, 2009)" },
              { type: "book", title: "Talking About Philotechnology (co-authored, Haenamu, 2008)" },
            ],
            photo: "/faculty/lee-sang-wook.jpg",
          },
          {
            name: "Kwanghee Lee",
            role: "Assistant Professor",
            affiliation:
              "Hanyang University, Department of English · Popular Culture and Scenario Studies · Bitcoin and Monetary Philosophy",
            field: "Linguistics-based Popular Culture and Monetary Philosophy",
            bio:
              "Researches popular culture and monetary philosophy from a linguistic foundation. Has authored 18 publications including textbooks and monographs.",
            works: [],
            photo: "/faculty/lee-kwang-hee.png",
          },
          {
            name: "Seungwoo Kim",
            role: "Assistant Professor",
            affiliation: "Hanyang University, Department of History",
            field:
              "Cultural History · Financial Sociology · Cryptocurrency and Neoliberalism · Public History",
            bio:
              "Earned his Ph.D. from the Faculty of History at the University of Cambridge with research on the history of the Eurodollar market. After serving as a researcher at the Graduate Institute Geneva, postdoctoral fellow at Uppsala University, and faculty member at Kyungpook National University, he joined the Department of History at Hanyang University in March 2025.",
            works: [
              { type: "paper", title: "Exclusionary Regimes, Financial Corporations, and Human Rights Activism in the UK, 1973–92 (2023)" },
              { type: "paper", title: "A brief encounter — North Korea in the Eurocurrency market, 1973–1980 (2023)" },
              { type: "paper", title: "Inflation, F. A. Hayek, and the Neoliberal Origins of Cryptocurrency (2024)" },
              { type: "book", title: "Can the Market Be Beaten? — A History of 20th-Century Stock Market Reading and Investment Techniques (2021)" },
            ],
            photo: "/faculty/kim-seung-woo.jpg",
          },
          {
            name: "Hyungseob Lee",
            role: "Associate Professor of Literature",
            affiliation: "Hanyang University, Department of English",
            field: "Drama · Irish Studies · Film Studies · Cultural Politics",
            bio:
              "Researches tragedy, ethics, and cultural politics through drama, film, and Irish literature. He has worked on the tragic imagination of American suburbia and literature as transnational humanities, and in our program he extends this lens of cultural critique into the reshaping of value and trust in the era of digital money.",
            works: [
              { type: "paper", title: "Ethical Contours of the (Sub)urban Space-Time Relationship in the Early Postwar American Drama (Forum for World Literature Studies 7.2)" },
              { type: "paper", title: "Love in the Time of the Troubles: The Cultural Politics of Tragic Form in Northern Irish Cinema (Literature and Film 19.1)" },
              { type: "paper", title: "'To every life an after-life. To every demon a fairy tale': The Life and Times of an Irish Policeman in the British Empire in Sebastian Barry's The Steward of Christendom (JELL 57.3)" },
              { type: "book", title: "Reading American History Through Film (co-authored, Konkuk University Press, 2018)" },
              { type: "book", title: "Toward a Transnational Earth Community (co-authored, Hanyang University Press, 2018)" },
            ],
            photo: "/faculty/lee-hyung-seop.jpg",
          },
        ],
        worksLabel: "Selected Works",
        placeholderBio: "Biography to be added.",
      },
      partners: {
        eyebrow: "Partners",
        title: "Partners",
        items: [
          {
            name: "Institute of American and European Studies, KNU",
            nameEn: "Kyungpook National University",
            image: "/partners/knu.jpg",
            href: "https://iaes.knu.ac.kr/",
          },
          {
            name: "OtaVerse — Metanomia",
            nameEn: "OtaVerse Inc.",
            image: "/partners/otaverse.png",
            href: "https://btcmobick.org/metanomia",
          },
        ],
      },
      sponsors: {
        eyebrow: "Sponsors",
        title: "Sponsors",
        items: [
          {
            name: "Mobickers Inc.",
            nameEn: "Mobickers Inc.",
            image: "/partners/mobickers.png",
          },
        ],
      },
      contact: {
        eyebrow: "Contact",
        title: "Contact",
        email: "Email",
        address: "Address",
        addressValue:
          "Room 520, 5F, Hanyang University, 222 Wangsimni-ro, Seongdong-gu, Seoul, Korea",
      },
    },
  },
  newsPage: {
    backHome: "Home",
    eyebrow: "News",
    title: "News",
    body: "Press coverage and recent news from Bitcoinology Lab.",
    pressEyebrow: "Press",
    pressTitle: "Press Coverage",
    articleLink: "Read article",
  },
  colloquiumPage: {
    backHome: "Home",
    eyebrow: "Colloquium",
    title: "Colloquium",
    body:
      "A colloquium series hosted by Hanyang University's Department of Bitcoin and Monetary Philosophy. Leading voices share frontier perspectives on digital money, trust, and society.",
    listEyebrow: "Upcoming and Past",
    listTitle: "Colloquium Schedule",
    statusUpcoming: "Upcoming",
    statusPast: "Past",
    topicLabel: "Topic",
    speakerLabel: "Speaker",
    dateLabel: "Date",
    venueLabel: "Venue",
    hostLabel: "Host",
    posterAlt: "Colloquium poster",
  },
  internationalConferencePage: {
    backHome: "Home",
    eyebrow: "International Conference",
    title: "International Conference",
  },
  graduatePage: {
    back: "Programs",
    eyebrow: "Graduate Cooperative Program",
    title: "Graduate Cooperative Program in Bitcoin and Monetary Philosophy",
    intro:
      "An inter-departmental cooperative program within the College of Humanities. We study the economic, political, and cultural transformations brought by digital money and blockchain technology through a humanistic lens — aspiring to become an academic hub that interprets decentralized money, a central concern of the Fourth Industrial Revolution, across disciplines.",
    purposeEyebrow: "Purpose",
    purposeTitle: "Purpose",
    purposeBody:
      "Founded within the College of Humanities at Hanyang University as Korea's first graduate program in monetary philosophy, our program responds to an age in which money itself is being redefined — the contestation of sovereign currency, the mainstreaming of digital assets, and the spread of decentralized governance (DAOs). We approach the blockchain ecosystem neither as advocates nor as detractors, but through humanistic critique and interdisciplinary analysis, examining its implications for value, ethics, and institutions. Spanning philosophy, economics, political science, and cultural studies, our research trains scholars who can rethink money and trust in the digital age — across the academy, policy, and industry.",
    goalsEyebrow: "Education Goals",
    goalsTitle: "Education Goals",
    goals: [
      "Cultivate theoretical capacity to interpret the Bitcoin phenomenon scholarly, building on traditions of monetary, financial, and information philosophy.",
      "Develop critical analysis of blockchain governance, political-economic structures, and issues in digital ethics.",
      "Strengthen integrative research that connects DAOs, smart contracts, and the metaverse to real-world problem-solving.",
      "Foster global research and collaboration capacity through participation in international academic networks.",
    ],
    curriculumEyebrow: "Curriculum",
    curriculumTitle: "Curriculum",
    curriculum: {
      "Year 1": {
        "Semester 1": [
          "bitcoin-intellectual-history",
          "philosophy-of-information",
          "blockchain-money-phenomena",
          "bitcoin-technology-industry",
        ],
        "Semester 2": [
          "digital-ethics-topics",
          "metaverse-humanities-economics",
          "international-finance-foundations",
          "thesis-writing-method",
        ],
      },
      "Year 2": {
        "Semester 1": [
          "crypto-cultural-studies",
          "dao-political-philosophy",
          "bitcoin-dollar-geopolitics",
          "history-of-money",
          "central-banking",
        ],
        "Semester 2": [
          "supply-chain-finance-smart-contracts",
          "crypto-key-figures",
          "philosophy-currency-language",
          "cryptocurrency-information-philosophy",
        ],
      },
    },
    requirementsEyebrow: "Requirements",
    requirementsTitle: "Requirements",
    requirements: [
      { label: "Degree", value: "Master of Arts" },
      { label: "Credits", value: "27+ regular credits" },
      { label: "Major Credits", value: "18+ credits" },
      { label: "Annual Intake", value: "20 students" },
      {
        label: "Graduation",
        value:
          "Comprehensive exam → thesis advising → thesis defense",
      },
    ],
    careersEyebrow: "Career Paths",
    careersTitle: "Career Paths",
    careers: [
      {
        title: "Academia and Research",
        desc: "Researchers in blockchain philosophy, digital ethics, financial humanities",
      },
      {
        title: "Fintech and Crypto",
        desc: "Policy, strategy, and governance consultants",
      },
      {
        title: "Regulation",
        desc: "Policy researchers at digital-asset regulators",
      },
      {
        title: "Media and Criticism",
        desc: "Critics of digital finance and blockchain culture",
      },
      {
        title: "International and NGO",
        desc: "Project managers in inclusive finance",
      },
    ],
    careersBody:
      "Industry scholarships and research-center networks actively support career pathways.",
    contactTitle: "Interested in applying?",
    contactBody:
      "For inquiries about the Graduate Cooperative Program, please reach out.",
    contactCta: "Contact Us →",
    deptCta: "Department →",
  },
  monographs: {
    eyebrow: "Monograph Series",
    title: "Monographs",
    body:
      "The Hanyang University Monograph Series on Bitcoin and the Humanities — scholarly books from the Bitcoinology Lab research team.",
    badge: "Monograph",
    authorSuffix: "",
    isbnPrefix: "ISBN",
  },
  coAuthoredBooks: {
    eyebrow: "Co-authored Works",
    title: "Co-authored Works",
    body:
      "Trade books co-authored by Bitcoinology Lab researchers — works addressed to a broader readership, separate from the academic monograph series.",
    badge: "Book",
    authorSuffix: "",
    isbnPrefix: "ISBN",
  },
  academics: {
    eyebrow: "Events and Activities",
    title: "Events and Activities",
    body:
      "Browse the history of seminars, colloquia, and conferences hosted by Bitcoinology Lab.",
    emptyMessage: "Event listings will appear here when available.",
    cmsHint: "Entries registered in Sanity CMS will appear automatically.",
    speakerPrefix: "Speaker:",
    categories: {
      seminar: "Seminar",
      colloquium: "Colloquium",
      conference: "Conference",
      workshop: "Workshop",
    },
  },
  research: {
    eyebrow: "Publications",
    title: "Publications",
    body: "Key publications and research outputs from Bitcoinology Lab.",
    authorLabel: "Author",
    publisherLabel: "Publisher",
    more: "Read more",
    emptyMessage: "Publications will appear here when available.",
    cmsHint:
      "Publications registered in Sanity CMS will appear automatically.",
  },
  gallery: {
    eyebrow: "Beyond the Page",
    title: "Beyond the Page",
    body:
      "Book talks, colloquia, alumni gatherings, and other Bitcoinology Lab activities in the field.",
    more: "See more activity →",
  },
  detail: {
    emptyBody:
      "No body content yet. Please add content from the admin panel.",
    downloadFile: "Download file",
    details: "Details",
  },
};

export default en;
