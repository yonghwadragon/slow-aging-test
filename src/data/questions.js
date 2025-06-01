// src/data/questions.js

export const questions = [
  {
    id: "1",
    text: "아침에 눈을 떴을 때 내 모습은? 🌞",
    options: [
      { id: "a", text: "쌩쌩해! 오늘도 에너지 가득! 🌞", point: 5, styleType: "positive" },
      { id: "c", text: "오늘 하루 벌써부터 걱정이야 😵‍💫", point: 1, styleType: "negative" },
      { id: "b", text: "조금만 더... 알람이 미워 🥱", point: 3, styleType: "neutral" }
    ]
  },
  {
    id: "2",
    text: "운동은 얼마나 자주 하는 편이야? 🏃‍♂️",
    options: [
      { id: "a", text: "꾸준히 하고 있어! 💪", point: 5, styleType: "positive" },
      { id: "c", text: "운동은 나랑 안 친해 😅", point: 1, styleType: "negative" },
      { id: "b", text: "가끔? 마음 내키면 하는 정도 🤔", point: 3, styleType: "neutral" }
    ]
  },
  {
    id: "3",
    text: "최근 한 달 동안 아팠던 적 있어? 🤒",
    options: [
      { id: "a", text: "전혀 없어! 난 튼튼한 편이야 💖", point: 5, styleType: "positive" },
      { id: "c", text: "잔병치레가 많아서 힘들어 😢", point: 1, styleType: "negative" },
      { id: "b", text: "가벼운 감기 정도는 한 번? 🤧", point: 3, styleType: "neutral" }
    ]
  },
  {
    id: "4",
    text: "스트레스는 어떻게 풀고 있어? 🍃",
    options: [
      { id: "a", text: "명상이나 산책으로 힐링 🧘", point: 5, styleType: "positive" },
      { id: "c", text: "그냥 참고 견디거나 침대와 한 몸 되기 🛌", point: 1, styleType: "negative" },
      { id: "b", text: "넷플릭스나 맛있는 걸로 풀기 🍕📺", point: 3, styleType: "neutral" }
    ]
  },
  {
    id: "5",
    text: "하루에 잠은 얼마나 자는 편이야? 😴",
    options: [
      { id: "a", text: "푹 자는 편 (7시간 이상!) 🌙", point: 5, styleType: "positive" },
      { id: "c", text: "늘 피곤해... (5시간 이하) 😫", point: 1, styleType: "negative" },
      { id: "b", text: "약간 부족한 편? (5~6시간 정도) 💤", point: 3, styleType: "neutral" }
    ]
  },
  {
    id: "6",
    text: "요즘 체력이 예전 같지 않다고 느껴? 🥺",
    options: [
      { id: "a", text: "오히려 더 좋아진 느낌! 🤗", point: 5, styleType: "positive" },
      { id: "c", text: "자꾸만 지쳐... 기운이 없네 😵", point: 1, styleType: "negative" },
      { id: "b", text: "살짝 떨어진 것 같긴 해 😅", point: 3, styleType: "neutral" }
    ]
  },
  {
    id: "7",
    text: "건강을 위해서 영양제 같은 거 챙겨 먹고 있어? 💊",
    options: [
      { id: "a", text: "매일 꼬박꼬박 챙겨 먹지! 😊", point: 5, styleType: "positive" },
      { id: "c", text: "잘 안 먹어, 필요성도 못 느끼고 있어 🤷‍♀️", point: 1, styleType: "negative" },
      { id: "b", text: "생각날 때 가끔씩? 😌", point: 3, styleType: "neutral" }
    ]
  }
];

