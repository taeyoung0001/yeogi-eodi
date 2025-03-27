//searchPage에 사용될 api

export async function getGameCountryData() {
  const API_URL = `https://apis.data.go.kr/1262000/CountryFlagService2/getCountryFlagList2?serviceKey=${process.env.NEXT_PUBLIC_API_KEY}&returnType=JSON&numOfRows=10&pageNo=1`;

  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch country data");

  const data = await res.json();
  return data.response.body.items.item;
}
