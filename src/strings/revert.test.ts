import { reverseStr } from "./revert"


describe("Reverse string", () =>{
    test("empty string", () => {
        expect(reverseStr("hi")).toBe("")
    })

    test("non empty string", () => {
        expect(reverseStr("hi")).toBe("ih")
    })
})