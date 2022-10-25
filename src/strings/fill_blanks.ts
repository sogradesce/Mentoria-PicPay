// Para testar: yarn test -- fill_blanks.test.ts

// fillBlanks recebe uma string 's' e um separador 'sep'.
// Deve substituir todos os espaços em branco de 's' por 'sep', e retornar o resultado.
// Caso a string 's' seja vazia, retornar uma string vazia.
/*
    Exemplo:
        fillBlanks("abcd", "-") => "abcd"
        fillBlanks("a b c d", "-") => "a-b-c-d"
        fillBlanks(" a bc d ", "@") => "@a@bc@d@"
        fillBlanks("", "@") => ""
*/
function fillBlanks(s: string, sep: string): string {
    return "";
    // Dica: função "setTimeout" não é necessária.
    // Utilizar um loop "for" para andar pela string e
    // verificar onde existem espaços vazios (" ") parece a melhor abordagem
}

export default fillBlanks;
