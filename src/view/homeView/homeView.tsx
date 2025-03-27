import BtnBox from "@/components/btnBox";
import ImgBox from "@/components/imgBox";
import { urlList } from "@/lib/urlList";

import styles from "@/styles/viewStyles/homeView.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);
export default function HomeView() {
  return (
    <div className={cx("homeview")}>
      <div className={cx("onboard-wrap")}>
        <div className={cx("img-up")}>
          <ImgBox imgArray={urlList} />
        </div>

        <h2 className={cx("title")}>여기 어디</h2>
        <BtnBox />
        <div className={cx("img-down")}>
          <ImgBox imgArray={urlList.slice().reverse()} />
        </div>
      </div>
    </div>
  );
}
