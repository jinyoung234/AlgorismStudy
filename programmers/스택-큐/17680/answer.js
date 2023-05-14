/**
 * 캐시
 * (https://www.notion.so/45b958f46581462fb67635c0af6adaa7)
 */
function solution(cacheSize, cities) {
  let answer = 0;
  const cache = [];
  if (cacheSize === 0) return cities.length * 5;
  cities.forEach((city) => {
    const _city = city.toLowerCase();
    if (cache.includes(_city)) {
      answer += 1;
      cache.splice(cache.indexOf(_city), 1);
      cache.push(_city);
    }
    if (!cache.includes(_city)) {
      if (cache.length === cacheSize) cache.shift();
      answer += 5;
      cache.push(_city);
    }
  });
  return answer;
}
