/**
 * 호텔 대실
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=cd70062ddcba4483962efe93712f71d7&pm=s)
 */
function solution(book_time) {
  const rooms = [];
  // 1. 입력 받은 startTime, endTime을 각각 분 단위로 변경한다.
  book_time = book_time.map(([startTime, endTime]) => {
    startTime = startTime.split(":");
    endTime = endTime.split(":");
    const [start_hour, start_minute] = startTime;
    const [end_hour, end_minute] = endTime;
    const all_start_minute = Number(start_hour) * 60 + Number(start_minute);
    const all_end_minute = Number(end_hour) * 60 + Number(end_minute) + 10;
    return [all_start_minute, all_end_minute];
  });

  // 2. book_time을 startTime에 맞게 정렬한다.
  book_time.sort((a, b) => a[0] - b[0]);

  // 3. book_time을 순회 하며 필요한 방의 갯수를 카운팅 한다.
  let needRoom = 0;
  for (let [startTime, endTime] of book_time) {
    const outRoomIdx = rooms.findIndex(([_, r_end_time]) => r_end_time <= startTime);
    // 방에 아무도 없거나 비어있는 방이 없다면 새로운 방에 들어간다.
    if (outRoomIdx === -1) {
      rooms.push([startTime, endTime]);
      needRoom++;
    }
    // 나갈 방이 있다면 그 방에 있는 사람을 없애고 기존 room에 추가 한다.
    else {
      rooms.splice(outRoomIdx, 1);
      rooms.push([startTime, endTime]);
    }
  }
  // 4. 필요한 방의 갯수를 반환한다.
  return needRoom;
}
