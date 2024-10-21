import 'animate.css';

// ここにコードを書きながら確認しましょう！

const title = document.getElementById('title');
const button = document.getElementById('button');
const mocha = document.querySelector('article.card-type--mocha');
const yellow = document.querySelector('article.card-type--yellow');


// 取得したbutton要素を対象の要素に設定

button.addEventListener('click', () => {
  // ボタンがクリックされたら行いたい処理を書く
    // title要素に.animate__hingeクラスを付与
    title.classList.add('animate__hinge');
    

    // 2秒後にtitle要素から.animate__hingeクラスを削除
    setTimeout(() => {
      title.classList.remove('animate__hinge');
      mocha.classList.add('card-animation');
      yellow.classList.add('animate__fadeInUp');
      yellow.style.display = '';
    }, 2000);
});




















// ↑ 練習問題はここまで書いてきたコードに追記する形で実装してください。 ↑
