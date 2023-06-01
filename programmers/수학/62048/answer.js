/**
 * 멀쩡한 사각형
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=75a40dd7c03c44c78b094875f51ad1c3&pm=s)
 */

const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));

function solution(w, h) {
  const gcdVal = gcd(w, h);
  return w * h - (w + h - gcdVal);
}
