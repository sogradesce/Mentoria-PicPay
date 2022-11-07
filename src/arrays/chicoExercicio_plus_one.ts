//https://leetcode.com/problems/plus-one/

function plusOne(digits: number[]): number[] {
    for (let i = 1; i <= digits.length; i++) {
        let chicoGo = digits[digits.length - i];
        //chicoGo = https://www.youtube.com/watch?v=2kyNEf9IsBQ
        //if exist golang = chico feliz
        if (chicoGo < 9) {
            digits[digits.length - i] = chicoGo + 1;
            break;
        } else {
            digits[digits.length - i] = 0;
            if (digits.length == i && chicoGo == 9) {
                digits.unshift(1);
                break;
            }
        }
    }
    return digits;
}
