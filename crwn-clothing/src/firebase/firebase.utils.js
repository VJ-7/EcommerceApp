import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAqxBOfHu-tgQ_fpSeQP3nog7lH49zOtao",
  authDomain: "crwn-db-7fb9d.firebaseapp.com",
  databaseURL: "https://crwn-db-7fb9d.firebaseio.com",
  projectId: "crwn-db-7fb9d",
  storageBucket: "",
  messagingSenderId: "737587576648",
  appId: "1:737587576648:web:50019134875004f3b8fd7d",
  measurementId: "G-CZHRW8PVSD"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
