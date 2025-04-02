"use client";

import { Gamedata } from "@/type/datatype";

import styles from "@/styles/viewStyles/game.module.scss";
import cn from "classnames/bind";
import { useRouter } from "next/navigation";

const cx = cn.bind(styles);

export default function AnswerExBox(props: Gamedata) {
  const router = useRouter();
  const { answerEx, data, fetchData, setCorrectCount, correctCount } = props;

  const clickHandler = async (a: string) => {
    if (a !== data?.country_nm) {
      alert(`오답이에요.!! 정답은 ${data?.country_nm} 입니다.`);
      confirm("오답노트에 기록할까요?");
      setCorrectCount(0);
    } else {
      alert("정답!");

      setCorrectCount((prev: number) => prev + 1);
    }

    fetchData();
  };

  return (
    <div className={cx("answerExBox")}>
      <p>연속으로 맞추 갯수 : {correctCount}</p>
      <div className={cx("hint")}></div>

      <div className={cx("button-wrap")}>
        {answerEx?.map((list, index) => {
          return (
            <div className={"button-box"} key={index}>
              {list?.country_nm == undefined ? (
                <button>정답 : 대한민국</button>
              ) : (
                <button onClick={() => clickHandler(list?.country_nm)}>
                  {list.country_nm}
                </button>
              )}
            </div>
          );
        })}
      </div>
      <div className={cx("homeMenu-box")}>
        {" "}
        <button onClick={() => router.push("/")} className={cx("home")}>
          홈으로 돌아가기
        </button>
      </div>
    </div>
  );
}
