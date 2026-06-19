/* =========================================================================
   Claude Design 학습 데이터
   - 이 파일은 자동 업데이트 스케줄 작업이 갱신합니다.
   - lessons 배열에 강의 카드를 추가하면 사이트에 자동 반영됩니다.
   - 새 강의를 추가할 때는 isNew: true 로 표시하면 "NEW" 배지가 붙습니다.
   - 각 강의에는 practice(실습) 필드가 있습니다:
       practice: { goal:"실습 목표", mission:[단계...], prompts:[복사용 프롬프트...] }
   ========================================================================= */

const COURSE_META = {
  title: "Claude Design 배우기",
  subtitle: "Claude 디자인이 업데이트될 때마다 새로운 기능을 배우고, 바로 실습하는 학습 사이트",
  lastUpdated: "2026-06-19",
  version: "1.1.0",
  // 자동 업데이트가 참고하는 공식 출처
  sources: [
    { label: "Claude Design 공식 소개", url: "https://www.anthropic.com/news/claude-design-anthropic-labs" },
    { label: "Anthropic 릴리스 노트", url: "https://releasebot.io/updates/anthropic" }
  ]
};

const CATEGORIES = [
  { id: "all",       label: "전체",            icon: "◆" },
  { id: "basics",    label: "시작하기",         icon: "✦" },
  { id: "system",    label: "디자인 시스템",     icon: "▦" },
  { id: "canvas",    label: "캔버스 편집",       icon: "✎" },
  { id: "code",      label: "Claude Code 연동",  icon: "⌘" },
  { id: "share",     label: "내보내기·공유",      icon: "↗" },
  { id: "advanced",  label: "고급·프론티어",      icon: "✺" }
];

const LEVELS = {
  intro:    { label: "입문", color: "#3D8C6F" },
  mid:      { label: "중급", color: "#C77B30" },
  advanced: { label: "고급", color: "#A24A3D" }
};

