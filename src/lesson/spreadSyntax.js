// ここにコードを書きながら確認しましょう！




const numbers = [1, 2, 3, 4, 5];

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(...numbers); // 1 2 3 4 5







// 練習問題
// 問題 1
const packageManager = ['npm', 'yarn', 'pnpm'];

function arrayFn(array) {
  const framework = ['Vue', 'React', 'Svelte'];
  return [...array,...framework];
}

console.log(arrayFn(packageManager));









// 問題 2
const objectA = {
  language: 'JavaScript',
  framework: 'Vue',
  version: 2,
};

const objectNEW = { ...objectA, version: 3,routingLibrary: 'Vue Router' };

console.log(objectNEW);