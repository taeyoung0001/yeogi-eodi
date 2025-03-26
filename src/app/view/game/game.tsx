export default async function GamePage() {
  const res = await fetch(
    "https://apis.data.go.kr/1262000/CountryFlagService2/getCountryFlagList2?serviceKey=n6K4o67H33VxfemdS5Qir84LHNJkkCEkJc7c%2Bxm%2Fa9Z8%2B9XjbY0FmNPXOe8o0vspvG1YJxoVh%2BQZfnVapXfX%2Fw%3D%3D&returnType=JSON&numOfRows=1&cond[country_nm::EQ]=프랑스&pageNo=1"
  );
  const data = await res.json();
  const item = data.response.body.items.item;
  console.log(item);

  return <div> {item[0].country_nm}</div>;
}
