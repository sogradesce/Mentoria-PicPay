import isograma from "./isograma";

describe("Testes Isograma", () => {
    test("String vazia", () => {
        expect(isograma("")).toBe("");
    });

    test("String com (-)", () => {
        expect(isograma("-")).toBe("-");
    });

    test("String sem espaços", () => {
        expect(isograma("lumberjacksL")).toBe("lumberjacksL");
    });

    test("String sem espaços", () => {
        expect(isograma("background")).toBe("background");
    });
    
    test("String sem espaços", () => {
        expect(isograma("downstream")).toBe("downstream");
    });

    test("String sem espaços", () => {
        expect(isograma("six year old")).toBe("six year old");
    });

});

// teste para implementar (teste do teste)
// desenhei no caderno e to passando para o VS, acho que pode dar bom
// subi esse repo só para vc ver com q estou fazendo