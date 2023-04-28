/**
 * 둘만의 암호
 * (https://www.notion.so/6e44db24566340c6b8daaede9430ff58?v=4b38ff2c001841828ab3b95f0cd4e3a0&p=8f5fe7a39acf46dda29b994fa9445345&pm=s)
 */
function solution(s, skip, index) {
  let answer = "";
  const skipCode = skip.split("").map((c) => c.charCodeAt());
  const converted = s.split("").map((c) => {
    let convert = c.charCodeAt();
    for (let i = 0; i < index; i++) {
      convert++;
      while (skipCode.includes(convert)) convert++;

      if (convert === "z".charCodeAt() + 1) convert = "a".charCodeAt(0);
      while (skipCode.includes(convert)) convert++;
    }
    return convert;
  });
  answer = String.fromCharCode(...converted);
  return answer;
}
