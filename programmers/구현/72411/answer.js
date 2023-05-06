/**
 * 메뉴 리뉴얼
 * (https://www.notion.so/c659faa48be5446a965c2266f4fe2957)
 */
function solution(orders, course) {
  const answer = [];
  course.forEach((orderLength) => {
    let dictionary = {};
    orders.forEach((order) => {
      function getCombination(idx) {
        if (idx > order.length) return;
        if (tmp.length === orderLength) {
          combination.push(tmp.join(""));
          return;
        } else {
          tmp.push(order[idx]);
          getCombination(idx + 1);
          tmp.pop();
          getCombination(idx + 1);
        }
      }
      const combination = [];
      let tmp = [];
      getCombination(0);
      combination.forEach((menu) => {
        const courseMenu = [...menu].sort().join("");
        if (!dictionary[courseMenu]) dictionary[courseMenu] = 0;
        dictionary[courseMenu]++;
      });
    });
    const maxChoiceMenu = Object.entries(dictionary)
      .filter(([k, v]) => {
        if (v < 2) return;
        return v === Math.max(...Object.values(dictionary));
      })
      .map(([k, v]) => k);
    answer.push(...maxChoiceMenu);
  });
  return answer.sort();
}
