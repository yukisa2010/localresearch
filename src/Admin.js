import React from 'react'
import firebase from './firebase'

const dbRef = firebase.database().ref();
dbRef.on('value', snapshot => {
  const admin = document.getElementById('admin')

  if (snapshot.val() !== null){
    admin.innerText = JSON.stringify(snapshot.val())
    return

  } else {
    return
  }
});


const Admin = () => (
  <div id='admin'></div>
)


export default Admin;