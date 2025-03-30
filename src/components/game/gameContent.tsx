import { Gamedata } from "@/type/datatype";
import Image from "next/image";

import AnswerExBox from "./answerExBox";

export default function GameContent(props: Gamedata) {
  const { answerEx, data } = props;

  return (
    <div>
      <h2>이 국기는 어디 나라 국기 일까요?</h2>
      <p>진짜 정답 : {data?.country_nm}</p>
      <Image
        src={data?.download_url}
        alt={"나라국기"}
        width={300}
        height={200}
      />
      <div>
        <AnswerExBox answerEx={answerEx} data={data} />
      </div>
    </div>
  );
}
