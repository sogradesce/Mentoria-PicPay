// Para testar: yarn test -- revert.test.ts

// reverseStr deve retornar o inverso da string recebida como parâmetro.
// Espaços em branco devem ser mantidos.
function reverseStr(s: string): string {

    let chico = s
    let info = []
    for (let i = 0; i < chico.length; i++) {
      info.push(chico[i])
    }
    let  revertido = info.reverse();
    console.log(revertido)
    
    let textoRevertido = ''
    for (let i = 0; i < revertido.length; i++) {
      textoRevertido += revertido[i]
    }
    
    console.log(textoRevertido)

    return textoRevertido;

}

export default reverseStr;
