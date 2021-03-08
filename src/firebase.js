// import * as firebase from 'firebase/app' using below fixed the errors
import { firebase } from '@firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import "firebase/analytics";


// firebase init - 
const firebaseConfig = {
  apiKey: "AIzaSyCC3br0GYm9qEBFkLZ1GPZWjGM8n__Xz6M",
  authDomain: "admin-65002.firebaseapp.com",
  projectId: "admin-65002",
  storageBucket: "admin-65002.appspot.com",
  messagingSenderId: "691310647774",
  appId: "1:691310647774:web:60a1081c859cdb6ad5a54f"

};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const admissionsCollection = db.collection('admissions')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  admissionsCollection
}