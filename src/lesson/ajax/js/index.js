import axios from 'axios';
import { createErrorElement, createElements } from './createElement.js';





// 対象の要素.addEventListener('イベントの種類', イベント発生後に実行する関数, オプション);
// DOMContentLoaded：HTMLのパース（解析）が完了したら実行される
window.addEventListener('DOMContentLoaded', () => {

  // formタグを取得（プロパティアクセス）
  const formElement = document.forms['search-form'];

// 対象の要素.addEventListener('イベントの種類', イベント発生後に実行する関数, オプション);
// submit：フォームが送信されるときに発生。ユーザーが送信ボタンをクリック、Enterキーを押すと発火。
  formElement.addEventListener('submit', (event) => {

    // formのデフォルトの動作をキャンセル
    // イベントが発生した際にそのデフォルトの動作をキャンセルする重要なメソッド
    // ユーザー体験の向上: ユーザーがフォームを送信した後にページがリロードされないことで、よりスムーズな体験が提供できます。
    event.preventDefault();

    // document.getElementById()：引数に渡したidを持つ要素を取得することができる
    const characterElement = document.getElementById('character');
    const messageElement = document.getElementById('error-message');

    // ポケモンの番号
    // formElement.elements['id'] ：formElementオブジェクトのelementsプロパティにアクセスし、さらにその中から名前がidの要素を取得する部分
    // オブジェクトのプロパティにアクセスし、その値を変数に格納する一般的な方法
    const pictureBookId = formElement.elements['id'].value;


      // 表示の初期化
      // ポケモンの表示が１つになる記述
      // messageElement !== null:：messageElementに何か入っていたら実行。
      // remove()：要素を親ノードから取り除くことで、ページからその要素を削除。
  if (messageElement !== null) messageElement.remove();
  // while：指定された条件がtrueである限り、ループ内のコードを繰り返し実行する制御文。
  while (characterElement.lastChild) {
    // removeChild()：指定した子要素を親要素から削除するためのメソッド。親要素に対して呼び出し、そのメソッドに削除したい子要素を引数として渡します。
    characterElement.removeChild(characterElement.lastChild);
  }

  // 特定のポケモンの情報をAPIから取得
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pictureBookId}`).then(({ data }) => {
  

    // ポケモンの画像url
    // ポケモンの公式アートワークのURLを取得するためのもの
    // 〜の中の〜の中の〜「front_default」
  const imgPath = data.sprites.other['official-artwork'].front_default;
  // 日本語訳のリクエスト先url
  // ポケモンの種に関する詳細情報を取得するためのURLを抽出するためのもの
  // jaRequestUrlにそのURLを格納
  const jaRequestUrl = data.species.url;
  // ポケモンの種に関する情報を取得し、そのデータを使って処理を行うためのもの
  axios.get(jaRequestUrl).then(({ data }) => {
  // ポケモン名の日本語訳
  // characterName：ポケモンの名前が格納される
  const characterName = data.names[0].name;
    //取得したポケモンの情報をもとに表示するHTML要素を作成
  const imgElement = `<img src="${imgPath}" width="475" height="475" alt="" class="character__img">`;
  const nameElement = `<p class="character__name">${characterName}</p>`;

  // ポケモンの画像と名前を組み合わせたHTMLを生成
  const fragment = createElements(imgElement + nameElement);
    // 作成したHTML要素をDOMに反映
    // appendChild：指定した要素を親要素の最後に追加するメソッド
    characterElement.appendChild(fragment);

  }).catch(() => {
      // リクエストに失敗した場合はエラーメッセージを表示
  formElement.after(createErrorElement('エラーが発生しました。時間をおいて再度お試しください。'));
  });

    }).catch(error => {
    // API通信が失敗した時の処理

    //const fruit = "apple";
    
    // switch (fruit) {
    //   case "banana":
    //     console.log("バナナです");
    //     break;
    //   case "apple":
    //   case "orange":
    //     console.log("リンゴまたはオレンジです");
    //     break;
    //   default:
    //     console.log("他の果物です");
    // }

      switch (error.response && error.response.status) {
    case 404:
      formElement.after(createErrorElement(error.message));
      break;
    default:
      formElement.after(createErrorElement('エラーが発生しました。時間をおいて再度お試しください。'));
      break;
  }
});

    console.log('検索ボタンがクリックされました！');
  });
});

