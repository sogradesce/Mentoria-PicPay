# Tópicos abordados

- Tempo de Compilação X Tempo de Execução
  - Compilar: criar executável
  - Executar: transformação em linguagem de máquina e execução do programa
  - [Referência](https://www.baeldung.com/cs/runtime-vs-compile-time#:~:text=Compile%20time%20is%20the%20period,generally%20occurs%20after%20compile%20time.)
- Linguagens tipadas: pontos positivos X negativos
  - Negativos:
    - Acostumar com uso e combinação de tipos
  - Positivos:
    - Checagem estática de erros/tipos
    - Argumentos de funções bem-definidos
    - Funciona como um tipo de documentação do código
  - Typescript:
    - [Tipos mais comuns em Typescript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
    - Arquivos de Typescript são compilados automaticamente para Javascript

Exemplo de código suscetível a comportamento indesejado em Javascript:

```js
function add(a, b) {
    return a + b
}

console.log(add(1, 2)) // adiciona
console.log(add(1, "2")) // concatena
console.log(add("Bruno ", "Oliveira")) // concatena
```

Implementação do código acima em Typescript, removendo o comportamento indesejado:

```js
function add(a: number, b: number) {
    return a + b
}

add(1, 2) // adiciona
add("1", 2) // ERRO em tempo de compilação
add("Bruno ", "Oliveira") // ERRO em tempo de compilação
```

- Operadores lógicos
  - AND (&&)
  - OR (||)
  - Existem diversos outros
  - [Referência](https://dicasdeprogramacao.com.br/operadores-logicos/#:~:text=Os%20operadores%20l%C3%B3gicos%20s%C3%A3o%3A%20E,E%20N%C3%83O%2DOU%2DEXCLUSIVO.)

## Iniciando projeto com Typescript

Siga os passos a seguir para instalação das dependências necessárias.  
Recomenda-se utilizar sistema Linux ou macOS.

- Instalar `nvm` (Node Version Manager):
  - [Referência para instalação](https://github.com/nvm-sh/nvm#installing-and-updating)
  - Executar comando `nvm -v` para verificar instalação
- Instalar [Node.js](https://nodejs.org/en/about/) utilizando `nvm`:
  - Executar comando `nvm install node`
  - Executar comando `node -v` para verificar instalação
  - Executar comando `npm -v` para verificar instalação
- Instalar [Yarn](https://yarnpkg.com/) globalmente:
  - Executar comando `npm i -g yarn`
  - Executar comando `yarn -v` para verificar instalação

Após ter instalado essas ferramentas, na raiz desse repositório faça os seguintes passos:

- Execute `yarn init` e aguarde a inicialização (diversos arquivos serão criados)
- Execute `yarn add --dev typescript`
- Crie um arquivo chamado `tsconfig.json` e coloque as seguintes configurações:

```json
{
    "compilerOptions": {
        "outDir": "dist",
        "allowJs": true,
        "noImplicitAny": true,
        "strictNullChecks": true,
        "resolveJsonModule": true,
        "noImplicitReturns": true,
        "esModuleInterop": true,
        "target": "es6",
        "module": "commonjs",
        "baseUrl": "src",
    },
    "include": [
        "./src/**/*"
    ],
    "exclude": [
        "node_modules"
    ]
}
```