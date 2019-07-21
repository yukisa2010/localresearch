import React from 'react'

const Memo = () => {

  function getlocalStorage(){

    var jsonData = localStorage.getItem('temp')
    var staff = document.getElementById('staff').value
    var area = document.getElementById('area').value
    var comment = document.getElementById('comment').value

    var objData = JSON.parse(jsonData)
    objData.staff = staff
    objData.area = area
    objData.comment = comment

    var newJSON = JSON.stringify(objData)
    console.log(newJSON)
  }
  
  return(
    <div className='memo-wrapper'>
      <div className='memo'>
        <p>追加記入欄</p>
        <label>担当者</label><br/>
        <select id='staff'>
          <option selected>名前を選択してください</option>
          <option>社員001</option>
          <option>ゲスト001</option>
        </select><br/>
        <label>エリア<br/><input type='text' id='area' /></label><br/>
        <form>
          <label>コメント<br/><textarea id='comment' ></textarea></label><br/>
        </form>
        <button onClick={() => getlocalStorage()}>登録</button>
      </div>
    </div>
  )
  
}

export default Memo;