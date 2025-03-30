import GameContent from "@/components/game/gameContent";
import { getGameCountryData } from "@/lib/gameApi";
import { resultDateType } from "@/type/datatype";

//Fisher-Yates 알고리즘을 사용
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]; // 원본 배열 복사
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap
  }
  return newArray;
}

export default async function GamePage() {
  const res = await getGameCountryData();
  let randomCount = Math.floor(Math.random() * 220);
  if (randomCount == 220) {
    randomCount = randomCount - 30;
  }
  const data = res[randomCount];
  const answerEx: resultDateType[] = [
    data,
    res[randomCount + 3],
    res[randomCount - 5],
    res[randomCount + 20],
  ];

  // console.log("----answerEx----", answerEx);
  const shuffle = shuffleArray(answerEx);

  return (
    <div>
      <GameContent answerEx={shuffle} data={data} />
    </div>
  );
}
