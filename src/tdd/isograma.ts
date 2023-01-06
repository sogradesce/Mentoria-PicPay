   function isograma(s: string): boolean {

        
   
        let letraComEsp = s.replaceAll("-", "");
            letraComEsp = letraComEsp.replaceAll(" ", "");
        // remove caracteres "-" e ""

        let vistos: Array<string> = [];
        for (let i = 0; i < s.length; i++) {
        vistos.push(s[i]);
        // objeto vistos esta armazenando cada informação da string do teste
        // for loop 
    
        if (vistos.length > 1)
            return false
            //se a primeira letra existe na string declarada
        else (vistos.length < -1);
        

    return true;
}}

export default isograma;