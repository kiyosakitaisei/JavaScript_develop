// 必要な関数をモジュールからインポートする
import axios from 'axios';
import { createErrorElement, createElements } from './createElement.js';


window.addEventListener('DOMContentLoaded', () => {

  // document.getElementById()：引数に渡したidを持つ要素を取得することができる
  const characterElement = document.getElementById('list');

  // ここに処理を書いていく
  // 1. すべてのポケモンを取得するためのリクエスト
  // axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151').then(response => {
  // console.log(response)
  // console.log(response.data.results[0].name);
  // console.log(response.data.results[0].url);
  // console.log(response.data.species.url);




  // 1. すべてのポケモンを取得するためのリクエスト
  // リクエスト①
  axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151').then(({ data }) => {
  console.log(data);


    // forEach
    const array = data.results; // 配列の中に151個データを出したい
    console.log(array);

    array.forEach(element => {
    

    // 2. ポケモンの詳細情報を取得するためのリクエスト
    // imgRequestUrlにそのURLを格納
    // const imgRequestUrl = data.results[0].url;


    // 151匹のデータをimgRequestUrlへ
    const imgRequestUrl = element.url;
    // リクエスト②
    axios.get(imgRequestUrl).then(({ data }) => {
      const imgPath = data.sprites.other['official-artwork'].front_default;
      // １番目のポケモンの詳細情報がconsoleに表示される
      console.log(imgPath);
    

    // 3. ポケモン名の日本語訳を取得するためのリクエスト
    // jaRequestUrlにそのURLを格納
    const jaRequestUrl = data.species.url;
    // リクエスト③
    // ポケモンの種に関する情報を取得し、そのデータを使って処理を行うためのもの
    axios.get(jaRequestUrl).then(({ data }) => {
    // ポケモン名の日本語訳
    // characterName：ポケモンの名前が格納される
    const characterName = data.names[0].name;


    // createElementメソッドでHTML要素を追加する
    // const 変数名 = document.createElement('タグ');
    const new_li = document.createElement('li');
    // classの付与
    new_li.ClassName = 'list-item';
    //取得したポケモンの情報をもとに表示するHTML要素を作成 <li>の中に入ってない
    let imgElement = 
    `<div class="character">
      <img src="${imgPath}" width="475" height="475" alt="" class="character__img">
    </div>
    <p class="character__name">${characterName}</p>`;
    // 入れたい変数.innerHTML = 入れる変数;
    // HTML要素の中身を変えるinnerHTML
    new_li.innerHTML = imgElement;
    //  ul変数名.appendChild(li変数名);
    // <ul>の中に入れる
    characterElement.appendChild(new_li);

    // リクエスト③のエラー
    }).catch(() => {
      // リクエストに失敗した場合はエラーメッセージを表示
      formElement.after(createErrorElement('エラーが発生しました。時間をおいて再度お試しください。'));
    });

    // リクエスト②のエラー
    }).catch(() => {
      // リクエストに失敗した場合はエラーメッセージを表示
    formElement.after(createErrorElement('エラーが発生しました。時間をおいて再度お試しください。'));
    });

  });// forEach


  }).catch(error => {
    switch (error.response && error.response.status) {
      case 404:
        formElement.after(createErrorElement(error.message));
        break;
      default:
        formElement.after(createErrorElement('エラーが発生しました。時間をおいて再度お試しください。'));
        break;
    }
  });
});