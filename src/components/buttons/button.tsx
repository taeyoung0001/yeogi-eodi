"use client";

import styles from "@/styles/components/buttons/buttons.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);

type ButtonProps = {
  title: string;
  onClick?: () => void;
  className: "normal" | "large";
};

export default function Button(props: ButtonProps) {
  const { title, onClick, className } = props;
  return (
    <div className={cx("button-wrap")}>
      <button className={cx("button", className)} onClick={onClick}>
        {title}
      </button>
    </div>
  );
}
