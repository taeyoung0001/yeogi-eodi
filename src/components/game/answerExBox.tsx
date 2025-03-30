"use client";

import { Gamedata } from "@/type/datatype";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AnswerExBox(props: Gamedata) {
  const { answerEx, data } = props;

  console.log(answerEx);
  const [correctCount, setCorrectCount] = useState(0);

  const router = useRouter();
  const clickHandler = (a: string) => {
    console.log("답", a);
    console.log(data?.country_nm);
    if (a !== data?.country_nm) {
      alert("오답이에요. 다시 도전하세요.");
      router.refresh();
      setCorrectCount(0);
    } else {
      alert("정답!");
      setCorrectCount((prev) => prev + 1);
      router.refresh();
    }
  };

  return (
    <div>
      <p>{correctCount}</p>
      <div>
        {answerEx.map((list, index) => {
          return (
            <div key={index}>
              {list?.country_nm == undefined ? (
                <button>정답 : 대한민국</button>
              ) : (
                <button onClick={() => clickHandler(list?.country_nm)}>
                  정답 : {list.country_nm}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
