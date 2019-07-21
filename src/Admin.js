import React from 'react'
import firebase from './firebase'

const dbRef = firebase.database().ref();

dbRef.on(
  'value', 
  snapshot => {
  //firebaseから取得した値をJSONにする
  const obj = JSON.stringify(snapshot.val());
  //JSONを取得できるようにBLOBに加工する
  const jsonfile = new Blob([JSON.stringify(obj, null, '  ')], {type: 'application/json'});
  //JSONをダウンロードできるURLを生成
  const url = URL.createObjectURL(jsonfile)
  //URLをaタグへと紐づける
  document.getElementById('download').href = url
  }
  )

const Admin = () => (
  <div>
    <a id='download'>Download JSON</a>
  </div>
)


export default Admin;