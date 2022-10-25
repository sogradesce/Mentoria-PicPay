// Para testar: yarn test -- all_occurrence.test.ts

// findAllOccurrences recebe uma string e uma letra, e deve retornar
// todas as posições que essa letra aparece na string, considerando espaços em branco.
// Retorna um array vazio ([]) caso a letra não exista na string.
/*
    Exemplo:
        findAllOccurrences("abcd", "d") => [3]
        findAllOccurrences("a d c d", "d") => [2, 6]
        findAllOccurrences("abcd", "x") => []
*/

function findAllOccurrences(str: string, letter: string): Array<number> {
    // Dica: Andar pela string usando um loop "for" para verificar letra a letra, e
    // colocar os resultados positivos dentro de um array
    return [];
}

export default findAllOccurrences;
