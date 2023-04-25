/**
 * 개인정보 수집 유효기간
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=949ed5e79506447090651688f760ef53&pm=s)
 */
function getExpiredDate(dateStr, termPeriod) {
  let [year, month, day] = dateStr.split(".").map(Number);
  month += termPeriod;
  day -= 1;
  if (day === 0) {
    month -= 1;
    day = 28;
  }
  if (month > 12) {
    let monthCount = Math.floor(month / 12);
    year += monthCount;
    month = month % 12;
  }
  if (month === 0) {
    month += 12;
    year -= 1;
  }
  return [year, month, day];
}

function solution(today, terms, privacies) {
  const answer = [];
  privacies.forEach((privacy, idx) => {
    const [date, term] = privacy.split(" ");
    const termPeriod = Number(
      terms
        .map((v) => v.split(" "))
        .filter((v) => {
          return v[0] === term;
        })[0][1]
    );
    const [eYear, eMonth, eDay] = getExpiredDate(date, termPeriod);
    const [tYear, tMonth, tDay] = today.split(".").map(Number);
    let ch = false;
    if (tYear > eYear) ch = true;
    if (tYear === eYear && tMonth > eMonth) ch = true;
    if (tYear === eYear && tMonth === eMonth && tDay > eDay) ch = true;
    if (ch) answer.push(idx + 1);
  });
  return answer;
}
