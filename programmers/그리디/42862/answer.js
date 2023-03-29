/**
 * 체육복
 */

/**
 * [그리디 알고리즘 특성]
 * 1. 탐욕적 선택 속성(Greedy Choice Property) : 앞의 선택이 이후의 선택에 영향을 주지 않는다.
 * 2. 최적 부분 구조(Optimal Substructure) : 문제에 대한 최종 해결 방법은 부분 문제에 대한 최적 해결 방법으로 구성된다.
 */

function solution(n, lost, reverse) {
  // 체육복을 도난당하고 여벌이 없는 학생(여벌 체육복을 받아야하는 학생)
  // 정렬하지 않았을 때 최대 값이 달라지는 경우가 있기 때문에 sort 해주기!
  // 여벌 체육복이 있는 학생이 도난 당했을 경우 빌려줄 수 없기 때문에 filter 해줘야 함
  let lost_student = lost.sort().filter((l) => !reverse.includes(l));

  // 여벌 옷이 있고 체육복을 도난당하지 않는 학생(여벌 체육복을 빌려줄 수 있는 학생)
  // 정렬하지 않았을 때 최대 값이 달라지는 경우가 있기 때문에 sort 해주기!
  // 여벌 체육복이 있는 학생이 도난 당했을 경우 빌려줄 수 없기 때문에 filter 해줘야 함
  let reverse_student = reverse.sort().filter((r) => !lost.includes(r));

  // 도난 당한 여벌 옷이 없는 학생을 모두 확인할 때 까지 순회
  while (lost_student.length) {
    // 체육복 대여 여부에 대한 시그널 변수 flag(0 = 못 받음, 1 = 받음)
    let flag = 0;
    // 체육복 받아야 하는 학생의 번호
    let studentNum = lost_student.shift();
    // 체육복 빌려줄 수 있는 학생들 모두 탐색
    for (let i = 0; i < reverse_student.length; i++) {
      // 만약 대여 해주는 학생이 받아야 하는 학생 번호의 앞 번호이거나 뒷 번호라면
      if (
        studentNum + 1 === reverse_student[i] ||
        studentNum - 1 === reverse_student[i]
      ) {
        // 대여가 완료 되었으니 대여 가능한 학생 배열에서 제외
        reverse_student.splice(i, 1);
        // 완료되었으니 flag 변수 1로 변경
        flag = 1;
      }
    }
    // 만약 대여 하지 못했다면 최대 값에서 -1 해주기
    if (flag === 0) n -= 1;
  }
  // 대여가능한 학생의 최대 값 출력
  return n;
}

console.log(solution(5, [4, 2], [2, 5]));
