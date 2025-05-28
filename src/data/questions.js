// src/data/questions.js

export const questions = [
  {
    id: "1",
    text: "아침에 눈을 떴을 때 내 모습은? 🌞",
    options: [
      { id: "a", text: "쌩쌩해! 오늘도 에너지 가득!", point: 5 },
      { id: "b", text: "조금만 더... 알람이 미워 🥱", point: 3 },
      { id: "c", text: "오늘 하루 벌써부터 걱정이야 😵‍💫", point: 1 }
    ]
  },
  {
    id: "2",
    text: "운동은 얼마나 자주 하는 편이야? 🏃‍♂️",
    options: [
      { id: "a", text: "꾸준히 하고 있어! (일주일에 3번 이상 💪)", point: 5 },
      { id: "b", text: "가끔? 마음 내키면 하는 정도 🤔", point: 3 },
      { id: "c", text: "운동은 나랑 안 친해 😅", point: 1 }
    ]
  },
  {
    id: "3",
    text: "최근 한 달 동안 아팠던 적 있어? 🤒",
    options: [
      { id: "a", text: "전혀 없어! 난 튼튼한 편이야 💖", point: 5 },
      { id: "b", text: "가벼운 감기 정도는 한 번? 🤧", point: 3 },
      { id: "c", text: "잔병치레가 많아서 힘들어 😢", point: 1 }
    ]
  },
  {
    id: "4",
    text: "스트레스는 어떻게 풀고 있어? 🍃",
    options: [
      { id: "a", text: "명상이나 산책으로 힐링 🧘", point: 5 },
      { id: "b", text: "넷플릭스나 맛있는 걸로 풀기 🍕📺", point: 3 },
      { id: "c", text: "그냥 참고 견디거나 침대와 한 몸 되기 🛌", point: 1 }
    ]
  },
  {
    id: "5",
    text: "하루에 잠은 얼마나 자는 편이야? 😴",
    options: [
      { id: "a", text: "푹 자는 편 (7시간 이상!) 🌙", point: 5 },
      { id: "b", text: "약간 부족한 편? (5~6시간 정도) 💤", point: 3 },
      { id: "c", text: "늘 피곤해... (5시간 이하) 😫", point: 1 }
    ]
  },
  {
    id: "6",
    text: "요즘 체력이 예전 같지 않다고 느껴? 🥺",
    options: [
      { id: "a", text: "오히려 더 좋아진 느낌! 🤗", point: 5 },
      { id: "b", text: "살짝 떨어진 것 같긴 해 😅", point: 3 },
      { id: "c", text: "자꾸만 지쳐... 기운이 없네 😵", point: 1 }
    ]
  },
  {
    id: "7",
    text: "건강을 위해 영양제 같은 거 챙겨 먹고 있어? 💊",
    options: [
      { id: "a", text: "매일 꼬박꼬박 챙겨 먹지! 😊", point: 5 },
      { id: "b", text: "생각날 때 가끔씩? 😌", point: 3 },
      { id: "c", text: "잘 안 먹어, 필요성도 못 느끼고 있어 🤷‍♀️", point: 1 }
    ]
  }
];

export const getScoreGrade = (score) => {
  const scaled = Math.round((score / 35) * 100);
  if (scaled >= 85) {
    return {
      type: "🦌 슬로우에이징 만렙형",
      score: scaled,
      message: "당신의 루틴은 슬로우에이징의 모범 답안입니다. 유지하는 것이 핵심! 녹용은 지금의 체력을 오래 지키는 데 도움이 됩니다."
    };
  } else if (scaled >= 70) {
    return {
      type: "🐯 근육중심형",
      score: scaled,
      message: "활동성은 훌륭하지만 식단·수면의 밸런스를 조금 더 챙겨야 해요. 녹용은 근육 회복에 도움을 줘요!"
    };
  } else if (scaled >= 55) {
    return {
      type: "🐻 회복 주의형",
      score: scaled,
      message: "슬로우에이징의 적신호! 지금부터라도 회복 습관을 만들어야 할 때입니다. 피로회복엔 녹용 젤리 한 포 어때요?"
    };
  } else if (scaled >= 40) {
    return {
      type: "🐿️ 루틴 시도형",
      score: scaled,
      message: "마음은 있는데 루틴이 이어지지 않죠? 일상 속 소소한 보조 루틴(예: 아침 녹용 쉐이크)으로 시작해보세요."
    };
  } else {
    return {
      type: "🐣 입문자형",
      score: scaled,
      message: "지금부터 시작하면 늦지 않았어요! 가장 쉬운 루틴부터 차근차근 – 녹용으로 첫걸음, 함께 해볼까요?"
    };
  }
};