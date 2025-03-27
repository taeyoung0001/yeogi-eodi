import styles from "@/app/styles/components/navBar/navBar.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);

export default function NavBar() {
  return (
    <div className={cx("nav-wrap")}>
      <div className={cx("logo")}></div>
    </div>
  );
}
