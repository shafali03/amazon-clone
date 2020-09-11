import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDxbLRT43oNBF5cI2o_d_7BrQASjFxDpQ8",
  authDomain: "clone-84608.firebaseapp.com",
  databaseURL: "https://clone-84608.firebaseio.com",
  projectId: "clone-84608",
  storageBucket: "clone-84608.appspot.com",
  messagingSenderId: "410066114108",
  appId: "1:410066114108:web:8d71714d849e5cf6c59539",
  measurementId: "G-NRT74X0HMY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }

