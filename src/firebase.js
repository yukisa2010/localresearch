import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBIFSTzzO-ARl4t0YlDpmpuYBc0paDPkoE",
  authDomain: "ankate-2f78a.firebaseapp.com",
  databaseURL: "https://ankate-2f78a.firebaseio.com",
  projectId: "ankate-2f78a",
  storageBucket: "ankate-2f78a.appspot.com",
  messagingSenderId: "295377181400",
  appId: "1:295377181400:web:3d3c1e52212d162d"
};

firebase.initializeApp(config)
// const dbRef = firebase.database().ref().child('nest');

export default firebase