/* eslint-disable @next/next/no-img-element */
"use client";

import { getGameCountryData } from "@/lib/gameApi";
import { resultDateType } from "@/type/datatype";
import AnswerExBox from "./answerExBox";
import { useEffect, useState } from "react";

import styles from "@/styles/viewStyles/game.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);

export default function GameContent() {
  const [isdata, setIsData] = useState<resultDateType[]>([]);
  const [answer, setAnswer] = useState<resultDateType>();
  const [loading, setLoading] = useState(true);
  const [correctCount, setCorrectCount] = useState(0);

  // ✅ fetchData 함수 생성
  const fetchData = async () => {
    setLoading(true);
    const res = await getGameCountryData();
    let randomCount = Math.floor(Math.random() * 220);

    // 범위 초과 방지
    if (randomCount >= 190) {
      randomCount = randomCount - 30;
    }
    const data = res[randomCount];

    const answerEx: resultDateType[] = [
      data,
      res[randomCount + 3],
      res[randomCount - 5],
      res[randomCount + 20],
    ];

    setAnswer(data);

    // 배열 셔플
    function shuffle(array: resultDateType[]) {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    }

    setIsData(shuffle(answerEx));
    setLoading(false);
  };

  useEffect(() => {
    fetchData(); // 초기 호출
  }, []);

  if (loading) {
    return <p className={cx("loadingText")}> 문제 만드는 중</p>;
  }

  return (
    <div className={cx("answer-container")}>
      <h2>이 국기는 어디 나라 국기일까요?</h2>

      <img src={answer?.download_url} alt="나라국기" />

      <div>
        <AnswerExBox
          answerEx={isdata}
          data={answer}
          fetchData={fetchData}
          setCorrectCount={setCorrectCount}
          correctCount={correctCount}
        />
      </div>
    </div>
  );
}
