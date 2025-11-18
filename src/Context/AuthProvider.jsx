import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';
import { auth } from '../firebase-auth/firebase.init';
import { onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {

  // State for Setting user and loading
 const [loading, setLoading] = useState(true);
 const [user, setUser] = useState(null);

  // Authentication system

  const registerUser =(email, password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  };

  const loginUser = (email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  };

  const loginWithPopUp = ()=>{
    setLoading(true)
    return signInWithPopup(auth, provider)
  };

  const logOutUser = ()=>{
    setLoading(true);
    return signOut(auth)
  };

  const updateProfileInfo =(Info)=>{
    return updateProfile(auth.currentUser, Info)
  };

  const resetPassword =(email)=>{
    return sendPasswordResetEmail(auth, email)
  };

  //Observe User State(Whether a user is loged in or not)
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser);
      setLoading(false);
    })

    return ()=>{
      unsubscribe();
    }
  },[]);



  // Incorporate authInfo in following object
  const AuthInfo = {
    setLoading, loading, user, setUser, registerUser, loginUser, loginWithPopUp, logOutUser, updateProfileInfo, resetPassword
  };




  return (
    <AuthContext value={AuthInfo}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;