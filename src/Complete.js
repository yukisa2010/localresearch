import React from 'react';

const Complete = () => {

  function moveToTop(){
    setTimeout(
      function(){
        window.location.href="/";
        },1000
      );  
  }

  return(
    <div>
      <p onLoad={() => moveToTop()}>
        データの登録が完了しました。<br/>
        このページは1秒で終了します。
      </p>
    </div>
  )
  
}


export default Complete;