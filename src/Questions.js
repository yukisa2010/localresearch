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
            <label><input type="radio" name={group[0]} />はい</label><br/>
            <label><input type="radio" name={group[0]} />いいえ</label>
          </div>
        </td>
        <td>
          <p>{questionItem[1]}</p>
          <div className='answers lowheight'>
            <label><input type="radio" name={group[1]} />はい</label><br/>
            <label><input type="radio" name={group[1]} />いいえ</label>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <p>{questionItem[2]}</p>
          <div className='answers lowheight'>
            <label><input type="radio" name={group[2]} />はい</label><br/>
            <label><input type="radio" name={group[2]} />いいえ</label>
          </div>
        </td>
        <td>
          <p>{questionItem[3]}</p>
          <div className='answers lowheight'>
            <label><input type="radio" name={group[3]} />はい</label><br/>
            <label><input type="radio" name={group[3]} />いいえ</label>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <p>{questionItem[4]}</p>
          <div className='answers'>
            <label><input type="radio" name={group[4]} />経営者・役員</label><br/>
            <label><input type="radio" name={group[4]} />正社員</label><br/>
            <label><input type="radio" name={group[4]} />契約社員・派遣</label><br/>          
            <label><input type="radio" name={group[4]} />アルバイト、フリーター、無職</label>
          </div>
        </td>
        <td>
          <p>{questionItem[5]}</p>
          <div className='answers'>
            <label><input type="radio" name={group[5]} />1年未満</label><br/>
            <label><input type="radio" name={group[5]} />3年未満</label><br/>
            <label><input type="radio" name={group[5]} />10年未満</label><br/>
            <label><input type="radio" name={group[5]} />10年以上</label><br/>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <p>{questionItem[6]}</p>
          <div className='answers'>
            <label><input type="radio" name={group[6]} />上場企業、準ずる企業</label><br/>
            <label><input type="radio" name={group[6]} />中小企業</label><br/>
            <label><input type="radio" name={group[6]} />国営・政府関係</label><br/>
            <label><input type="radio" name={group[6]} />外資系企業</label><br/>
          </div>
        </td>
        <td>
          <p>{questionItem[7]}</p>
          <div className='answers'>
            <label><input type="radio" name={group[7]} />家族所有</label><br/>
            <label><input type="radio" name={group[7]} />自己所有</label><br/>
            <label><input type="radio" name={group[7]} />賃貸</label><br/>
            <label><input type="radio" name={group[7]} />社宅・寮</label>
          </div>
        </td>
      </tr>
    </table>
  );
};

export default Questions;
