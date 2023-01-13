import isograma from "./isograma";

describe("Testes Isograma", () => {
    test("True ou false sem espaços", () => {
        expect(isograma("-   lumberjacksL")).toBe(true);
    });

    test("True ou false sem espaços", () => {
        expect(isograma("-   background")).toBe(true);
    });

    test("True ou false sem espaços", () => {
        expect(isograma("-   downstream")).toBe(true);
    });

    test("True ou false sem espaços", () => {
        expect(isograma("-   six-year-old")).toBe(true);
    });
});
