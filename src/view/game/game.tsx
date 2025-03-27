import GameContent from "@/components/game/gameContent";
import { getGameCountryData } from "@/lib/gameApi";

export default async function GamePage() {
  const res = await getGameCountryData();
  const randomCount = Math.floor(Math.random() * 10);

  console.log("랜덤카운트", randomCount);
  const data = res[randomCount];

  return (
    <div>
      <GameContent data={data} />
    </div>
  );
}
