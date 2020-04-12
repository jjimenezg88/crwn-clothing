import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAM9hsYwIKjp08WxPtJgX6OR_9YxFACZJQ",
    authDomain: "crown-clothing-db-ef55b.firebaseapp.com",
    databaseURL: "https://crown-clothing-db-ef55b.firebaseio.com",
    projectId: "crown-clothing-db-ef55b",
    storageBucket: "crown-clothing-db-ef55b.appspot.com",
    messagingSenderId: "830196014868",
    appId: "1:830196014868:web:9f75f03cc74044aa63ec01",
    measurementId: "G-ZNTF9WMBW3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
