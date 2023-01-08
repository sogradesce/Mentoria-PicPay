type Vistos = {
    [key: string]: boolean;
};
function isograma(s: string): boolean {
    let letraComEsp = s.replaceAll("-", "");
    letraComEsp = letraComEsp.replaceAll(" ", "");

    const letrasPalavras = "";

    let olhados: Vistos = {};
    for (let i = 0; i < letrasPalavras.length; i++) {
        const letra = letrasPalavras[i];
        olhados[letrasPalavras] = false;
    }
    return true;
}

export default isograma;
