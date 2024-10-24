// ここにコードを書きながら確認しましょう！





// 練習問題
// 問題 1
// const returnPromise = () => {
//   return new Promise((_resolve, reject) => {
//     setTimeout(() => {
//       reject('エラーが発生しました');
//     }, 3000);
//   });
// };

// returnPromise()
//   .catch((err) => console.log(err));

// console.log(returnPromise());


const returnPromise = () => {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve('エラーが発生しました');
    }, 3000);
  });
};

returnPromise()
  .then((err) => console.log(err));