// https://leetcode.com/problems/two-sum/

function twoSum(nums: number[], target: number): number[] {
    let chicoExclui: number[] = [];
    //chicoExclui better name for "variavel"....
    //aws primeiro nome que veio na cabeça, mas poderia ser outra letra ou forma de função...

    for (let i = 0; i < nums.length; i++) {
        for (let aws = i + 1; aws < nums.length; aws++) {
            if (nums[i] + nums[aws] === target) {
                chicoExclui.push(i, aws);
                return chicoExclui;
            }
        }
    }
}
