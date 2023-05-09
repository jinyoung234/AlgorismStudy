/**
 * 스킬 트리
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=67e9fd9861384c80ba77184bbe978252&pm=s)
 */
const getIsCorrectSequence = (filterSkilltree, skill) => {
  for (let i = 0; i < filterSkilltree.length; i++) {
    if (skill[i] !== filterSkilltree[i]) return false;
  }
  return true;
};

function solution(skill, skill_trees) {
  let answer = 0;
  skill_trees.forEach((skill_tree) => {
    const filterSkilltree = [...skill_tree].filter((_skill) => {
      return [...skill].includes(_skill);
    });
    if (getIsCorrectSequence(filterSkilltree, skill)) answer++;
  });
  return answer;
}
