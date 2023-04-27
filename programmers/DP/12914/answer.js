/**
 * 멀리 뛰기
 * (https://www.notion.so/6e44db24566340c6b8daaede9430ff58?v=4b38ff2c001841828ab3b95f0cd4e3a0&p=8166f510e475421aa2324cd59784b573&pm=s)
 */
function solution(n) {
  let dynamicArray = Array.from({ length: n });
  if (n === 1) return 1;
  dynamicArray[0] = 1;
  dynamicArray[1] = 2;
  let count = 1;
  while (count != dynamicArray.length - 1) {
    count++;
    dynamicArray[count] =
      (dynamicArray[count - 2] + dynamicArray[count - 1]) % 1234567;
  }
  return dynamicArray[dynamicArray.length - 1];
}

solution(3);
