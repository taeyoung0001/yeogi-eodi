//searchPage에 사용될 api

export async function getCountryData(country: string) {
  const API_URL = `https://apis.data.go.kr/1262000/CountryFlagService2/getCountryFlagList2?serviceKey=n6K4o67H33VxfemdS5Qir84LHNJkkCEkJc7c%2Bxm%2Fa9Z8%2B9XjbY0FmNPXOe8o0vspvG1YJxoVh%2BQZfnVapXfX%2Fw%3D%3D&returnType=JSON&numOfRows=1&cond[country_nm::EQ]=${country}&pageNo=1`;

  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch country data");

  const data = await res.json();
  return data.response.body.items.item;
}
