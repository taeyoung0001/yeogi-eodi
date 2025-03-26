import Onboarding from "@/app/components/onboarding/onboarding";
import styles from "@/app/styles/view/homeView.module.scss";
import cn from "classnames/bind";
const cx = cn.bind(styles);
export default function HomeView() {
  return (
    <div className={cx("homeview")}>
      <Onboarding />
    </div>
  );
}
