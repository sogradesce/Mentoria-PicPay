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
    var fillBlanks = [];
    for (var i = 0; i < 10; i++) {
        // capture the current state of 'i'
        // by invoking a function with its current value
        (function (i) {
          setTimeout(function () {
            console.log(i);
          }, 100 * i);
        })(i);
      }



export default fillBlanks;
