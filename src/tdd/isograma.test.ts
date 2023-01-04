import isograma from "./isograma";

describe("Testes Isograma", () => {
    test("Retorne true ou false para vazia", () => {
<<<<<<< HEAD
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
=======
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
>>>>>>> f801c73278cbaa85da71e190358f478e5c236df3
    });

    test("True ou false sem espaços", () => {
        expect(isograma("six-year-old")).toBe(true);
    });
});

<<<<<<< HEAD
// teste para implementar (teste do teste)
// desenhei no caderno e to passando para o VS, acho que pode dar bom
// subi esse repo só para vc ver com q estou fazendo
// criando função baseado no teste.
=======
>>>>>>> f801c73278cbaa85da71e190358f478e5c236df3
