import findAllOccurrences from "./all_occurrence";

describe("Find all occurrences of a letter in a string", () => {
    test("String vazia existe em string vazia", () => {
        expect(findAllOccurrences("", "")).toStrictEqual([0]);
    });

    test("Letra não existe em string vazia", () => {
        expect(findAllOccurrences("", "a")).toStrictEqual([]);
    });

    test("Letra existe em string de caracteres iguais", () => {
        expect(findAllOccurrences("a", "aaaa")).toStrictEqual([0, 1, 2, 3]);
    });

    test("Letra não existe em string de um caractere", () => {
        expect(findAllOccurrences("a", "b")).toStrictEqual([]);
    });

    test("Letra existe em string sem espaços", () => {
        expect(findAllOccurrences("abcdefg", "e")).toStrictEqual([4]);
    });

    test("Letra não existe em string sem espaços", () => {
        expect(findAllOccurrences("abcdefg", "z")).toStrictEqual([]);
    });

    test("Letra existe em string com espaços", () => {
        expect(findAllOccurrences("oi tudo bem", "o")).toStrictEqual([0, 6]);
    });

    test("Letra não existe em string com espaços", () => {
        expect(findAllOccurrences("oi tudo bem", "z")).toStrictEqual([]);
    });

    test("Espaço em branco existe em string", () => {
        expect(findAllOccurrences("suco de laranja", " ")).toStrictEqual([4, 7]);
    });

    test("Espaço em branco não existe em string", () => {
        expect(findAllOccurrences("eraumavez", " ")).toStrictEqual([]);
    });
});
