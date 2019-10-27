import React from 'react'
import ReactDOM from 'react-dom'
import firebase from './firebase';


const View = () => {
  const dbRef = firebase.database().ref();
  const headerArr = [
    "id", 
    "名前", 
    "年",
    "月",
    "日", 
    "郵便番号", 
    "住所1", 
    "住所2", 
    "居住形態",
    "担当者", 
    "景品", 
    "電話番号", 
    "電話",  
    "会社",
    "会社規模",
    "勤務形態",
    "勤続年数",
    "エリア",  
    "年金不安",
    "年金対策",  
    "運用興味",
    "結婚",
    "備考",
    "最終更新日時"
  ]

  const header = <tr>{headerArr.map(head => <th>{head}</th>)}</tr>
  let recordItems = []
  let entireTable  




  dbRef.on(
    'value', 
    snapshot => {
      var obj = snapshot.val();
      var objKeys = Object.keys(obj);
      console.log(obj[objKeys[0]])

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