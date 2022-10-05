import fillBlanks from "./fill_blanks";

describe("Fill blank spaces in a string", () => {
    test("String vazia", () => {
        expect(fillBlanks("", "-")).toBe("");
    });

    test("String de um caractere", () => {
        expect(fillBlanks("a", "-")).toBe("a");
    });

    test("String de um caractere com espaços", () => {
        expect(fillBlanks(" a ", "-")).toBe("-a-");
    });

    test("String sem espaços", () => {
        expect(fillBlanks("abcdefg", "@")).toBe("abcdefg");
    });

    test("String com espaços dentro", () => {
        expect(fillBlanks("oi  tudo  bem", "B")).toBe("oiBBtudoBBbem");
    });

    test("String com espaços dentro e fora", () => {
        expect(fillBlanks(" opa opa ", "=")).toBe("=opa=opa=");
    });
});
