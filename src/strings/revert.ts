// Para testar: yarn test -- revert.test.ts

// reverseStr deve retornar o inverso da string recebida como parâmetro.
// Espaços em branco devem ser mantidos.
function reverseStr(s: string): string {
    let info = [];
    for (let i = 0; i < s.length; i++) {
        info.push(s[i]);
    }

    let revertido = info.reverse();
    
    let textoRevertido = "";
    for (let i = 0; i < revertido.length; i++) {
        textoRevertido += revertido[i];
    }

    return textoRevertido;
}

/* Boas práticas e correções:
- Remover console.log(...) uma vez que tenha concluído o desenvolvimento
- Como a string "s" recebida como parâmetro não é modificada, não é necessário criar uma nova variável para receber seu valor
*/

// Outra possível solução (mais performática):
function reverseStrSolution(s: string): string {
    let inverso = "";
    // Loop a seguir lê a string de trás para frente
    for (let i = s.length - 1; i >= 0; i--) {
        inverso = inverso + s[i];
    }

    return inverso;
}

export default reverseStr;