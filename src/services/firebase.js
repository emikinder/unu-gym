import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';

// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBEIFHZnWGnhClni5oQJiLhEQ-boZX6-7o",
  authDomain: "unu-gym-1b8fc.firebaseapp.com",
  projectId: "unu-gym-1b8fc",
  storageBucket: "unu-gym-1b8fc.appspot.com",
  messagingSenderId: "920236580650",
  appId: "1:920236580650:web:3350ffbbde17af8b6c4853"
};

const firebaseApp = initializeApp(firebaseConfig);

// const db = getFirestore(app);

// const auth = getAuth(db.app);
// const provider = new GoogleAuthProvider();

// export function SignIn() {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       console.log(result.user);
//       return result.user;
//     }).catch((error) => {
//       return null;
//     });
// }

// export function SignOut() {
//   auth.signOut();
// }

export default firebaseApp;
