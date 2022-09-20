
document.querySelector('#t1').textContent = 'Java Script - Introdução';
document.querySelector('#t2').textContent = 'Exemplificando algumas funcionalidades';

//apresenta uma mensagem e esconde o form de login

/*
function bemVindo(){
    const nome = document.querySelector('#nomeUsuario').ariaValueMax;
    alert('Olá ${nome} !Seja Bem-vindo!');
    document.getElementById('FormularioLogin').style.display = 'none';
}
*/

function mudaCorFundo(){
    const menu = document.querySelector('#coresFundo');
    const cor = menu.options[menu.selectedIndex].value;
    document.body.style.background = cor;

}


//let, function, if, else, while, for, etc

let primeiroNome = 'Carlos';
console.log(primeiroNome)

primeiroNome = 'Ana';
console.log(primeiroNome);
