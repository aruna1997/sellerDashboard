import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyDlsuxQn91TzKw1VL83rJb23uGqi2IcaWc",
    authDomain: "sellerapp-9a25f.firebaseapp.com",
    databaseURL: "https://sellerapp-9a25f.firebaseio.com",
    projectId: "sellerapp-9a25f",
    storageBucket: "sellerapp-9a25f.appspot.com",
    messagingSenderId: "931983079101"
  };
 export const firebaseApp=firebase.initializeApp(config);