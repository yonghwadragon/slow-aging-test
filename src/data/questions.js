// src/data/questions.js

export const questions = [
  {
    id: 1,
    text: "요즘 밥 잘 챙겨 먹고 있어?",
    options: [
      { id: "no", text: "아니, 자주 거르거나 대충 먹어", direction: "left" },
      { id: "yes", text: "응, 잘 챙겨 먹고 있어!", direction: "right" }
    ],
    voiceText: "요즘 밥 잘 챙겨 먹고 있어? 오른쪽은 응, 왼쪽은 아니야를 눌러줘."
  },
  {
    id: 2,
    text: "요즘 관절이나 뼈에 관심 있어?",
    options: [
      { id: "yes", text: "응! 건강 챙기고 싶어", direction: "left" },
      { id: "no", text: "아니, 아직은 괜찮은 것 같아", direction: "right" }
    ],
    voiceText: "요즘 관절이나 뼈에 관심 있어? 왼쪽은 응, 오른쪽은 아니야를 눌러줘."
  },
  {
    id: 3,
    text: "너 혹시... 아이 입맛이야?",
    options: [
      { id: "yes", text: "ㅋㅋ 맞아! 편식 좀 해", direction: "left" },
      { id: "no", text: "아냐~ 아무거나 잘 먹어", direction: "right" }
    ],
    voiceText: "너 혹시… 아이 입맛이야? 왼쪽은 맞아, 오른쪽은 아니야를 눌러줘."
  },
  {
    id: 4,
    text: "기력 떨어진 거 같지 않아?",
    options: [
      { id: "yes", text: "맞아, 요즘 좀 힘들어", direction: "left" },
      { id: "no", text: "아니, 나름 괜찮아!", direction: "right" }
    ],
    voiceText: "기력 떨어진 거 같지 않아? 왼쪽은 맞아, 오른쪽은 아니야를 눌러줘."
  },
  {
    id: 5,
    text: "혹시 요즘 다이어트 중이야?",
    options: [
      { id: "yes", text: "응! 식단도 조절하고 있어", direction: "left" },
      { id: "no", text: "아니~ 지금은 아냐!", direction: "right" }
    ],
    voiceText: "혹시 요즘 다이어트 중이야? 왼쪽은 응, 오른쪽은 아니야를 눌러줘."
  }
];

export const results = {
  energy: {
    title: "기력 회복형",
    description: "요즘 체력 떨어지고 피곤한 날이 많지? 활력을 채워줄 제품이 필요해!",
    recommendedProduct: {
      name: "한동녹용연구소 녹용 진액 엑기스",
      description: "녹용과 홍삼, 대추 등이 들어간 진한 농축 엑기스로 기력 회복에 딱이야.",
      ingredients: ["녹용 추출액", "홍삼", "대추", "복분자"],
      benefits: ["기력 회복", "피로 개선", "신체 활력 증진"]
    },
    voiceText: "기력 회복형이야! 요즘 피곤할 땐 이 제품이 딱이야."
  },
  kids: {
    title: "성장 아이 입맛 타입",
    description: "입맛이 아이처럼 귀엽네! 그래서 더 맛있는 건강식이 필요해~",
    recommendedProduct: {
      name: "한동 키즈튼튼 녹용 칼슘스틱",
      description: "이거 이름은 키즈지만 어른도 좋아해! 달달한 젤리라서 거부감 없이 먹을 수 있고 아이 성장 발달에 좋아!",
      ingredients: ["녹용", "칼슘", "비타민D", "홍삼"],
      benefits: ["성장 발달 지원", "면역력 강화", "맛있는 섭취"]
    },
    voiceText: "아이 입맛이구나~ 건강식도 맛있게 챙겨 먹자! 이거 진짜 맛있어."
  },
  joint: {
    title: "관절 뼈 건강형",
    description: "뼈 건강에 관심 있는 당신, 구미 젤리로 간편하게 챙겨봐!",
    recommendedProduct: {
      name: "신수지 관절 칼슘 구미",
      description: "맛있게 먹는 뼈 건강 젤리! 칼슘과 비타민이 풍부해.",
      ingredients: ["칼슘", "비타민D", "콜라겐", "MSM"],
      benefits: ["관절/뼈 건강", "칼슘 흡수 도움", "간편한 섭취"]
    },
    voiceText: "관절 뼈 건강형이야! 구미로 챙기는 건강, 어때?"
  },
  slim: {
    title: "다이어트 관리형",
    description: "요즘 식단 조절 중이지? 맛있고 든든한 대체 식사가 필요해!",
    recommendedProduct: {
      name: "디어V슬림 다이어트 쉐이크",
      description: "한 끼 대용으로 좋은 단백질 쉐이크야. 포만감도 굿!",
      ingredients: ["단백질", "귀리", "비타민 미네랄"],
      benefits: ["포만감 제공", "식사 대체", "다이어트 보조"]
    },
    voiceText: "다이어트 관리형이야! 든든하고 건강한 쉐이크 추천해."
  },
  senior: {
    title: "기력·수면 보강형",
    description: "수면이나 어르신 기력 걱정된다면 이게 좋아!",
    recommendedProduct: {
      name: "침향 효력환",
      description: "녹용과 침향이 들어간 전통 환제로 기력과 숙면에 도움 줘!",
      ingredients: ["침향", "녹용", "산수유", "작약"],
      benefits: ["숙면 유도", "기력 보충", "어르신 건강 지원"]
    },
    voiceText: "기력·수면 보강형이야! 어르신 건강도 중요하지~"
  }
};

export const calculateResult = (answers) => {
  let score = {
    energy: 0,
    kids: 0,
    joint: 0,
    slim: 0,
    senior: 0
  };

  if (answers[1] === "no") score.energy++;
  if (answers[2] === "yes") score.joint++;
  if (answers[3] === "yes") score.kids++;
  if (answers[4] === "yes") score.senior++;
  if (answers[5] === "yes") score.slim++;

  return Object.entries(score).sort((a, b) => b[1] - a[1])[0][0];
};