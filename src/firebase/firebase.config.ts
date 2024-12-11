// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAwcF5UHXTbRk5yqe2cZu_Se7yw5SrgbLU',
  authDomain: 'escape-room-c7fc1.firebaseapp.com',
  projectId: 'escape-room-c7fc1',
  storageBucket: 'escape-room-c7fc1.firebasestorage.app',
  messagingSenderId: '955368455341',
  appId: '1:955368455341:web:ee83fe5b2c6666429f1a24',
  measurementId: 'G-JC2VEV3D3N'
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
const analytics = getAnalytics(firebaseApp)
