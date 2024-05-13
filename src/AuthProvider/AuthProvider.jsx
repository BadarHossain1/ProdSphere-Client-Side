import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

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



    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             console.log('user changed', user)
    //             setUser(user);
    //             setLoading(false);
    //             if (user?.email) {
    //                 axios.post('https://product-sphere-server.vercel.app/jwt', user, { withCredentials: true })
    //                     .then(res => {
    //                         console.log(res.data);

    //                     })
    //             }
    //             // ...
    //         } else {
    //             setUser(null);
    //             setLoading(false);
    //         }
    //     });

    //     return unsubscribe;

    // }, [])
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
            // if user exists then issue a token
            if (currentUser) {
                axios.post('https://product-sphere-server.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('token response', res.data);
                    })
            }
            else {
                axios.post('https://product-sphere-server.vercel.app/logout', loggedUser, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data);
                    })
            }
        });
        return () => {
            return unsubscribe();
        }
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