type Vistos = {
    [key: string]: boolean;
};
function isograma(s: string): boolean {
    let letraComEsp = s.replaceAll("-", "");
    letraComEsp = letraComEsp.replaceAll(" ", "");

    var newstr = s.toUpperCase( );

    const letrasPalavras = "";

    let olhados: Vistos = {};
    for (let i = 0; i < letrasPalavras.length; i++) {

        if (!olhados[letraComEsp]){
            olhados[letrasPalavras] = true;
        } else {
            olhados[letraComEsp] = false
        }
        const letra = letrasPalavras[i];
        olhados[letrasPalavras] = false;
    }
    return true;
}

export default isograma;

//review os "for", "if" e "else"
//help
