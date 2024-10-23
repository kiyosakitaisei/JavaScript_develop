// ここにコードを書きながら確認しましょう！









// 練習問題
// 問題 1
const array = [
  {
    tag: 'p',
    className: 'hoge',
  },
  {
    tag: 'div',
    className: 'fuga',
  },
  {
    tag: 'h1',
    className: 'piyo',
  },
];



// const newArray = array.map(val => ({ ...val, className: 'c-' + val.className}));

const newArray = array.map(val => {
  console.log(val);
  return{ ...val, className: 'c-' + val.className};
});

console.log(newArray);

