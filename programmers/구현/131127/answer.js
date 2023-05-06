/**
 * 할인 행사
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=41f487ba4b744c2a97ef3fe9dad2c490&pm=s)
 */
const isBuyItems = (discountItems, want, number) => {
  let flag = 0;
  for (let i = 0; i < want.length; i++) {
    if (discountItems.filter((item) => item === want[i]).length === number[i])
      flag++;
  }
  return flag;
};

function solution(want, number, discount) {
  let answer = 0;
  for (let i = 0; i <= discount.length - 10; i++) {
    const discountItems = discount.slice(i, i + 10);
    if (!want.includes(...discountItems)) continue;
    if (isBuyItems(discountItems, want, number) === want.length) answer++;
  }
  return answer;
}
