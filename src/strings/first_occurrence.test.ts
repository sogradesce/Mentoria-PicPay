import findFirstOccurrence from "./first_occurrence";

describe("Find the first occurrence of a letter in a string", () => {
    test("String vazia existe em string vazia", () => {
        expect(findFirstOccurrence("", "")).toBe(0);
    });

    test("Letra não existe em string vazia", () => {
        expect(findFirstOccurrence("", "a")).toBe(-1);
    });

    test("Letra existe em string de um caractere", () => {
        expect(findFirstOccurrence("a", "a")).toBe(0);
    });

    test("Letra não existe em string de um caractere", () => {
        expect(findFirstOccurrence("a", "b")).toBe(-1);
    });

    test("Letra existe em string sem espaços", () => {
        expect(findFirstOccurrence("abcdefg", "e")).toBe(4);
    });

    test("Letra não existe em string sem espaços", () => {
        expect(findFirstOccurrence("abcdefg", "z")).toBe(-1);
    });

    test("Letra existe em string com espaços", () => {
        expect(findFirstOccurrence("oi tudo bem", "o")).toBe(0);
    });

    test("Letra não existe em string com espaços", () => {
        expect(findFirstOccurrence("oi tudo bem", "z")).toBe(-1);
    });

    test("Espaço em branco existe em string", () => {
        expect(findFirstOccurrence("suco de laranja", " ")).toBe(4);
    });

    test("Espaço em branco não existe em string", () => {
        expect(findFirstOccurrence("eraumavez", " ")).toBe(-1);
    });
});
