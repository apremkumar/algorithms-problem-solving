let input1 = [3, 4, -1, 1], input2 = [1, 2, 0], input3 = [2, 1],
    input4 = [1, -1, -5, -3, 3, 4, 2, 8], input5 = [1, 1],
    input6 = [0, -1, 3, 1];

function firstMissingPositive(nums) {
    nums = [...new Set(nums)];
    nums = nums.filter(el => el > 0)
    for (let i = 0; i < nums.length; i++) {
        if (Math.abs(nums[i]) <= nums.length) {
            nums[Math.abs(nums[i]) - 1] = (-1) * nums[Math.abs(nums[i]) - 1];
        }
    }
    let positiveIndex = nums.findIndex(el => el > 0);
    return (positiveIndex === -1 ? nums.length : positiveIndex) + 1;
}

console.assert(firstMissingPositive([...input1]) === 2)
console.assert(firstMissingPositive([...input2]) === 3)
console.assert(firstMissingPositive([...input3]) === 3)
console.assert(firstMissingPositive([...input4]) === 5)
console.assert(firstMissingPositive([...input5]) === 2)
console.assert(firstMissingPositive([...input6]) === 2)