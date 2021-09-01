import firebase from "firebase";
import "firebase/auth";


const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyANIl5DNF-CNzf7AD64ykJsadztWx5Y5ig",
    authDomain: "my-exit-exam-react.firebaseapp.com",
    projectId: "my-exit-exam-react",
    storageBucket: "my-exit-exam-react.appspot.com",
    messagingSenderId: "281502512739",
    appId: "1:281502512739:web:fd28a26cc477f092176a56",
    measurementId: "G-4JBB0DXSQH"
  });


  var db = firebaseConfig.firestore();

  export { db };

  export default firebase;