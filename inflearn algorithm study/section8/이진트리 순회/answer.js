/** 알고리즘(전위 순회) => T - L - R */
function preorder(arr) {
  function DFS(L) {
    if (arr.length <= L) return;
    console.log(arr[L]);
    DFS(2 * L + 1);
    DFS(2 * L + 2);
  }
  DFS(0);
}

/**
 * [전위 순회 순서] => (인덱스)
 * 0(o) -> 1(o) -> 3(o) -> 7(x) -> 3 -> 8(x) -> 1 -> 4(o) ->
 * 9(x) -> 4 -> 10(x) -> 4 -> 1 -> 0 -> 2(o) -> 5(o) -> 11(x) ->
 * 5 -> 12(x) -> 6(o) -> 13(x) -> 6 -> 14(x) -> 6 -> 2 -> 0
 */
console.log(preorder([1, 2, 3, 4, 5, 6, 7])); // 1 2 4 5 3 6 7

/** 알고리즘(중위 순회) L - T - R */
function inorder(arr) {
  function DFS(L) {
    if (arr.length <= L) return;
    DFS(2 * L + 1);
    console.log(arr[L]);
    DFS(2 * L + 2);
  }
  DFS(0);
}

/**
 * [중위 순회 순서] => (인덱스)
 * 0 -> 1 -> 3 -> 7(x) -> 3(o) -> 8(x) -> 3 -> 1(o) -> 4 -> 9(x)
 * -> 4(o) -> 10(x) -> 4 -> 1 -> 0(o) -> 2 -> 5 -> 11(x) -> 5(o)
 * -> 12(x) -> 5 -> 2(o) -> 6 -> 13 -> 6(o) -> 14(x) -> 6 -> 2
 * -> 0
 */
console.log(inorder([1, 2, 3, 4, 5, 6, 7])); // 4 2 5 1 6 3 7

/** 알고리즘(후위 순회) L - R - T */
function postorder(arr) {
  function DFS(L) {
    if (arr.length <= L) return;
    DFS(2 * L + 1);
    DFS(2 * L + 2);
    console.log(arr[L]);
  }
  DFS(0);
}
/**
 * [후위 순회 순서] => (인덱스)
 * 0 -> 1 -> 3 -> 7(x) -> 3 -> 8(x) -> 3(o) -> 1 -> 4 -> 9(X) ->
 * 4 -> 10(x) -> 4(o) -> 1(o) -> 0 -> 2 -> 5 -> 11(x) -> 5 ->
 * 12(x) -> 5(o) -> 2 -> 6 -> 13(x) -> 6 -> 14(x) -> 6(o) -> 2(o)
 * -> 0(o)
 */
console.log(postorder([1, 2, 3, 4, 5, 6, 7])); // 4 5 2 6 7 3 1
