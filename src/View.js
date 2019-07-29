import React from 'react'
import firebase from './firebase';



const View = () => {
  const dbRef = firebase.database().ref();

  dbRef.on(
    'value', 
    snapshot => (
      document.getElementById('data').textContent = JSON.stringify(snapshot.val())
    )
  );


  return (
    <div>
      <p>View</p>
      <div id='data'></div>
    </div>
  )
}


export default View;