/**
 * 파일명 정렬
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=95e49b3898f84e41baf0ac713d25fdb4&pm=s)
 */
function solution(files) {
  return files
    .map((file) => {
      let [_, head, number, tail] =
        /([ a-zA-Z.-]+)([ 0-9]+)([ a-zA-Z0-9.-]+)?/g.exec(file);
      return [head, number, tail];
    })
    .sort((a, b) => a[1] - b[1])
    .sort((a, b) => {
      if (a[0].toLowerCase() < b[0].toLowerCase()) return -1;
    })
    .map((f) => f.join(""));
}
