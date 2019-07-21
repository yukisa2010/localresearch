import React from 'react'


const Memo = () => (
  <div className='memo-wrapper'>
    <div className='memo'>
      <p>追加記入欄</p>
      <label>担当者</label><br/>
      <select>
        <option selected>名前を選択してください</option>
        <option>社員001</option>
        <option>ゲスト001</option>
      </select><br/>
      <label>エリア<br/><input type='text' id='area' /></label><br/>
      <label>コメント<br/><input type='text' id='comment' /></label><br/>
      <button>登録</button>
    </div>
  </div>
)

export default Memo;