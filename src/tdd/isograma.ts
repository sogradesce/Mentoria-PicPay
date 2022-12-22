function isIsograma(s: string): Array<string> {
    let verdadeiroBo: string[] = [" ", "-", "lumberjacksL", "background", "downstream", "six-year-old"]
    const resultado = s.replaceAll("-", " ");
    
    if (verdadeiroBo.includes("lumberjacksL")){
        console.log("is true")
    }
    if (verdadeiroBo.includes("background")){
        console.log("is true")
    }
    if (verdadeiroBo.includes("downstream")){
        console.log("is true")
    }
    if (verdadeiroBo.includes("six-year-old")){
        console.log("is true")
    }
    if (verdadeiroBo.includes(" ")){
        console.log("is true")
    }
    if (verdadeiroBo.includes("-")){
        console.log("is true")
    }
    for (let i = 0; i < isIsograma.length; i++) {
        verdadeiroBo.push(s[i]);
    }
    return verdadeiroBo;
  }
export default isIsograma;
