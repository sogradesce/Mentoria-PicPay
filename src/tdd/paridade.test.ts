import paridade from "./paridade";

describe("Testes Pariade", () => {
    it("Deve retornar 2 e 4 quando os numeros forem 1, 2, 3, 4 e 5", () => {
        const notes = [1, 2, 3, 4, 5];
        const [pares, impares] = paridade(notes);
        expect(pares).toEqual([2, 4]);
    });

    it("Deve retornar 1, 3 e 5 quando os numeros forem 1, 2, 3, 4 e 5", () => {
        const notes = [1, 2, 3, 4, 5];
        const [pares, impares] = paridade(notes);
        expect(impares).toEqual([1, 3, 5]);
    });
});
