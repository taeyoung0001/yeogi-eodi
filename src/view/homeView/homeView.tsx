import Onboarding from "@/components/onboarding/onboarding";
import styles from "@/styles/viewStyles/homeView.module.scss";
import cn from "classnames/bind";
const cx = cn.bind(styles);
export default function HomeView() {
  return (
    <div className={cx("homeview")}>
      <Onboarding />
    </div>
  );
}
