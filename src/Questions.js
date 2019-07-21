import React from "react";

const Questions = props => {
  const questionItem = [
    "年金に不安はありますか？",
    "年金対策はしていますか？",
    "資産運用に興味はありますか？",
    "結婚はされていますか？",
    "現在の勤務形態は？",
    "現在の勤続年数は？",
    "勤務先企業の規模は？",
    "現在の居住形態は？"
  ];

  const group = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8"];

  return (
    <table className="questions">
      <tr>
        <td>
          <p>{questionItem[0]}</p>
          <div className='answers lowheight'>
            <label><input type="radio" name={group[0]} value='はい' />はい</label><br/>
            <label><input type="radio" name={group[0]} value='いいえ' />いいえ</label>
          </div>
        </td>
        <td>
          <p>{questionItem[1]}</p>
          <div className='answers lowheight'>
            <label><input type="radio" name={group[1]}  value='はい'/>はい</label><br/>
            <label><input type="radio" name={group[1]}  value='いいえ'/>いいえ</label>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <p>{questionItem[2]}</p>
          <div className='answers lowheight'>
            <label><input type="radio" name={group[2]}  value='はい'/>はい</label><br/>
            <label><input type="radio" name={group[2]}  value='いいえ'/>いいえ</label>
          </div>
        </td>
        <td>
          <p>{questionItem[3]}</p>
          <div className='answers lowheight'>
            <label><input type="radio" name={group[3]}  value='はい'/>はい</label><br/>
            <label><input type="radio" name={group[3]}  value='いいえ'/>いいえ</label>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <p>{questionItem[4]}</p>
          <div className='answers'>
            <label><input type="radio" name={group[4]}  value='経営者・役員'/>経営者・役員</label><br/>
            <label><input type="radio" name={group[4]}  value='正社員'/>正社員</label><br/>
            <label><input type="radio" name={group[4]}  value='契約・派遣'/>契約社員・派遣</label><br/>          
            <label><input type="radio" name={group[4]}  value='その他'/>アルバイト、フリーター、無職</label>
          </div>
        </td>
        <td>
          <p>{questionItem[5]}</p>
          <div className='answers'>
            <label><input type="radio" name={group[5]}  value='1年未満'/>1年未満</label><br/>
            <label><input type="radio" name={group[5]}  value='3年未満'/>3年未満</label><br/>
            <label><input type="radio" name={group[5]}  value='10年未満'/>10年未満</label><br/>
            <label><input type="radio" name={group[5]}  value='10年以上'/>10年以上</label><br/>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <p>{questionItem[6]}</p>
          <div className='answers'>
            <label><input type="radio" name={group[6]}  value='上場・準ずる'/>上場企業、準ずる企業</label><br/>
            <label><input type="radio" name={group[6]}  value='中小'/>中小企業</label><br/>
            <label><input type="radio" name={group[6]}  value='公務員'/>国営・政府関係</label><br/>
            <label><input type="radio" name={group[6]}  value='外資系'/>外資系企業</label><br/>
          </div>
        </td>
        <td>
          <p>{questionItem[7]}</p>
          <div className='answers'>
            <label><input type="radio" name={group[7]}  value='家族所有'/>家族所有</label><br/>
            <label><input type="radio" name={group[7]}  value='自己所有'/>自己所有</label><br/>
            <label><input type="radio" name={group[7]}  value='賃貸'/>賃貸</label><br/>
            <label><input type="radio" name={group[7]}  value='社宅・寮'/>社宅・寮</label>
          </div>
        </td>
      </tr>
    </table>
  );
};

export default Questions;
