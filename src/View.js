import React from 'react'
import ReactDOM from 'react-dom'
import firebase from './firebase';


const View = () => {
  const dbRef = firebase.database().ref();
  const headerArr = ["id", "名前", "年","月", "日", "郵便番号", "住所1", "住所2", "備考",   "担当者", "景品", "最終更新日時","電話",  "電話番号", "会社","エリア"]
  const header = <tr>{headerArr.map(head => <th>{head}</th>)}</tr>
  let recordItems = []
  let entireTable  




  dbRef.on(
    'value', 
    snapshot => {
      var obj = snapshot.val();
      var objKeys = Object.keys(obj);

      //レコード単位
      for(var i=0;i<objKeys.length;i++){
        var id = objKeys[i]
        var record = obj[id];
        var tdItems = [];

        //フィールド単位
        for(var j=0;j<headerArr.length;j++){  
          if(headerArr[j] === 'id'){
            tdItems.push((i+1).toString())
          }else{
            tdItems.push(record[headerArr[j]])
          }
        }
        recordItems.push(<tr key={i}>{tdItems.map(tdItem => (<td>{tdItem}</td>))}</tr>)        
      }
      entireTable = (
        <table>
          <thead>
            {header}
          </thead>
          <tbody>
            {recordItems}
          </tbody>
        </table>
      )


      ReactDOM.render(entireTable, document.getElementById('data'))

      // setData(recordItem)

    }

  )

  return (
    <div>
      <p>View</p>
      <div id='data'>
      </div>
    </div>
  )
}


export default View;