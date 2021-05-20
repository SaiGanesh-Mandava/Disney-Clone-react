import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBV9P7ygAPP5Wfxh4pDKih71hOe9ZRwKGE",
    authDomain: "disney-clone-51fb3.firebaseapp.com",
    databaseURL: "https://disney-clone-51fb3-default-rtdb.firebaseio.com",
    projectId: "disney-clone-51fb3",
    storageBucket: "disney-clone-51fb3.appspot.com",
    messagingSenderId: "429529955012",
    appId: "1:429529955012:web:1b9738099140a224a1a791",
    measurementId: "G-KY6DXK33ZP"
  };;

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
