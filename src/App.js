import React from 'react';
import TableComponent from "./TableComponent.js";
import Questions from "./Questions.js";
import FormInfo from "./FormInfo.js";
import Attention from "./Attention";
import { Link } from 'react-router-dom';


import './App.css';

//バリデーションチェック入れたい

function getItems() {
  var uniquekey = getRandomId()
  var gift = getSelected('gift')
  var a_1 = getSelected('a1')
  var a_2 = getSelected('a2')
  var a_3 = getSelected('a3')
  var a_4 = getSelected('a4')
  var a_5 = getSelected('a5')
  var a_6 = getSelected('a6')
  var a_7 = getSelected('a7')
  var a_8 = getSelected('a8')
  var name = getValue('名前')
  var year = getValue('year')
  var month = getValue('month')
  var day = getValue('day')
  var zip = getValue('zip')
  var address1 = getValue('address1')
  var address2 = getValue('address2')
  var telnumber = getValue('telnumber')
  var tel = getSelected('tel')
  var company = getValue('company')
  var dataObj = {
    id: uniquekey,
    gift: gift,
    年金不安: a_1,
    年金対策: a_2,
    運用興味: a_3,
    結婚: a_4,
    勤務形態: a_5,
    勤続年数: a_6,
    会社規模: a_7,
    居住形態: a_8,
    名前: name,
    年: year,
    月: month,
    日: day,
    郵便番号: zip,
    住所1: address1,
    住所2: address2,
    電話:tel,
    電場番号:telnumber,
    会社: company 
  }
  var dataJSON = JSON.stringify(dataObj)

  localStorage.setItem('temp', dataJSON)
}

//input type='text'
function getValue(item) {
  var domItem = document.getElementsByName(item)
  return domItem[0].value
}

//input type='radio'
function getSelected(item){
  let radio = document.getElementsByName(item)
  for (let i=0;i<radio.length;i++){

    if(radio[i].checked===true){
      console.log(radio[i].value) 
      return radio[i].value
    }
  }
}

//unique key
function getRandomId(){
  var l = 8;
  var c = 'abcdefghijklmnopqrstuvwqyz0123456789';
  var cl = c.length;
  var r = '';
  for (var i=0;i < l;i++){
    r += c[Math.floor(Math.random() * cl)]
  }
  return r
}

const App = () => (
    <div className="App">
      <h1>アンケートでプレゼント</h1>
      <TableComponent />
      <Questions />
      <h2>発送情報</h2>
      <FormInfo />
      <Attention />
      <Link to='/thanks' >
        <button id='registerbtn' onClick={()=>getItems()}>
          登録
        </button>
      </Link>
    </div>
);


export default App;
