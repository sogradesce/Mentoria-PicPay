// Para testar: yarn test -- to_array.test.ts

// toArray recebe uma string 's' e deve retornar um array contendo cada caractere da string.
// Deve considerar espaços em branco.
// Caso a string 's' seja vazia, retornar um array vazio.
/*
    Exemplo:
        toArray("abcd") => ["a", "b", "c", "d"]
        toArray("a b ") => ["a", " ", "b", " "]
        toArray("") => []
*/
function toArray(s: string): Array<string> {
    let informacao: Array<string> = [];

    for (let i = 0; i < s.length; i++) {
        informacao.push(s[i]);
    }

    return informacao;
}

/* Boas práticas e correções:
- Remover console.log(...) uma vez que tenha concluído o desenvolvimento
- Como a string "s" recebida como parâmetro não é modificada, não é necessário criar uma nova variável para receber seu valor
- Se a mesma lógica é feita dentro do if{...} e do else{...}, provavelmente o uso de if/else é desnecessário
*/

export default toArray;
