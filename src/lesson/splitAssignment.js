// ここにコードを書きながら確認しましょう！












// 練習問題
// 問題 1
function arrayFn(arg) {
  return ['jQuery', 'Vue', arg];
}
const [lang, soft, assignment] = arrayFn(1);

console.log(assignment);



// 問題 2
// オブジェクトの中のオブジェクトのキーに{}で分割代入
function objectFn({ name }) {
  console.log(name);
}

const argObject = {
  name: 'Gizumo',
  place: 'Shibuya',
};

objectFn(argObject);
