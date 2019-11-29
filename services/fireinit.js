import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDeEZnbwSbbNRVHa18LoY0Xa-0CCai9_vU",
  authDomain: "shop-review-01.firebaseapp.com",
  databaseURL: "https://shop-review-01.firebaseio.com",
  projectId: "shop-review-01",
  storageBucket: "shop-review-01.appspot.com",
  messagingSenderId: "814236651550",  
  appId: "1:814236651550:web:3164bf432d0ba6b26a5e0f"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : ''

export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export const DB = firebase.database()
export const StoreDB = firebase.firestore()
export const Storage = firebase.storage()
export default firebase