/**
 * 다음 큰 숫자
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=541fda0a228d429b882f5ad8a3cfd193&pm=s)
 */
function solution(n) {
  const initialfilterNum = n
    .toString(2)
    .split("")
    .filter((v) => {
      return v !== "0";
    }).length;

  while (true) {
    n++;
    const filterNum = n
      .toString(2)
      .split("")
      .filter((v) => {
        return v !== "0";
      }).length;
    if (filterNum === initialfilterNum) break;
  }
  return n;
}
