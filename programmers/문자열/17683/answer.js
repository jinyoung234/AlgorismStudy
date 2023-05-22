/**
 * 방금 그 곡
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=f6fe40eac43f416e8f3764ef9e986ab6&pm=s)
 */
function solution(m, musicinfos) {
  var answer = [];
  for (let musicinfo of musicinfos) {
    let [startTime, endTime, title, music] = musicinfo.split(",");
    let [[startHour, startMinute], [endHour, endMinute]] = [
      startTime.split(":").map(Number),
      endTime.split(":").map(Number),
    ];
    const _music = music.match(/[A-Z]#?/g);
    let streamTime = (endHour - startHour) * 60 + (endMinute - startMinute);
    let stream = "";
    // streamTime 만큼 곡을 재생(% 연산자 사용이유는 재생 시간 보다 곡의 길이가 짧을 경우 반복하기 위해)
    for (let i = 0; i < streamTime; i++) stream += _music[i % _music.length];
    // 곡 제목, 재생 시간, 재생 한 것을 answer에 추가
    answer.push([title, streamTime, stream]);
  }
  // 기억하고 있는 음이 재생 되고 있는 음과 일치하는지 확인
  answer = answer.filter(([_, __, stream]) => {
    let i = stream.indexOf(m);
    if (i === -1) return false;
    while (i !== -1) {
      if (stream[i + m.length] !== "#") return true;
      i = stream.indexOf(m, i + 1);
    }
  });
  // 일치하는게 없다면 none을 반환
  if (answer.length === 0) return "(None)";
  // 일치하는게 있다면 재생 시간이 가장 긴 곡 제목을 반환
  answer.sort((a, b) => b[1] - a[1]);
  return answer[0][0];
}
