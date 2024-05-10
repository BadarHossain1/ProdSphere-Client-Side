import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();



const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);




    const CreateUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const GoogleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider)
    }



    const LoginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const LogoutUser = () => {
        setLoading(true)
        return signOut(auth);
    }



    const UpdateProfile = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: displayName, photoURL: photoURL
        })
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('user changed', user)
                setUser(user);
                setLoading(false);
                // ...
            } else {
                alert("No user is signed in");
                setLoading(false);
            }
        });

        return unsubscribe;

    }, [])

    const authInfo = {
        user, CreateUser, LoginUser, UpdateProfile, LogoutUser, GoogleLogin, loading, setLoading,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;