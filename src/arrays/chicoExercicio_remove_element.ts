// https://leetcode.com/problems/remove-element/

function removeElement(nums: number[], val: number): number {
    let i = 0;

    for (i; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }

    // fonte splice
    //https://www.tutorialspoint.com/typescript/typescript_array_splice.htm
    // Obs: dificil achar essa função rs

    return i + 1;
}
