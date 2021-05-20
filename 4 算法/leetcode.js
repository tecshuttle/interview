// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
// 你可以按任意顺序返回答案。

// 暴力枚举：6264ms 击败5.88%的人
const add = (nums, target) => {
  for (const i in nums) {
    for (const j in nums) {
      if (nums[i] + nums[j] === target && i !== j) {
        return [i * 1, j * 1];
      }
    }
  }
};

// 动态哈希表法：96ms 击败8.16%的人
const add2 = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num1 = nums[i];
    const num2 = target - nums[i];
    if (map.has(num2)) {
      return [map.get(num2), i];
    } else {
      map.set(num1, i);
    }
  }
};

// 静态哈希表法：88ms 击败23.83%的人
const add3 = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff) && map.get(diff) !== i) {
      return [i, map.get(diff)];
    }
  }
};

// 哈希表法：92ms 击败33.76%的人
const add4 = (nums, target) => {
  let map = new Map();
  for (let i = 0, len = nums.length; i < len; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
};

// 72ms  击败97.2%的人
var twoSum = function (nums, target) {
  const prevNums = {}; // 存储出现过的数字，和对应的索引

  for (let i = 0; i < nums.length; i++) {
    // 遍历元素
    const curNum = nums[i]; // 当前元素
    const targetNum = target - curNum; // 满足要求的目标元素
    const targetNumIndex = prevNums[targetNum]; // 在prevNums中获取目标元素的索引
    if (targetNumIndex !== undefined) {
      // 如果存在，直接返回 [目标元素的索引,当前索引]
      return [targetNumIndex, i];
    } else {
      // 如果不存在，说明之前没出现过目标元素
      prevNums[curNum] = i; // 存入当前的元素和对应的索引
    }
  }
};

console.log(add([2, 3, 4], 6));
console.log(add([2, 7, 11, 15], 13));
console.log(add([2, 7, 11, 15], 26));
