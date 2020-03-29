import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAm2vKrELje2IXpHO4ixNEtkE5TJ20D-YI",
    authDomain: "crown-db-3fa19.firebaseapp.com",
    databaseURL: "https://crown-db-3fa19.firebaseio.com",
    projectId: "crown-db-3fa19",
    storageBucket: "crown-db-3fa19.appspot.com",
    messagingSenderId: "196147607599",
    appId: "1:196147607599:web:a52cabd13549928bc22eda",
    measurementId: "G-335ZWTS3TN"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
