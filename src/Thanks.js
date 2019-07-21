import React from 'react'
import { Link } from 'react-router-dom';

const Thanks = () => (
  <div class='thanks'>
    <p>Thanks!</p>
    <p>アンケートに回答頂きありがとうございました。</p>
    <Link to='/memo' style={{ textDecoration: 'none' }}><button id='addbtn'>追加入力</button></Link><br/>
    <Link to='/'  style={{ textDecoration: 'none' }}><button id='backbtn'>戻る</button></Link><br/>
  </div>
)

export default Thanks;