/**
 * 두 큐 합 같게 만들기
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=2c45c5d6cf83428a8895d323b70dec26&pm=s)
 */

const getSum = (queue1, queue2) => {
  let [result1, result2] = [0, 0];
  queue1.forEach((n, i) => {
    result1 += n;
    result2 += queue2[i];
  });
  return [result1, result2];
};

function solution(queue1, queue2) {
  let [sum_q1, sum_q2] = getSum(queue1, queue2);
  let [target, answer] = [(sum_q1 + sum_q2) / 2, 0];
  let [pointer_q1, pointer_q2] = [0, queue1.length];
  const queue = [...queue1, ...queue2];
  while (answer <= queue.length * 3) {
    if (target === sum_q1) return answer;
    answer++;
    if (target > sum_q1) {
      sum_q1 += queue[pointer_q2++];
      continue;
    }
    if (target < sum_q1) {
      sum_q1 -= queue[pointer_q1++];
      continue;
    }
  }
  return -1;
}
