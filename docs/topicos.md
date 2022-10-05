# Tópicos abordados

## Compilação X Execução e Linguagens tipadas

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
- Instalar Typescript globalmente:
  - Executar comando `npm i -g typescript`
  - Executar comando `tsc -v` para verificar instalação
- Instalar [Yarn](https://yarnpkg.com/) globalmente:
  - Executar comando `npm i -g yarn`
  - Executar comando `yarn -v` para verificar instalação

Após ter instalado essas ferramentas, na raiz desse repositório faça os seguintes passos:

- Execute `yarn init` e aguarde a inicialização (diversos arquivos serão criados)
- Execute `yarn add --dev typescript`
- Execute `tsc --init` para criar arquivo de configuração do Typescript no projeto.
  - Altere as configurações desse arquivo descomentando linhas ou alterando valores para que os seguintes campos estejam presentes:

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

## GitHub, git e Tipos de Typescript

- git
  - Principais comandos:
    - pull: Puxa atualizações do repositório remoto (GitHub) para o repositório local
    - fetch: Usado para atualizar conteúdos locais com base no repositório remoto (atualiza branches existentes)
    - add: Adiciona arquivos a serem commitados
    - commit: Commita os arquivos adicionados, preferencialmente com uma mensagem descritiva
    - push: Envia os commits locais ao repositório remoto (GitHub)
    - checkout: Troca de branches
      - `git checkout -b <nome>` cria uma nova branch com o nome informado
- GitHub
  - Boas práticas de commits e PRs
    - Commits:
      - Mensagens curtas e descritivas
      - Quebras do trabalho feito em commits distintos (não fazer um commit "geral")
      - [Referência sobre padrão das mensagens de commit](https://www.conventionalcommits.org/en/v1.0.0/)
    - PRs
      - Descrição das mudanças realizadas
      - Passo-a-passo de como testar
      - Listar possíveis impactos causados pelas modificações/inclusões
      - Não dar merge em PRs que não foram revisados por outras pessoas
  - Source Control do VSCode e/ou GitHub Desktop podem facilitar:
    - Criação de novas branches
    - Selecionar arquivos de cada commit
    - Criação e revisão de PRs

- Tipos comuns utilizados em Typescript
  - Arquivo `common-types.ts` dessa pasta contém diversos exemplos
  - A [documentação oficial da linguagem](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) contém descrições, detalhes e casos de uso

## Generics e Utility Types

- Utility Types:
  - Tipos "especiais" do Typescript
  - Utilizados para facilitar a transformação de tipos
  - Arquivos `omit.ts` e `partials.ts` contém exemplos de uso
  - Todos os utility types podem ser consultados [nessa documentação](https://www.typescriptlang.org/docs/handbook/utility-types.html)

- Generics:
  - Permite criação de componentes que funcionam com vários tipos distintos
  - Interessante por possibilitar reusabilidade
  - É melhor do que usar o tipo `any`
    - Com o tipo `any` não é possível saber o que será retornado por uma função, por exemplo
  - Arquivo `generics.ts` contém exemplo de uso
  - Mais detalhes sobre generics podem ser encontrados [nessa documentação](https://www.typescriptlang.org/docs/handbook/2/generics.html)
