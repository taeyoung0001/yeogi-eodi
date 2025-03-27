import Image from "next/image";
import styles from "@/styles/components/imgBox.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);
type ImgBoxProps = {
  imgArray: string[];
};
export default function ImgBox(props: ImgBoxProps) {
  const { imgArray } = props;

  return (
    <div className={cx("imgBox-wrap")}>
      {imgArray.map((list, i) => {
        return <Image key={i} src={list} alt={""} width={50} height={50} />;
      })}
    </div>
  );
}
