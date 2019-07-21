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
  let tel = document.getElementsByName('tel')
  for (let i=0;i<tel.length;i++){
    if(tel[i].checked===true){
      console.log(tel[i].value)
    }
  }
}


const App = () => (
    <div className="App">
      <img src="../img/980px_01.jpg" alt="howto" width="100%" />
      <TableComponent />
      <h2>アンケートでプレゼント</h2>
      <Questions />
      <h2>発送情報</h2>
      <FormInfo />
      <Attention />
      <Link to='/thanks' ><button id='registerbtn' onClick={()=>getItems()}>登録</button></Link>
    </div>
);


export default App;
