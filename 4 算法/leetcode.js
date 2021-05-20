// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
// 你可以按任意顺序返回答案。

const nums = [2, 7, 11, 15];

const target = 6;

const add = (nums, target) => {
  let a = 0,
    b = 0;

  for (const i in nums) {
    console.log(i);
    a = nums[i];
    let numsB = [...nums];
    numsB.splice(i, 1);
    console.log(numsB);

    for (const j in numsB) {
      b = numsB[j];
      console.log(a + b);
      if (a + b === target) {
        console.log(`${a} + ${b} = ${target}`);
        return [i * 1, j * 1 + 1];
      }
    }
  }
};

console.log(add(nums, 9));
