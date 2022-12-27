function contador(frase: any, letraProcurada: any) {
    var  = 0;
    letraProcurada = letraProcurada.normalize('')

    return [...frase].filter(letra => letra === letraProcurada).length;
};

export default contador;


