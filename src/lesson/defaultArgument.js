// ここにコードを書きながら確認しましょう！


// デフォルト引数に'Hello'を指定
function argFn(arg = 'Hello') {
  console.log(arg);
}

// 引数を渡していない
argFn();


// 練習問題
// 問題 1
// 引数 = デフォルト値　「= 5」がデフォルトの設定
function discountRateCalc(price, rate = 5) {
  return price * (1 - rate * 0.01);
}

console.log(discountRateCalc(4500,5));
console.log(discountRateCalc(6000,20));