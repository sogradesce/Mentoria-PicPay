import isograma from "./isograma";

describe("Testes Isograma", () => {
    test("Retorne true ou false para vazia", () => {
        expect(isograma("")).toBe(false);
    });

    test("True ou false com (-)", () => {
        expect(isograma("-")).toBe(false);
    });

    test("True ou false sem espaços", () => {
        expect(isograma("-   lumberjacksL")).toBe(false);
    });

    test("True ou false sem espaços", () => {
        expect(isograma("-   background")).toBe(true);
    });

    test("True ou false sem espaços", () => {
        expect(isograma("-   downstream")).toBe(true);
    });

    test("True ou false sem espaços", () => {
        expect(isograma("six-year-old")).toBe(true);
    });
});

// teste para implementar (teste do teste)
// desenhei no caderno e to passando para o VS, acho que pode dar bom
// subi esse repo só para vc ver com q estou fazendo
// criando função baseado no teste.
