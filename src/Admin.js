import React from 'react'
import firebase from './firebase'

const dbRef = firebase.database().ref();
dbRef.on('value', snapshot => {
  const admin = document.getElementById('admin')
  admin.innerHTML = JSON.stringify(snapshot.val())
});


const Admin = () => (
  <div id='admin'></div>
)


export default Admin;