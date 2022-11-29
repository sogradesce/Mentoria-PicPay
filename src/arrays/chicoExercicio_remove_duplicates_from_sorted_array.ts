// https://leetcode.com/problems/remove-duplicates-from-sorted-array/


function removeDuplicates(nums: number[]): number {
    
    if(nums.length === 1) return 1

    let num1 = 0
    // num1 = numero1
    let num0 = 0
    // num0 = numero0

    while(num1 < nums.length) {
        if(nums[num0] < nums[num1]) {
            nums[num0+1] = nums[num1]
            num0++
        }
        num1++
    }
    return num0 + 1
    
};