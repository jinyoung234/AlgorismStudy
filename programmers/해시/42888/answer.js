/**
 * 오픈 채팅방
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=79993af8336643559f0bdff085e0443d&pm=s)
 */
function solution(record) {
  let answer = [];
  const map = new Map();
  record.forEach((_, i) => {
    const [status, uid, name] = record[i].split(" ");
    if (status === "Leave") {
      answer.push([uid, "님이 나갔습니다."]);
      return;
    }
    if (status === "Enter") {
      answer.push([uid, "님이 들어왔습니다."]);
    }
    map.set(uid, name);
  });
  return answer.map(([name, message]) => map.get(name) + message);
}
