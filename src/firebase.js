import firebase from 'firebase';

// const firebaseConfig = {
//   apiKey: "AIzaSyASsVjuFsEIHy_xSFj0-FC6kwgtdEUWqmg",
//   authDomain: "imessage-clone-5a206.firebaseapp.com",
//   projectId: "imessage-clone-5a206",
//   storageBucket: "imessage-clone-5a206.appspot.com",
//   messagingSenderId: "866429150314",
//   appId: "1:866429150314:web:898aeb1dbb7a226d6ed613"
// };
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;