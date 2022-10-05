import isPalindrome from "./palindrome";

describe("Checks if string is a palindrome", () => {
    test("String vazia", () => {
        expect(isPalindrome("")).toBe(true);
    });

    test("String de um caractere", () => {
        expect(isPalindrome("a")).toBe(true);
    });

    test("String sem espaços", () => {
        expect(isPalindrome("abcdefg")).toBe(false);
    });

    test("String com espaços", () => {
        expect(isPalindrome("oi tudo bem")).toBe(false);
    });

    test("Palíndromo sem espaços", () => {
        expect(isPalindrome("arara")).toBe(true);
    });

    test("Palíndromo com espaços", () => {
        expect(isPalindrome("socorram me subi no onibus em marrocos")).toBe(true);
    });
});
