/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j]
//             }
//         }
//     }
// };

let twoSum = function(nums, target) {
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        if (obj[target - nums[i]] === undefined) {
            obj[nums[i]] = i
        } else return [i, obj[target - nums[i]]]
    }
};