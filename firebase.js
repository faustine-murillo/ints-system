import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
      apiKey: "AIzaSyA2OkyJtMLYua5UhSAUUzHhsxlwq35mN6A",
      authDomain: "fmqph-system.firebaseapp.com",
      databaseURL: "https://fmqph-system.firebaseio.com",
      projectId: "fmqph-system",
      storageBucket: "fmqph-system.appspot.com",
      messagingSenderId: "959875792901"
    };
firebase.initializeApp(config);
export default firebase;