const LESSONS = [
  {
    id: "intro-what-is",
    category: "basics",
    level: "intro",
    date: "2026-04-17",
    isNew: false,
    title: "Claude Design이란?",
    summary: "프롬프트로 디자인·프로토타입·슬라이드·원페이저를 만드는 Anthropic Labs 도구. 채팅 패널과 라이브 캔버스가 나란히 있는 분할 화면에서 작업합니다.",
    learn: [
      "Claude Design의 목적과 누구를 위한 도구인지 이해한다",
      "채팅 + 캔버스 분할 인터페이스의 작동 방식을 안다",
      "디자이너가 아니어도 시각 결과물을 만들 수 있는 흐름을 익힌다"
    ],
    steps: [
      "claude.ai/design 에 접속한다 (Pro·Max·Team·Enterprise 플랜에서 사용 가능, 리서치 프리뷰).",
      "왼쪽 채팅 패널에 만들고 싶은 것을 자연어로 설명한다.",
      "오른쪽 캔버스에 Claude가 첫 버전을 생성한다.",
      "대화·인라인 코멘트·직접 편집·슬라이더로 계속 다듬는다."
    ],
    tips: [
      "가장 강력한 비전 모델인 Claude Opus 4.7로 구동됩니다.",
      "디자이너에게는 폭넓은 탐색을, 비디자이너에게는 시각 작업의 진입로를 제공합니다."
    ],
    practice: {
      goal: "Claude Design을 처음 열어 분할 화면(채팅+캔버스)에 익숙해지고, 첫 결과물 한 개를 만들어 봅니다.",
      mission: [
        "claude.ai/design 에 접속해 새 디자인을 시작한다.",
        "아래 프롬프트를 붙여넣어 첫 버전을 생성한다.",
        "왼쪽 채팅으로 \"색을 더 차분하게\" 등 한 가지 수정을 요청해 본다.",
        "캔버스에서 결과가 어떻게 갱신되는지 관찰한다."
      ],
      prompts: [
        "내 취미를 소개하는 심플한 1페이지 소개 카드를 만들어줘. 제목, 한 줄 소개, 좋아하는 것 3가지 목록을 넣고 따뜻한 색감으로.",
        "방금 만든 카드를 조금 더 미니멀하게, 여백을 넉넉히 줘서 다시 보여줘."
      ]
    },
    source: { title: "Introducing Claude Design", url: "https://www.anthropic.com/news/claude-design-anthropic-labs" }
  },
  {
    id: "basics-first-design",
    category: "basics",
    level: "intro",
    date: "2026-04-17",
    isNew: false,
    title: "첫 디자인 만들기: 프롬프트에서 결과물까지",
    summary: "설명하면 Claude가 첫 버전을 만들고, 대화로 반복하며 완성합니다. 실제 활용 사례 6가지로 무엇을 만들 수 있는지 감을 잡습니다.",
    learn: [
      "프롬프트 → 생성 → 반복의 기본 창작 흐름을 익힌다",
      "프로토타입·와이어프레임·덱·마케팅 자료 등 활용처를 안다"
    ],
    steps: [
      "만들 결과물의 목적과 대상을 한두 문장으로 설명한다.",
      "Claude가 만든 첫 버전을 보고 마음에 드는 방향을 고른다.",
      "\"여백을 넓혀줘\", \"더 밝은 톤으로\" 같이 구체적으로 수정 요청한다.",
      "여러 방향을 동시에 탐색하고 싶으면 변형을 요청한다."
    ],
    tips: [
      "활용 예: 인터랙티브 프로토타입, 제품 와이어프레임, 디자인 탐색, 피치덱, 랜딩페이지·SNS 자산, 프론티어 디자인.",
      "한 번에 완벽을 노리기보다 작게 여러 번 반복하는 것이 빠릅니다."
    ],
    practice: {
      goal: "하나의 주제로 랜딩페이지를 만들고, 3번의 반복으로 완성도를 끌어올립니다.",
      mission: [
        "가상의 제품(예: 동네 베이커리)을 정하고 랜딩페이지를 요청한다.",
        "첫 결과에서 헤드라인만 더 강렬하게 바꿔 달라고 요청한다.",
        "버튼·여백·색을 한 번 더 다듬어 달라고 요청한다.",
        "마지막으로 \"모바일 화면 버전도 보여줘\"로 반응형을 확인한다."
      ],
      prompts: [
        "동네 수제 베이커리 '아침빵'의 랜딩페이지를 만들어줘. 히어로 영역, 인기 메뉴 3개, 위치/영업시간, 예약 버튼을 넣고 따뜻하고 고소한 분위기로.",
        "헤드라인을 더 감각적이고 짧게 바꿔주고, 예약 버튼을 눈에 띄게 강조해줘.",
        "이 페이지의 모바일 화면 버전을 보여줘."
      ]
    },
    source: { title: "Introducing Claude Design", url: "https://www.anthropic.com/news/claude-design-anthropic-labs" }
  },
  {
    id: "system-brand-builtin",
    category: "system",
    level: "mid",
    date: "2026-04-17",
    isNew: false,
    title: "브랜드를 내장하기: 자동 적용되는 디자인 시스템",
    summary: "온보딩 때 Claude가 코드베이스와 디자인 파일을 읽어 팀의 디자인 시스템을 구축합니다. 이후 모든 프로젝트에 색상·타이포·컴포넌트가 자동 적용됩니다.",
    learn: [
      "디자인 시스템이 자동으로 적용되는 원리를 이해한다",
      "여러 디자인 시스템을 운영·관리하는 방법을 안다"
    ],
    steps: [
      "온보딩에서 코드베이스 또는 디자인 파일을 연결한다.",
      "Claude가 색상·타이포그래피·컴포넌트를 읽어 시스템을 생성한다.",
      "이후 새 프로젝트는 이 시스템을 자동으로 사용한다.",
      "시간이 지나며 시스템을 다듬고, 팀별로 여러 개 유지할 수 있다."
    ],
    tips: [
      "결과물이 회사 전체 디자인과 일관되게 유지됩니다.",
      "한 팀이 둘 이상의 디자인 시스템을 가질 수 있습니다."
    ],
    practice: {
      goal: "내 브랜드 토큰(색·폰트)을 알려주고, 두 개의 서로 다른 화면이 같은 시스템으로 일관되게 나오는지 확인합니다.",
      mission: [
        "아래 프롬프트로 내 브랜드 색상·폰트 규칙을 먼저 지정한다.",
        "같은 대화에서 '가격 페이지'를 요청한다.",
        "이어서 '문의 폼 페이지'를 요청한다.",
        "두 화면의 색·버튼·타이포가 동일하게 적용됐는지 비교한다."
      ],
      prompts: [
        "앞으로 내 브랜드 규칙을 지켜줘: 메인 컬러 #2E6F5E, 보조 컬러 #E8B04B, 배경 아이보리, 제목은 세리프 굵게, 본문은 산세리프. 버튼은 둥근 모서리.",
        "방금 규칙으로 SaaS 제품의 가격 페이지를 만들어줘. 3개 요금제 카드 포함.",
        "같은 브랜드 규칙으로 문의하기 폼 페이지도 만들어줘."
      ]
    },
    source: { title: "Introducing Claude Design", url: "https://www.anthropic.com/news/claude-design-anthropic-labs" }
  },
  {
    id: "system-import-2026-06",
    category: "system",
    level: "mid",
    date: "2026-06-17",
    isNew: true,
    title: "디자인 시스템 가져오기 (2026년 6월 업데이트)",
    summary: "GitHub 저장소·디자인 파일·직접 업로드로 하나 이상의 디자인 시스템을 가져옵니다. Claude가 실제 컴포넌트로 만들고, 출력물을 시스템에 대조해 사용자가 보기 전에 스스로 교정합니다.",
    learn: [
      "디자인 시스템을 가져오는 세 가지 경로를 안다",
      "Claude의 자가 검증·자동 교정 동작을 이해한다"
    ],
    steps: [
      "GitHub 저장소, 디자인 파일, 또는 원본 업로드 중 하나로 시스템을 가져온다.",
      "Claude가 가져온 실제 컴포넌트로 디자인을 빌드한다.",
      "출력물을 디자인 시스템 기준에 자동 대조한다.",
      "어긋난 부분은 사용자에게 보여주기 전에 스스로 교정한다."
    ],
    tips: [
      "환각으로 만든 마크업이 아니라 \"진짜\" 컴포넌트로 빌드합니다.",
      "여러 개의 디자인 시스템을 동시에 가져와 사용할 수 있습니다."
    ],
    practice: {
      goal: "실제 디자인 시스템(공개 GitHub 저장소 또는 업로드)을 가져와, 그 컴포넌트로 화면을 만들게 합니다.",
      mission: [
        "Claude Design 설정에서 디자인 시스템 가져오기를 연다.",
        "공개 컴포넌트 라이브러리 GitHub URL을 붙여넣거나, 사내 디자인 파일을 업로드한다.",
        "아래 프롬프트로 그 시스템 컴포넌트만 써서 화면을 만들게 한다.",
        "결과가 가져온 컴포넌트 규격과 맞는지(버튼·간격·색) 확인한다."
      ],
      prompts: [
        "방금 가져온 디자인 시스템의 컴포넌트만 사용해서 대시보드 첫 화면을 만들어줘. 새 스타일을 임의로 만들지 말고 시스템 규격을 그대로 지켜줘.",
        "이 화면이 가져온 디자인 시스템 기준과 어긋나는 부분이 있으면 스스로 점검하고 수정한 버전을 보여줘."
      ]
    },
    source: { title: "Claude Design 6월 업데이트 (VentureBeat)", url: "https://venturebeat.com/technology/anthropic-ships-major-claude-design-overhaul-with-design-system-imports-code-round-trips-and-a-fix-for-its-token-burning-problem" }
  },
  {
    id: "canvas-wysiwyg-2026-06",
    category: "canvas",
    level: "mid",
    date: "2026-06-17",
    isNew: true,
    title: "캔버스에서 직접 편집하기 (WYSIWYG)",
    summary: "프롬프트에만 의존하지 않고 캔버스 위 요소를 직접 조작합니다. 드래그·리사이즈·레이아웃 컨트롤로 시각적으로 다듬으면 Claude가 코드를 갱신합니다.",
    learn: [
      "WYSIWYG 캔버스 편집으로 직접 조작하는 법을 익힌다",
      "시각 편집과 Claude의 코드 갱신이 연동되는 방식을 안다"
    ],
    steps: [
      "캔버스에서 편집할 요소를 클릭해 선택한다.",
      "드래그·리사이즈, 새 레이아웃 컨트롤로 위치와 크기를 조정한다.",
      "특정 요소에 인라인 코멘트를 남기거나 텍스트를 직접 수정한다.",
      "조정 노브로 간격·색상·레이아웃을 실시간으로 미세 조정한다.",
      "\"이 변경을 전체 디자인에 적용해줘\"라고 요청해 일괄 반영한다."
    ],
    tips: [
      "인라인 코멘트, 직접 텍스트 편집, 조정 노브를 함께 쓰면 정밀하게 다룰 수 있습니다.",
      "데스크톱 지원이 모든 유료 플랜으로 확대되었습니다."
    ],
    practice: {
      goal: "프롬프트로 만든 화면을 마우스로 직접 편집해, '말 대신 손'으로 다듬는 감을 익힙니다.",
      mission: [
        "아래 프롬프트로 간단한 카드 3개짜리 화면을 만든다.",
        "캔버스에서 카드 하나를 클릭해 드래그로 위치를 옮겨 본다.",
        "제목 텍스트를 더블클릭해 직접 글자를 고친다.",
        "조정 노브로 카드 사이 간격을 넓힌 뒤, '이 간격을 모든 카드에 적용해줘'라고 요청한다."
      ],
      prompts: [
        "추천 도서 3권을 보여주는 카드 3개를 가로로 배치해줘. 각 카드에 표지 자리, 제목, 한 줄 평을 넣어줘.",
        "지금 캔버스에서 내가 조정한 카드 간격과 위치를 전체 카드에 동일하게 적용해줘."
      ]
    },
    source: { title: "Claude Design 6월 업데이트 (TechRepublic)", url: "https://www.techrepublic.com/article/news-anthropic-claude-design-overhaul-enterprise-teams/" }
  },
  {
    id: "basics-import-anywhere",
    category: "basics",
    level: "intro",
    date: "2026-04-17",
    isNew: false,
    title: "어디서든 가져오기: 텍스트·문서·코드·웹 캡처",
    summary: "텍스트 프롬프트로 시작하거나 이미지·문서(DOCX·PPTX·XLSX)를 업로드하고, 코드베이스를 가리키거나 웹 캡처 도구로 사이트 요소를 그대로 가져옵니다.",
    learn: [
      "시작 소스 네 가지(텍스트·문서·코드·웹 캡처)를 안다",
      "실제 제품처럼 보이는 프로토타입을 만드는 방법을 익힌다"
    ],
    steps: [
      "텍스트 프롬프트로 시작하거나,",
      "이미지·DOCX·PPTX·XLSX 문서를 업로드하거나,",
      "Claude가 코드베이스를 참고하도록 가리키거나,",
      "웹 캡처 도구로 자사 웹사이트 요소를 직접 가져온다."
    ],
    tips: [
      "웹 캡처를 쓰면 프로토타입이 실제 제품과 똑같아 보입니다."
    ],
    practice: {
      goal: "문서 한 개를 업로드해 그 내용을 곧바로 시각 결과물로 바꿔 봅니다.",
      mission: [
        "정리해 둔 회의록이나 기획 메모(DOCX/PPTX/XLSX 또는 텍스트)를 준비한다.",
        "Claude Design에 파일을 업로드한다.",
        "아래 프롬프트로 문서를 슬라이드 또는 원페이저로 변환 요청한다.",
        "여력이 되면 웹 캡처로 좋아하는 사이트의 헤더를 가져와 톤을 참고시킨다."
      ],
      prompts: [
        "방금 업로드한 문서 내용을 5장짜리 발표 슬라이드로 정리해줘. 핵심만 뽑고 시각적으로 보기 좋게.",
        "이 슬라이드를 1페이지 요약 원페이저 버전으로도 만들어줘."
      ]
    },
    source: { title: "Introducing Claude Design", url: "https://www.anthropic.com/news/claude-design-anthropic-labs" }
  },
  {
    id: "code-design-sync-2026-06",
    category: "code",
    level: "advanced",
    date: "2026-06-17",
    isNew: true,
    title: "/design-sync 양방향 동기화 (2026년 6월 업데이트)",
    summary: "Claude Code 터미널에서 /design-sync를 실행해 디자인 시스템과 화면을 코드베이스로 가져오고, 반대로 코드로 만든 UI를 Claude Design 캔버스로 다시 보내 다듬습니다.",
    learn: [
      "Claude Code와 Claude Design 사이 양방향 동기화를 이해한다",
      "프로토타입과 구현 사이의 간극을 줄이는 워크플로를 익힌다"
    ],
    steps: [
      "Claude Code 터미널에서 /design-sync 를 실행한다.",
      "디자인 시스템과 선택한 화면을 코드베이스로 가져와 실제 컴포넌트로 빌드한다.",
      "Claude Code에서 만든 UI를 다시 Claude Design으로 푸시한다.",
      "캔버스에서 시각적으로 폴리시한 뒤 다시 코드로 가져온다."
    ],
    tips: [
      "환각 마크업이 아니라 프로젝트의 실제 컴포넌트로 빌드합니다.",
      "프로토타입 ↔ 구현을 오가는 왕복(round-trip)이 매끄러워집니다."
    ],
    practice: {
      goal: "프론트엔드 프로젝트에서 /design-sync로 디자인을 코드로 가져오고, 다시 캔버스로 보내는 왕복을 경험합니다.",
      mission: [
        "로컬 프론트엔드 프로젝트 폴더에서 Claude Code를 연다.",
        "터미널에 /design-sync 를 입력해 Claude Design의 디자인/화면을 가져온다.",
        "가져온 화면을 코드에서 조금 수정한다.",
        "수정한 UI를 다시 Claude Design 캔버스로 푸시해 시각적으로 폴리시한다."
      ],
      prompts: [
        "/design-sync",
        "방금 코드로 푸시한 화면을 캔버스에서 여백과 정렬 위주로 시각적으로 더 깔끔하게 다듬어줘."
      ]
    },
    source: { title: "양방향 /design-sync 설명", url: "https://pasqualepillitteri.it/en/news/5308/claude-code-claude-design-two-way-sync-design-sync" }
  },
  {
    id: "code-handoff",
    category: "code",
    level: "mid",
    date: "2026-04-17",
    isNew: false,
    title: "Claude Code로 핸드오프하기",
    summary: "디자인이 준비되면 Claude가 모든 것을 핸드오프 번들로 묶어줍니다. 한 줄의 지시로 Claude Code에 넘겨 구현을 시작할 수 있습니다.",
    learn: [
      "디자인 → 구현 핸드오프 번들의 개념을 안다",
      "디자인 의도를 코드 구현에 담아 전달하는 법을 익힌다"
    ],
    steps: [
      "디자인을 빌드 단계까지 완성한다.",
      "Claude가 디자인 전체를 핸드오프 번들로 패키징한다.",
      "단일 지시로 Claude Code에 번들을 전달한다.",
      "Claude Code가 처음부터가 아니라 디자인 기반으로 인터페이스를 구현한다."
    ],
    tips: [
      "핸드오프에 디자인 의도가 포함되어 프로토타입에서 프로덕션으로의 점프가 매끄러워집니다."
    ],
    practice: {
      goal: "완성한 디자인을 핸드오프 번들로 묶어 Claude Code로 실제 구현을 시작해 봅니다.",
      mission: [
        "Claude Design에서 간단한 화면(예: 로그인 폼)을 완성한다.",
        "핸드오프(번들로 내보내기) 기능으로 디자인을 패키징한다.",
        "Claude Code를 열고 아래 지시로 번들을 전달해 구현을 시작한다.",
        "생성된 코드가 디자인 의도(레이아웃·색·간격)와 맞는지 확인한다."
      ],
      prompts: [
        "이 디자인을 Claude Code로 핸드오프할 번들로 묶어줘.",
        "방금 받은 디자인 핸드오프 번들대로 로그인 화면을 React로 구현해줘. 디자인의 색·간격·레이아웃을 그대로 지켜줘."
      ]
    },
    source: { title: "Introducing Claude Design", url: "https://www.anthropic.com/news/claude-design-anthropic-labs" }
  },
  {
    id: "share-export",
    category: "share",
    level: "intro",
    date: "2026-06-17",
    isNew: false,
    title: "내보내기 & 공유: PDF·PPTX·Canva·외부 도구",
    summary: "조직 내부 URL로 공유하거나 폴더로 저장하고, PDF·PPTX·HTML로 내보냅니다. 6월 업데이트로 Adobe·Canva·Gamma·Lovable·Miro·Replit·Vercel·Wix 등으로 전송이 확대됐습니다.",
    learn: [
      "내보내기 형식과 외부 도구 연동 옵션을 안다",
      "조직 범위 공유와 협업 방식을 이해한다"
    ],
    steps: [
      "조직 내부 URL로 공유하거나 폴더로 저장한다.",
      "PDF, PPTX, 또는 독립 실행형 HTML로 내보낸다.",
      "Adobe·Canva·Gamma·Lovable·Miro·Replit·Vercel·Wix 등 외부 도구로 전송한다."
    ],
    tips: [
      "Canva로 보내면 즉시 편집 가능한 디자인으로 열립니다.",
      "공유 범위는 비공개 / 조직 내 보기 / 편집 권한으로 나뉩니다."
    ],
    practice: {
      goal: "하나의 디자인을 두 가지 이상 형식으로 내보내고 차이를 비교합니다.",
      mission: [
        "이전 실습에서 만든 덱이나 페이지를 하나 연다.",
        "내보내기 메뉴에서 PDF로 내보낸다.",
        "같은 디자인을 PPTX 또는 Canva로도 보낸다.",
        "각 형식에서 편집 가능 여부와 레이아웃 유지 정도를 비교한다."
      ],
      prompts: [
        "이 디자인을 발표용 PPTX로 내보낼 수 있게 슬라이드 형식으로 정리해줘.",
        "이 디자인을 PDF로 내보내기 좋게 페이지 나눔과 여백을 정리해줘."
      ]
    },
    source: { title: "Claude Design 6월 업데이트 (VentureBeat)", url: "https://venturebeat.com/technology/anthropic-ships-major-claude-design-overhaul-with-design-system-imports-code-round-trips-and-a-fix-for-its-token-burning-problem" }
  },
  {
    id: "share-collaborate",
    category: "share",
    level: "intro",
    date: "2026-04-17",
    isNew: false,
    title: "함께 작업하기: 조직 범위 공유와 그룹 대화",
    summary: "디자인을 비공개로 두거나, 링크로 조직 내 누구나 보게 하거나, 편집 권한을 부여해 동료가 함께 수정하고 Claude와 그룹 대화를 나눌 수 있습니다.",
    learn: [
      "세 가지 공유 권한 단계를 구분한다",
      "여러 명이 함께 Claude와 작업하는 협업 흐름을 안다"
    ],
    steps: [
      "기본은 비공개로 시작한다.",
      "링크 공유로 조직 내 누구나 볼 수 있게 한다.",
      "편집 권한을 부여하면 동료가 디자인을 수정할 수 있다.",
      "그룹 대화에서 함께 Claude에게 요청하며 작업한다."
    ],
    tips: [
      "공유는 조직 범위로 제한되어 외부 노출 걱정이 적습니다."
    ],
    practice: {
      goal: "디자인을 동료와 공유하고, 권한 단계(보기/편집)를 직접 바꿔 봅니다.",
      mission: [
        "디자인 하나를 열고 공유 메뉴를 연다.",
        "'조직 내 보기' 링크로 공유 범위를 바꾼다.",
        "동료 한 명에게 편집 권한을 부여한다.",
        "그룹 대화에서 동료와 함께 Claude에게 수정 요청을 보내 본다."
      ],
      prompts: [
        "이 디자인의 헤더 문구를 동료가 제안한 'A안/B안' 두 가지로 각각 보여줘서 비교하게 해줘."
      ]
    },
    source: { title: "Introducing Claude Design", url: "https://www.anthropic.com/news/claude-design-anthropic-labs" }
  },
  {
    id: "advanced-frontier",
    category: "advanced",
    level: "advanced",
    date: "2026-04-17",
    isNew: false,
    title: "프론티어 디자인: 음성·영상·셰이더·3D·내장 AI",
    summary: "코드로 구동되는 프로토타입을 만듭니다. 음성, 영상, 셰이더, 3D, 그리고 내장 AI까지 결합한 인터랙티브 경험을 디자인할 수 있습니다.",
    learn: [
      "코드 기반 인터랙티브 프로토타입의 가능성을 안다",
      "복잡한 인터랙션·애니메이션을 적은 프롬프트로 만드는 법을 이해한다"
    ],
    steps: [
      "음성·영상·셰이더·3D 등 만들고 싶은 인터랙티브 요소를 설명한다.",
      "Claude가 코드로 구동되는 프로토타입을 생성한다.",
      "내장 AI 기능을 결합해 동적인 동작을 더한다.",
      "정적 목업을 공유 가능한 인터랙티브 프로토타입으로 바꾼다."
    ],
    tips: [
      "사례: 다른 도구에서 20+ 프롬프트가 필요했던 복잡한 페이지를 Claude Design에서는 2개 프롬프트로 재현했습니다(Brilliant).",
      "코드 리뷰나 PR 없이 정적 목업을 인터랙티브 프로토타입으로 만들 수 있습니다."
    ],
    practice: {
      goal: "정적 화면을 넘어, 움직이거나 반응하는 인터랙티브 프로토타입을 직접 만들어 봅니다.",
      mission: [
        "아래 프롬프트로 3D 또는 애니메이션이 들어간 프로토타입을 요청한다.",
        "마우스 호버·클릭 같은 인터랙션을 추가해 달라고 한다.",
        "결과를 공유 링크로 만들어 실제로 움직이는지 확인한다."
      ],
      prompts: [
        "마우스를 따라 부드럽게 회전하는 3D 제품 쇼케이스 프로토타입을 만들어줘. 가운데에 도형 하나를 두고 배경은 은은한 그라데이션으로.",
        "이 화면에 카드들이 스크롤할 때 살짝 떠오르는 애니메이션과 호버 효과를 추가해줘."
      ]
    },
    source: { title: "Introducing Claude Design", url: "https://www.anthropic.com/news/claude-design-anthropic-labs" }
  },
  {
    id: "advanced-token-efficiency-2026-06",
    category: "advanced",
    level: "mid",
    date: "2026-06-17",
    isNew: true,
    title: "토큰 효율 개선과 통합 사용량 (2026년 6월 업데이트)",
    summary: "Claude Design이 채팅·Claude Code·Cowork와 사용량 한도를 공유하고, 평균 턴당 토큰 사용이 줄었으며 오류도 크게 감소했습니다.",
    learn: [
      "통합 사용량 한도가 무엇을 의미하는지 안다",
      "달라진 토큰 효율과 안정성을 이해한다"
    ],
    steps: [
      "Claude Design 사용량이 채팅·Code·Cowork와 같은 한도로 통합됨을 인지한다.",
      "한도를 넘기면 추가 사용(extra usage)을 켜서 계속 작업할 수 있다.",
      "이전보다 적은 토큰으로 같은 작업을 수행한다."
    ],
    tips: [
      "평균 턴당 토큰이 줄고 오류율이 크게 낮아졌습니다.",
      "토큰을 많이 쓰던 기존 문제가 개선되었습니다."
    ],
    practice: {
      goal: "내 사용량 한도가 어디서 공유되는지 확인하고, 토큰을 아끼는 프롬프트 습관을 연습합니다.",
      mission: [
        "Claude 설정에서 사용량(usage) 항목을 열어 채팅·Code·Cowork·Design이 한도를 공유하는지 확인한다.",
        "한 가지 디자인을 '한 번에 구체적으로' 요청하는 연습을 한다(아래 프롬프트).",
        "같은 결과를 여러 번 잘게 나눠 요청할 때와 토큰 소모를 비교해 본다."
      ],
      prompts: [
        "이벤트 안내 포스터를 만들어줘. 제목 '여름 북페어', 날짜 8/15-8/17, 장소 시민광장, 무료입장 문구, 따뜻한 색감, 세로 포스터 비율. 한 번에 완성도 높게 만들어줘."
      ]
    },
    source: { title: "Claude Design 6월 업데이트 (VentureBeat)", url: "https://venturebeat.com/technology/anthropic-ships-major-claude-design-overhaul-with-design-system-imports-code-round-trips-and-a-fix-for-its-token-burning-problem" }
  }
];

// 사이트(index.html)에서 읽어가는 전역 객체
window.CLAUDE_DESIGN_DATA = { COURSE_META, CATEGORIES, LEVELS, LESSONS };
