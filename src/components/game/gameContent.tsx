import { Gamedata } from "@/type/datatype";

export default function GameContent(props: Gamedata) {
  const { data } = props;
  console.log(data);

  return <div>{data.country_nm}</div>;
  //리스트에 정답 넣고 안에서 돌리기기
}
