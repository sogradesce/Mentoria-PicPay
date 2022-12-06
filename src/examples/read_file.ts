// Para rodar só esse arquivo: npx ts-node src/examples/read_file.ts
import { readFileSync } from 'fs';
import { join } from 'path';

function syncReadFile(filename: string) {
  const result = readFileSync(join(__dirname, filename), 'utf-8');

  return result;
}

let dadosDoArquivo = syncReadFile('./input.txt');
console.log(dadosDoArquivo)