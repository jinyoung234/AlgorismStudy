// function solution(nums) {
//     // 폰켓몬을 넣기 위한 배열
//     let answer = [];
//     // 가져갈 수 있는 폰켓몬의 최댓값 설정
//     var max = nums.length / 2;

//     // 폰켓몬을 가져가기 위해 nums 배열 순회
//     for(let i = 0; i < nums.length; i++) {
//         // 가져간 폰켓몬의 수가 최댓값보다 작고
//         if(answer.length < max) {
//         // nums에 있는 폰켓몬이 배열에 존재하지 않으면
//             if(!answer.includes(nums[i])) {
//                 // 배열에 폰켓몬 추가
//                 answer.push(nums[i]);
//             }
//         }
//     }
//     // 가져간 폰켓몬 수 리턴
//     return answer.length;
// }
