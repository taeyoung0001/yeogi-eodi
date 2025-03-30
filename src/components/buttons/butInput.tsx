/* eslint-disable @next/next/no-img-element */
//프로젝트 규모 가 작아서 별도로 크게 분리하지 않았음
"use client";

import { resultDateType } from "@/type/datatype";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

import styles from "@/styles/components/buttons/butInput.module.scss";
import cn from "classnames/bind";
const cx = cn.bind(styles);

export default function ButInput() {
  const [inputValue, setInputValue] = useState<string>("");
  const [resultDate, setResultData] = useState<resultDateType>();

  const URL = `https://apis.data.go.kr/1262000/CountryFlagService2/getCountryFlagList2?serviceKey=${process.env.NEXT_PUBLIC_API_KEY}&returnType=JSON&numOfRows=1&cond[country_nm::EQ]=${inputValue}&pageNo=1`;

  const inputData = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const submitHandler = () => {
    const searchData = async () => {
      try {
        if (inputValue == "미국") {
          setInputValue("미합중국으로 검색해보세요!");
        }

        const response = await fetch(URL);
        const data = await response.json();
        const item = data.response.body.items.item[0];
        console.log(item);
        setResultData(item);
      } catch (error) {
        console.log(error);
      }
    };
    searchData();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      submitHandler();
    }
  };

  return (
    <div className={cx("butInput-wrap")}>
      <div className={cx("header")}>
        <input
          className={cx("input")}
          onKeyDown={handleKeyDown}
          type="text"
          onChange={inputData}
          value={inputValue}
        />
        <button className={cx("btn")} onClick={submitHandler} type="button">
          검색하기
        </button>
      </div>

      {resultDate ? (
        <div className={cx("content-wrap")}>
          <p>검색한 국가 : {resultDate.country_nm} </p>
          <p>영어 이름 : {resultDate.country_eng_nm} </p>
          <div className={cx("flag")}>
            <Image
              style={{ borderRadius: "40px" }}
              src={resultDate.download_url}
              alt="국기"
              width={220}
              height={180}
            />
          </div>
        </div>
      ) : (
        <p className={cx("none-data")}>국가를 검색해 주세요</p>
      )}
    </div>
  );
}
