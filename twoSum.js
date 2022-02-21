var twoSum = function(nums, target) {
  for(let i = 0; i < nums.length - 1; i++) {
    for(let k = i + 1; k < nums.length; k++) {
      if (nums[i] + nums[k] === target) {
        return [i, k]; 
      }
    }
  }
  return null;
};

const nums = [3,2,3];
const target = 6;

console.log(twoSum(nums, target));
