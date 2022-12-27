import isograma from "./isograma";

describe("Testes Isograma", () => {
    test("Retorne true ou false para vazia", () => {
        expect(isograma("")).toBe(true);
    });

    test("True ou false com (-)", () => {
        expect(isograma("-")).toBe(true);
    });

    test("True ou false sem espaços", () => {
        expect(isograma("lumberjacksL")).toBe(true);
    });

    test("True ou false sem espaços", () => {
        expect(isograma("background")).toBe(true);
    });
    
    test("True ou false sem espaços", () => {
        expect(isograma("downstream")).toBe(true);
    });

    test("True ou false sem espaços", () => {
        expect(isograma("six year old")).toBe(false);
    });

});

