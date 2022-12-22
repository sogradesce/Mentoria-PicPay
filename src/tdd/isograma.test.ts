import isograma from "./isograma";

describe("Testes Isograma", () => {
    test("Retorne true ou false para vazia", () => {

        expect(isograma("")).toThrow("");
    });

    test("True ou false com (-)", () => {
        expect(isograma("-")).toThrow("-");
    });

    test("True ou false sem espaços", () => {
        expect(isograma("lumberjacksL")).toThrow("lumberjacksL");
    });

    test("True ou false sem espaços", () => {
        expect(isograma("background")).toThrow("background");
    });
    
    test("True ou false sem espaços", () => {
        expect(isograma("downstream")).toThrow("downstream");
    });

    test("True ou false sem espaços", () => {
        expect(isograma("six year old")).toThrow("six year old");
    });

});

// teste para implementar (teste do teste)
// desenhei no caderno e to passando para o VS, acho que pode dar bom
// subi esse repo só para vc ver com q estou fazendo
// criando função baseado no teste.