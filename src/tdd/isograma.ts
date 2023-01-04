function isograma(s: string): boolean {

    const buscaPalavra = s.length;

    let lumberLetra = "L" 
        for (let i = s.length - 1; i >= 0; i--) {
        lumberLetra = lumberLetra + s[i];
    

    return true;

    }
 
    if (buscaPalavra > 10) {

    let letraComEsp = s.replaceAll("-","")
    letraComEsp = letraComEsp.replaceAll("-","")

    return true;
}
return false;
 

}
    
export default isograma;


