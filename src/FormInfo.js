import React from "react";

const FormInfo = () => {
  let years = [];
  let months = [];
  let days = [];

  years.push(<option selected>--</option>);
  for (let i = 1950; i < 2020; i++) {
    years.push(<option>{i}</option>);
  }
  months.push(<option selected>--</option>);
  for (let i = 1; i <= 12; i++) {
    months.push(<option>{i}</option>);
  }
  days.push(<option selected>--</option>);
  for (let i = 1; i <= 31; i++) {
    days.push(<option>{i}</option>);
  }

  function zipResponse() {
    // クエリにinputされたzip_codeを使う
    const zipCode = document.getElementById('zip').value
    if(zipCode.length !== 7) {
      return
    }
    fetch('https://api.zipaddress.net/?zipcode=' + zipCode, {
      mode: 'cors'
    })
    .then(res => {
      return res.json();
    })
    .then(json => {
      console.log(json.data.fullAddress);
      document.getElementById('address').value = json.data.fullAddress
    })
  }
  


  return (
    <div className="forminfo">
      <div className="person-name">
        <label>お名前<input type="text" placeholder='お名前を入力してください' /></label>
      </div><br/>
      <div className="birth">
        <label>お誕生日 </label>
          <div className="birthday">
            <select>{years}</select>
            <span>年</span>
            <select>{months}</select>
            <span>月</span>
            <select>{days}</select>
            <span>日</span><br/>     
          </div>
      </div>
      <div className="post-number">
        <label>郵便番号</label>
        <input type="text" placeholder='1030005' id='zip' onChange={() => zipResponse()} />
      </div><br/>
      <div className="address">
        <label>住所</label>
        <input type="text" placeholder='住所' id='address'/>
        <label>郵便番号入力で自動入力されます</label>
        <input type="text" placeholder='番地・ビル名'/>
        <label>マンション名は必ず記入してください。</label>
      </div><br/>
      <div className="tel-number">
        <label>電話番号（ハイフンなし）</label>
        <input type="text" placeholder='09000000000'/>
      </div><br/>
      <div className="phone">        
        <label><input type="radio" name="tel" value="自宅" />自宅</label>
        <label><input type="radio" name="tel" value="携帯" />携帯</label>
      </div>
      <div className="company">
        <label>勤務先名<input type="text" placeholder='勤務先を入力してください'/></label>        
      </div>
    </div>
  );
};

export default FormInfo;
