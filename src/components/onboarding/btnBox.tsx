"use client";

import styles from "@/styles/components/onboarding/onboarding.module.scss";
import cn from "classnames/bind";
import { useRouter } from "next/navigation";
import Button from "../buttons/button";

const cx = cn.bind(styles);
export default function BtnBox() {
  const movePage = (link: string): void => {
    console.log(link, "클릭됨");
    router.push(link);
  };

  const router = useRouter();
  return (
    <div className={cx("btnBox-wrap")}>
      <div className={cx("btn")}>
        <Button
          onClick={() => movePage("/search")}
          title={"지도 검색 하기"}
          className={"normal"}
        />
      </div>
      <div className={cx("btn")}>
        <Button
          onClick={() => movePage("/game")}
          title={"게임하러 가기"}
          className={"normal"}
        />
      </div>
    </div>
  );
}
