import React from 'react'
import firebase from './firebase'

const dbRef = firebase.database().ref();

dbRef.on(
  'value', 
  snapshot => {
  //firebaseから取得した値をJSONにする
  const obj = JSON.stringify(snapshot.val());
  console.log(obj)
  //JSONを取得できるようにBLOBに加工する
  const jsonfile = new Blob([JSON.stringify(obj, null, '  ')], {type: 'application/json'});
  console.log(jsonfile)
  //JSONをダウンロードできるURLを生成
  const url = URL.createObjectURL(jsonfile)
  console.log(url)

  //URLをaタグへと紐づける
  document.getElementsByTagName('a')[0].href = url

  const reader = new FileReader();
  reader.onload = function() {
    console.log(reader.result, 'reader')
  }
  reader.readAsText(jsonfile)

  }
  )

const Admin = () => (
  <div>
    <a id='download'>Download JSON</a>
  </div>
)


export default Admin;