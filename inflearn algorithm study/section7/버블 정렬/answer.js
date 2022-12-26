/**
 * 선택 정렬
 * ▣ 문제
 * N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요. 
 * 정렬하는 방법은 선택정렬입니다.
 */
/**
 * ▣ 입력설명
 * 첫 번째 줄에 자연수 N(1<=N<=100)이 주어집니다.
 * 두 번째 줄에 N개의 자연수가 공백을 사이에 두고 입력됩니다. 각 자연수는 정수형 범위 안에 있습니다.
 */
/**
 * ▣ 출력설명
 * 오름차순으로 정렬된 수열을 출력합니다.
 * ▣ 입력예제 1
 * 6
 * 13 5 11 7 23 15
 * ▣ 출력예제 1
 * 5 7 11 13 15 23
 */

function solution() {
    // answer = input.txt에서 가져온 number []
    let answer = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split("\n").slice(1).join().split(' ').map(i=>Number(i));

    // 배열 처음 ~ 마지막 전까지 (전체배열길이 - 1) 세트 순회
    for (let i = 0; i < arr.length - 1; i++) {
        // n번째 세트의 시작 값 = idx
        let idx = i;
        // 두번째 for문 -> i + 1 ~ 요소 끝까지 순회
        for (let j = i + 1; j < arr.length; j++) {
            // arr[idx]와 arr[j]를 비교해서 더 클 경우 idx값 = j
            if (arr[j] < arr[idx]) {
                idx = j;
            }
        }
        // 순회가 끝나면 n번째 세트의 최솟값을 n번째 자리에 넣기 위해 다음과 같은 로직 구성
        [arr[i], arr[idx]] = [arr[idx], arr[i]];
    }
        // 정렬이 된 arr를 리턴
        return answer;
    }

console.log(solution());