export const getScoreGrade = (score) => {
  const scaled = Math.round((score / 35) * 100);

  if (scaled >= 85) {
    return {
      type: "🦌 꽃사슴형",
      imageFileName: "flowerdeer.png",
      score: scaled,
      message: `균형 잡힌 일상으로 완벽한 건강 루틴을 유지 중이에요! 
지금의 습관을 계속 지켜나가는 것이 가장 중요해요.`,
      goodPoints: [
        "✅ 식사·수면·운동의 완벽한 균형",
        "✅ 규칙적인 생활 습관"
      ],
      improvePoints: [
        "✨ 현재 상태를 꾸준히 유지하기"
      ],
      recommendedFoods: [
        { name: "아보카도 🥑", reason: "건강한 지방과 비타민 공급" },
        { name: "블루베리 🔵", reason: "항산화 작용, 피로 회복" },
        { name: "아몬드 🥜", reason: "기억력 향상, 활력 유지" }
      ],
      supplementaryNote: "녹용은 지금의 건강 루틴을 오래 유지하는 데 도움을 주는 부드러운 보조제가 될 수 있어요."
    };
  } else if (scaled >= 70) {
    return {
      type: "🐯 호랑이형",
      imageFileName: "tiger.png",
      score: scaled,
      message: `운동을 잘 챙기는 당신, 근육 관리엔 최고예요! 다만 수면과 식사 규칙성도 놓치지 말아야 합니다.`,
      goodPoints: [
        "✅ 운동 및 신체 활동 우수",
        "✅ 근육 관리 탁월"
      ],
      improvePoints: [
        "✨ 규칙적인 수면 시간 확보하기",
        "✨ 균형 잡힌 식단 유지하기"
      ],
      recommendedFoods: [
        { name: "연어 🍣", reason: "오메가-3, 근육 회복 촉진" },
        { name: "바나나 🍌", reason: "수면의 질 향상, 근육 피로 감소" },
        { name: "고구마 🍠", reason: "에너지 공급, 식이섬유 풍부" }
      ],
      supplementaryNote: "녹용은 운동 후 지친 몸의 빠른 회복을 도와주는 보조제로 가볍게 활용 가능합니다."
    };
  } else if (scaled >= 55) {
    return {
      type: "🐻 곰돌이형",
      imageFileName: "bear.png",
      score: scaled,
      message: `요즘 피로가 쌓여있어 휴식과 회복에 조금 더 신경 쓸 때입니다. 수면과 스트레스 관리가 중요해요.`,
      goodPoints: [
        "✅ 활동적이고 노력하는 자세"
      ],
      improvePoints: [
        "✨ 충분한 수면 시간 확보하기",
        "✨ 스트레스 해소를 위한 습관 만들기"
      ],
      recommendedFoods: [
        { name: "상추 🥬", reason: "숙면 유도, 긴장 완화" },
        { name: "캐모마일 차 🍵", reason: "스트레스 감소, 안정 효과" },
        { name: "우유 🥛", reason: "수면 촉진, 심리적 안정" }
      ],
      supplementaryNote: "녹용은 지친 몸과 마음의 빠른 회복을 위한 보조적인 선택이 될 수 있어요."
    };
  } else if (scaled >= 40) {
    return {
      type: "🐿️ 다람쥐형",
      imageFileName: "squirrel.png",
      score: scaled,
      message: `건강을 위해 노력하고 있지만 아직 습관이 자리 잡지 않았어요. 작은 루틴부터 천천히 시작해보세요.`,
      goodPoints: [
        "✅ 건강에 대한 관심과 의지"
      ],
      improvePoints: [
        "✨ 규칙적인 생활습관 형성하기",
        "✨ 쉬운 건강 루틴부터 시작하기"
      ],
      recommendedFoods: [
        { name: "토마토 🍅", reason: "항산화 효과, 피로 해소" },
        { name: "달걀 🍳", reason: "단백질 공급, 신체 활력" },
        { name: "요거트 🥛", reason: "장 건강, 면역력 강화" }
      ],
      supplementaryNote: "녹용은 쉽게 지칠 수 있는 초반 루틴의 정착에 도움을 줄 수 있는 부드러운 선택입니다."
    };
  } else {
    return {
      type: "🐣 병아리형",
      imageFileName: "chick.png",
      score: scaled,
      message: `건강 습관이 아직 익숙하지 않다면 부담 없는 작은 실천부터 시작해봐요. 가벼운 시도가 중요해요.`,
      goodPoints: [
        "✅ 건강을 챙기려는 마음"
      ],
      improvePoints: [
        "✨ 간단한 습관부터 매일 반복하기",
        "✨ 실천 가능한 작은 목표 설정하기"
      ],
      recommendedFoods: [
        { name: "귤 🍊", reason: "비타민C 공급, 면역력 강화" },
        { name: "삶은 고구마 🍠", reason: "에너지 공급, 소화 촉진" },
        { name: "오트밀 🥣", reason: "간편 식사, 포만감 유지" }
      ],
      supplementaryNote: "녹용은 건강 습관을 처음 시작하는 단계에서 작은 응원이 될 수 있어요."
    };
  }
};