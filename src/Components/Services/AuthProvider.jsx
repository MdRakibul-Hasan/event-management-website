
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "./firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading]= useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}

const logOut = () => {
    setLoading(true);
    return signOut(auth);
}

const provider = new GoogleAuthProvider();
const handleGoogleSignIn = () =>{
    setLoading(true);
   return signInWithPopup(auth, provider);

}





useEffect(()=>{
   const unSubscribe = onAuthStateChanged(auth, currentUser => {
        console.log('user state cghanged', currentUser);
        setUser(currentUser);
        setLoading(false);
    });
    return ()=> {
        unSubscribe();
    }
}, [])


const authInfo = {
    user,
    loading,
    createUser,
    logOut,
    signIn,
    handleGoogleSignIn,
}


    return (
        <AuthContext.Provider value = {authInfo}>
{children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;