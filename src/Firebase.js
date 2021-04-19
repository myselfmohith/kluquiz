import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyCHmggjv-DMVenKJr4qIWy27IV0vnYpia0",
    authDomain: "kluexams.firebaseapp.com",
    projectId: "kluexams",
    storageBucket: "kluexams.appspot.com",
    messagingSenderId: "256066812797",
    appId: "1:256066812797:web:85bf215e814142a971ea14"
};
firebase.initializeApp(firebaseConfig);


export const Auth = firebase.auth();
export const DB = firebase.firestore();

export const signIn = () => {
    Auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
}

export const signOut = () => {
    Auth.signOut()
}