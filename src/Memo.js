import React from 'react';
import firebase from './firebase';

const dbRef = firebase.database().ref();

const Memo = () => {

  function updateRealtimeDatabase(){
    var answer = window.confirm('データを登録します。よろしいですか？');
    if(answer === false){
      return;
    }

    var jsonData = localStorage.getItem('temp')
    var staff = document.getElementById('staff').value
    var area = document.getElementById('area').value
    var comment = document.getElementById('comment').value
    var timeStamp = getDateString()

    var objData = JSON.parse(jsonData) 
    objData['担当者'] = staff
    objData['エリア'] = area
    objData['備考'] = comment
    objData['最終更新日時'] = timeStamp

    dbRef.child(objData.id).set(objData);
    localStorage.clear();  

    var newJSON = JSON.stringify(objData)
    console.log(newJSON)

    alert('登録しました')
    window.location.href = '/';
  }

  function getDateString(){
    var date = new Date()
    var format_str = 'YYYY-MM-DD hh:mm:ss';
    format_str = format_str.replace(/YYYY/g, date.getFullYear());
    format_str = format_str.replace(/MM/g, date.getMonth() + 1);
    format_str = format_str.replace(/DD/g, date.getDate());
    format_str = format_str.replace(/hh/g, date.getHours());
    format_str = format_str.replace(/mm/g, date.getMinutes());
    format_str = format_str.replace(/ss/g, date.getSeconds());
    return format_str
  }
  
  
  return(
    <div className='memo-wrapper'>
      <div className='memo'>
        <p>追加記入欄</p>
        <label>担当者</label><br/>
        <select id='staff'>
          <option value='' selected>名前を選択してください</option>
          <option value='社員001'>社員001</option>
          <option value='ゲスト001'>ゲスト001</option>
        </select><br/>
        <label>エリア<br/><input type='text' id='area' /></label><br/>
        <form>
          <label>コメント<br/><textarea id='comment' ></textarea></label><br/>
        </form>
        <button onClick={() => updateRealtimeDatabase()}>登録</button>
      </div>
    </div>
  )
  
}

export default Memo;