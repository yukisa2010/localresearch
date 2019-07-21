import React from 'react';
import TableComponent from "./TableComponent.js";
import Questions from "./Questions.js";
import FormInfo from "./FormInfo.js";
import Attention from "./Attention";
import { Link } from 'react-router-dom';


import './App.css';
import firebase from './firebase'

const dbRef = firebase.database().ref();
console.log(dbRef);

function getItems() {
  var selectedItem = getSelected('tel')
  console.log(selectedItem)
}

function getSelected(item){
  //電話番号
  let tel = document.getElementsByName(item)
  for (let i=0;i<tel.length;i++){

    if(tel[i].checked===true){
      console.log(tel[i].value) 

      return tel[i].value
    }
  }

    
}


const App = () => (
    <div className="App">
      <h1>アンケートでプレゼント</h1>
      <TableComponent />
      <Questions />
      <h2>発送情報</h2>
      <FormInfo />
      <Attention />
      <Link to='/thanks' ><button id='registerbtn' onClick={()=>getItems()}>登録</button></Link>
    </div>
);


export default App;
