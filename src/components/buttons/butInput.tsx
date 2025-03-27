/* eslint-disable @next/next/no-img-element */
//프로젝트 규모 가 작아서 별도로 크게 분리하지 않았음
"use client";

import Image from "next/image";
import { ChangeEvent, useState } from "react";

type resultDateType = {
  content_ty: null | string;
  country_eng_nm: string;
  country_iso_alp2: string;
  country_nm: string;
  download_url: string;
  origin_file_nm: string;
};

export default function ButInput() {
  const [inputValue, setInputValue] = useState<string>("");
  const [resultDate, setResultData] = useState<resultDateType>();
  const URL = `https://apis.data.go.kr/1262000/CountryFlagService2/getCountryFlagList2?serviceKey=n6K4o67H33VxfemdS5Qir84LHNJkkCEkJc7c%2Bxm%2Fa9Z8%2B9XjbY0FmNPXOe8o0vspvG1YJxoVh%2BQZfnVapXfX%2Fw%3D%3D&returnType=JSON&numOfRows=1&cond[country_nm::EQ]=${inputValue}&pageNo=1`;

  const inputData = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const submitHandler = () => {
    const searchData = async () => {
      try {
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
    <div>
      <input
        onKeyDown={handleKeyDown}
        type="text"
        onChange={inputData}
        value={inputValue}
      />
      <button onClick={submitHandler} type="button">
        검색하기
      </button>
      {resultDate ? (
        <div>
          {" "}
          {resultDate.country_nm}
          {resultDate.country_eng_nm}
          <Image
            src={resultDate.download_url}
            alt="국기"
            width={200} // 이미지 크기 설정
            height={120} // 이미지 크기 설정
          />
        </div>
      ) : (
        <p>하이</p>
      )}
    </div>
  );
}
