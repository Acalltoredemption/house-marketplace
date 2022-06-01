import {getFirestore} from 'firebase/firestore'
import {initializeApp} from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyAnXOhSsVM4sy-ZzyQ1IF2zw_3sRDck94Y",
  authDomain: "house-marketplace-73b3b.firebaseapp.com",
  projectId: "house-marketplace-73b3b",
  storageBucket: "house-marketplace-73b3b.appspot.com",
  messagingSenderId: "71028694936",
  appId: "1:71028694936:web:5ecd1e2bd63a7213e815ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()