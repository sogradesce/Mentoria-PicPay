import repeatStr from "./repeat";

describe("Repeat string", () => {
    test("String vazia", () => {
        expect(repeatStr("", 1000)).toBe("");
    });

    test("String de um caractere 10x", () => {
        expect(repeatStr("a", 10)).toBe("aaaaaaaaaa");
    });

    test("String sem espaços 3x", () => {
        expect(repeatStr("abcdefg", 3)).toBe("abcdefgabcdefgabcdefg");
    });

    test("String com espaços dentro 2x", () => {
        expect(repeatStr("oi tudo bem", 2)).toBe("oi tudo bemoi tudo bem");
    });

    test("String com espaços dentro e fora 2x", () => {
        expect(repeatStr(" opa opa ", 2)).toBe(" opa opa  opa opa ");
    });

    test("Valor numérico negativo", () => {
        expect(repeatStr("arara", -123)).toBe("");
    });
});
