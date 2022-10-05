import reverseStr from "./revert";

describe("Revert a string", () => {
    test("String vazia", () => {
        expect(reverseStr("")).toBe("");
    });

    test("String de um caractere", () => {
        expect(reverseStr("a")).toBe("a");
    });

    test("String sem espaços", () => {
        expect(reverseStr("abcdefg")).toBe("gfedcba");
    });

    test("String com espaços", () => {
        expect(reverseStr("oi tudo bem")).toBe("meb odut io");
    });

    test("Palíndromo", () => {
        expect(reverseStr("arara")).toBe("arara");
    });
});
