import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyASsVjuFsEIHy_xSFj0-FC6kwgtdEUWqmg",
  authDomain: "imessage-clone-5a206.firebaseapp.com",
  projectId: "imessage-clone-5a206",
  storageBucket: "imessage-clone-5a206.appspot.com",
  messagingSenderId: "866429150314",
  appId: "1:866429150314:web:898aeb1dbb7a226d6ed613"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;