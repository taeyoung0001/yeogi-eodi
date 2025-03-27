import BtnBox from "@/components/btnBox";
import styles from "@/styles/viewStyles/homeView.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);
export default function HomeView() {
  return (
    <div className={cx("homeview")}>
      <div className={cx("onboard-wrap")}>
        <h2>여기 어디</h2>
        <BtnBox />
      </div>
    </div>
  );
}
