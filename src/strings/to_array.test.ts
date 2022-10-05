import toArray from "./to_array";

describe("Converts a string to an array", () => {
    test("String vazia", () => {
        expect(toArray("")).toStrictEqual([]);
    });

    test("String de um caractere", () => {
        expect(toArray("a")).toStrictEqual(["a"]);
    });

    test("String sem espaços", () => {
        expect(toArray("abcd")).toStrictEqual(["a", "b", "c", "d"]);
    });

    test("String com espaços internos", () => {
        expect(toArray("o p a")).toStrictEqual(["o", " ", "p", " ", "a"]);
    });

    test("String com espaços externos", () => {
        expect(toArray(" alo ")).toStrictEqual([" ", "a", "l", "o", " "]);
    });
});
