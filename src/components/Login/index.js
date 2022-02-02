import React from 'react';

import firebaseApp from '../../services/firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import './styles.css';

const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

const Login = () => {
  return (
    <div className='google'>
      <button className='google__button' onClick={() => signInWithPopup(auth, googleProvider)}>Login with Google</button>
    </div>
  );
};

export default Login;
