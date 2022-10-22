
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


let chico = s
let informacao: Array<string> = []

for (let i = 0; i < chico.length; i++) {
if(chico[i] === ' '){
    informacao.push(chico[i]);
    } else{
     informacao.push(chico[i]);
    }
  
  }
console.log('brubs' ,informacao);
    return informacao;
    
}

// referencia: https://www.scaler.com/topics/javascript/difference-between-double-equals-and-triple-equals-in-javascript/

export default toArray;