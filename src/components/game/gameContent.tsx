"use client";

import { Gamedata } from "@/type/datatype";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function GameContent(props: Gamedata) {
  const { answerEx, data } = props;

  //클라
  const router = useRouter();
  const clickHandler = (a: string) => {
    console.log("답", a);
    console.log(data?.country_nm);
    if (a !== data?.country_nm) {
      alert("오답이에요. 다시 도전하세요.");
      router.refresh();
    } else {
      alert("정답!");
    }
  };

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
    // <div>

    //   <div>
    //     {answerEx.map((list, index) => {
    //       return (
    //         <div key={index}>
    //           {list?.country_nm == undefined ? (
    //             <p>정답 : 대한민국</p>
    //           ) : (
    //             <p>정답 : {list.country_nm}</p>
    //           )}
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
  //리스트에 정답 넣고 안에서 돌리기기
}
