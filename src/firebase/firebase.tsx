import * as firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyDWl68B12VtBQ68kq_O70f3vJQZxvGgZww",
  authDomain: "sharkwaveproject.firebaseapp.com",
  databaseURL: "https://sharkwaveproject.firebaseio.com",
  projectId: "sharkwaveproject",
  storageBucket: "sharkwaveproject.appspot.com",
  messagingSenderId: "334124216680"
};
var fire = firebase.initializeApp(config);
export default fire;