import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyD1RlaJnmx8iBdM9AgkDDjdpcfeUugY8lE",
  authDomain: "willy-92667.firebaseapp.com",
  projectId: "willy-92667",
  storageBucket: "willy-92667.appspot.com",
  messagingSenderId: "677103466309",
  appId: "1:677103466309:web:f5ee09bce62d9da90d702c",
  measurementId: "G-1J210WM4M8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
