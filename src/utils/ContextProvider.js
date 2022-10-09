import React, { createContext } from 'react';

export const AuthContext = createContext();

const ContextProvider = ({ children }) => {

    const registerUser = (creds) => { 
        console.log(creds);
    }

    const loginUser = (creds) => { 
        console.log(creds);
    }

  return (
    <>
    <AuthContext.Provider value={{ registerUser, loginUser }}>
        {
            children
        }
    </AuthContext.Provider>
    </>
  )
}

export default ContextProvider