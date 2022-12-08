// Tipos primitivos
let a: string = "blalba"
let b: number = 1
let c: number = 1.9
let d: boolean = false
let e: boolean = true

// Arrays
let arrA: number[] = [1,2,3,4,5]
let arrB: string[] = ["1,2,3,4,5", "A", "asd"]

// Tipos inferidos
let infA = "asdfasdf" // string
let infB = 12354 // number
let infC = false // boolean

// Funções
function add(a: number, b: number): number {
    return a + b
}

let abc = add(1,3)
let abd = add(abc,3)

// Objetos
let objA: {x: number, y: number, z: number} = {
    "x": 123,
    "y": 456,
    "z": 789
}

console.log(objA.z + objA.y)
console.log(objA["z"])

// Uniões de tipos
function addOrConcatenate(a: number | string, b: number | string): number | string {
    if (typeof a == "number" && typeof b == "number") {
        return a + b
    } 
    return a + "" + b
}

// Type Alias
type Blabla = number | string
function addOrConcatenate2(a: Blabla, b: Blabla): Blabla {
    if (typeof a == "number" && typeof b == "number") {
        return a + b
    } 
    return a + "" + b
}

type Point = {
    x: number,
    y: number,
    z: number
}

let objB: Point = {
    "x": 123,
    "y": 456,
    "z": 789
}

let objC: Point = {
    "x": 123,
    "y": 456,
    "z": 789
}

type User = {
    name: string,
    email: string,
    consumer_id: string,
    device_os: "android" | "ios",
    app_version: string
}

// Tipos Literais (Literal Types)
let device_os: "android" | "ios"

device_os = "windows_phone"