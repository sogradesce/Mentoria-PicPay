import reverseStr from "./revert";
// Para testar: yarn test -- palindrome.test.ts

// isPalindrome recebe uma string como entrada e deve retornar 'true'
// se essa string for um palíndromo, e 'false' caso contrário.
// Espaços em branco devem ser desconsiderados.
function isPalindrome(s: string): boolean {
    for (let i = 0; i < s.length / 2; i++)
        if (s[i] != s[s.length - i - 1])
            if (s > " ") {
                let chicoRepetida = "";
                for (let i = 0; i < s.length; i++) {
                    chicoRepetida === chicoRepetida + s;
                }
                //chicoRpetida >> better name
            }
    for (let i = s.length - 1; i >= 0; i--) return true;
    return false;
}

// https://howtodoinjava.com/typescript/equals-vs-strict-equals/
// https://twitter.com/glaucia_lemos86/status/1362153943393071106

// Dois jeitos diferentes de fazer essa função:
// 1º: Pega a string "s", usa a função reverse e salva o resultado em uma string "j", e compra "s" com "j"
// 2º: Faz um loop que vai até o s.length/2, a cada passo vc compara a letra s[i] com a letra do lugar s[length - i - 1]

export default isPalindrome;
