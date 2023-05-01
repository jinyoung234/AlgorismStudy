/**
 * 뉴스 클러스터링
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=3c444944d5f24a99869b6b7a1fa6d963&pm=s)
 */
function solution(str1, str2) {
  function clustering(str, arr) {
    for (let i = 0; i < str.length - 1; i++) {
      const partial = str.slice(i, i + 2).toLowerCase();
      if (!/[^a-z]/g.test(partial) && partial !== "") arr.push(partial);
    }
  }
  const a = [];
  const b = [];
  clustering(str1, a);
  clustering(str2, b);
  let union = 0;
  let intersection = 0;
  for (let i = 0; i < a.length; i++) {
    if (b.includes(a[i])) {
      union++;
      b.splice(b.indexOf(a[i]), 1);
    }
  }
  intersection = a.length + b.length;
  if (intersection === 0 && union === 0) {
    intersection = 1;
    union = 1;
  }
  return Math.floor((union / intersection) * 65536);
}
