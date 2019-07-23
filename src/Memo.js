import React from 'react'
import firebase from './firebase'
import {Link} from 'react-router-dom'

const dbRef = firebase.database().ref();

const Memo = () => {

  function getlocalStorage(){

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

    dbRef.child(objData.id).set(objData)

    var newJSON = JSON.stringify(objData)
    console.log(newJSON)
  }

  function getDateString(){
    var date = new Date()
    var format_str = 'YYYY-MM-DD hh:mm:ss';
    format_str = format_str.replace(/YYYY/g, date.getFullYear());
    format_str = format_str.replace(/MM/g, date.getMonth());
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
        <button onClick={() => getlocalStorage()}>登録</button>
        <Link to='/' style={{ textDecoration: 'none'}}><button>JSONダウンロード</button></Link>
      </div>
    </div>
  )
  
}

export default Memo;