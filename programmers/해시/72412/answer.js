/**
 * 순위 검색
 * (https://www.notion.so/ff4827ef5851455499c079822e12d532)
 */
const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);
  while (left <= right) {
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;

    mid = Math.floor((left + right) / 2);
  }
  return mid + 1;
};

const getInfos = (info) => {
  const infos = {};
  // info를 순회하며 해시의 형태로 만들어 준다.
  // key - score를 제외한 나머지, value - score
  info.forEach((infoString) => {
    const arr = infoString.split(" ");
    const score = parseInt(arr.pop());
    const key = arr.join("");
    // info에 key가 등록되지 않은 경우가 있을 수 있기 때문에 optional chaining과
    // 널 병합 연산자를 통해서 해당 값이 undefined면 해시에 등록하고 아니라면 score를 추가 한다.
    infos[key]?.push(score) ?? (infos[key] = [score]);
  });
  // 등록된 해시에 대해 이진 탐색을 위해서 각 키에 대한 value를 정렬 한다.
  Object.keys(infos).forEach((key) => {
    infos[key].sort((a, b) => a - b);
  });
  return infos;
};

const getApplicants = (infos, query, score) => {
  return (
    Object.keys(infos)
      // filter 함수를 통해 score를 제외한 조건에 맞는 참가자만 남긴다.
      .filter((key) => query.every((v) => key.includes(v)))
      // reduce 함수를 통해 target score 이상인 사람의 수를 반환한다.
      .reduce((acc, key) => {
        // 기존 acc에 score의 길이에서 target score의 idx - 1을 뺀 값을 반환
        return acc + infos[key].length - binarySearch(infos[key], score);
      }, 0)
  );
};

const solution = (info, query) => {
  // getInfos 함수를 통해 info에 대한 dictionary를 생성한다.
  const infos = getInfos(info);
  // map 함수를 통해 해당 쿼리에 대해 조건에 맞는 지원자를 반환한다.
  const answer = query.map((q) => {
    // split과 filter 함수를 통해 and와 -를 제외한 조건들을 배열 형태로 초기화 한다.
    const querys = q.split(" ").filter((v) => v !== "and" && v !== "-");
    // querys를 pop 하여 query의 score를 추출한다.
    const score = querys.pop();
    // getApplicants 함수를 통해 조건에 맞는 지원자 수를 반환한다.
    return getApplicants(infos, querys, score);
  });
  return answer;
};
