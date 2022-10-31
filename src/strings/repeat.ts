// Para testar: yarn test -- repeat.test.ts

// repeatStr recebe uma string 's' e um número 'times'.
// Deve retornar a string 's' repetida 'times' vezes.
// Caso o número recebido seja menor ou igual a 0, retornar string vazia.
/*
    Exemplo:
        repeatStr("abcd", 1) => "abcd"
        repeatStr("a d ", 3) => "a d a d a d "
        repeatStr("abcd", -4) => ""
*/
function repeatStr(s: string, n: number): string {
    if (n > 0) {
        let strRepetida = ""
        for (let i = 0; i < n; i++) {
            strRepetida = strRepetida + s
        }
        return strRepetida
    }

    return ""
}

export default repeatStr;
