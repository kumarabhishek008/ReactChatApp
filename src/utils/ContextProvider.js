import React, { createContext, useState, useEffect } from 'react';
import firebaseApp from './firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {  getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

export const AuthContext = createContext();

const ContextProvider = ({ children }) => {

    const auth = getAuth(firebaseApp);
    const db = getFirestore(firebaseApp);

    const [userData, setUserData] = useState(null)

    const registerUser = (creds) => { 
        console.log(creds);
        const { email, password } = creds;
        createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const docref = doc(db, "users", user.uid);
            const userDetail =await setDoc(docref, {
                name: "",
                email,
                age: '',
                address: "",
                createdAt: (new Date()).getDate()
            })
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }

    const loginUser = (creds) => { 
        console.log(creds);
        const { email, password } = creds;
        signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const docref = doc(db, "users", user.uid)
            const userDetail = await getDoc(docref)
            console.log(userDetail.data());
            setUserData(userDetail.data())
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    useEffect(()=>{
        onAuthStateChanged(auth,async (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              const docref = doc(db, "users", user.uid)
              const userDetail = await getDoc(docref)
              console.log(userDetail.data());
              setUserData(userDetail.data())
              // ...
            } else {
              // User is signed out
              // ...
            }
          });
    },[])

  return (
    <>
    <AuthContext.Provider value={{ registerUser, loginUser, userData }}>
        {
            children
        }
    </AuthContext.Provider>
    </>
  )
}

export default ContextProvider