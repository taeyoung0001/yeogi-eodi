import styles from "@/styles/components/onboarding/onboarding.module.scss";
import cn from "classnames/bind";
import BtnBox from "./btnBox";

const cx = cn.bind(styles);
export default function Onboarding() {
  return (
    <div className={cx("onboard-wrap")}>
      <h2>여기 어디</h2>
      <BtnBox />
    </div>
  );
}
