
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Fairbase/fairbse";

export const Authcontex=createContext()
const auth = getAuth(app)


const Authprovider = ({children}) => {
    const[user,setuser]=useState(null)
    const[loading,setloading]=useState(true)
    const sinIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
  
const SingUp=(email,password)=>{
    setloading(true)
return createUserWithEmailAndPassword(auth,email,password)
}

const logout=()=>{
    setloading(true)
    return signOut(auth)
}
useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth,currentuser=>{
setuser(currentuser)
setloading(false)
    });
    return ()=>{
      return  unsubscribe()
    }
},[])

    const auths={
        
        SingUp,
        sinIn,
        user,
        loading,
        logout
    }
    
   
    return (
        <Authcontex.Provider value={auths}>
         {   children}
        </Authcontex.Provider>
    );
};

export default Authprovider;