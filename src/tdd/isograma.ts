type Vistos = {
    [key: string]: boolean;
};
function isograma(s: string): boolean {
    let letraComEsp = s.replaceAll("-", "");
    letraComEsp = letraComEsp.replaceAll(" ", "");

    letraComEsp = letraComEsp.toUpperCase();
    // eu lembro que vc tinha informando que dava para colocar na mesma linha, pero jo não me recordo

    let olhados: Vistos = {};
    for (let i = 0; i < letraComEsp.length; i++) {
        if (!olhados[letraComEsp]) {
            olhados[s] = true;
        } else {
            olhados[letraComEsp] = false;
        }
    }
    return true;
}

export default isograma;

