import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuth from '../Pages/Login/Firebase/firebase.init';

firebaseAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [error, setError] = useState('');

    const auth = getAuth();

    // Register New User
    const registerUser = (name, email, password, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName: name };

                saveUser(email, name, 'POST')
                // add user name
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => setIsLoading(false));

    }

    // email password login
    const passwordLoginUser = (email, password, location, history) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destanition = location?.state?.from || '/';
                history.replace(destanition)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => setIsLoading(false));
    }
    // google sign in
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = (history, redirect_uri) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)
                saveUser(user.email, user.displayName, 'PUT')
                history.push(redirect_uri)
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
    }, [])

    useEffect(() => {
        fetch(`https://tranquil-earth-61736.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    // Log Out
    const logOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
        })
            .finally(() => setIsLoading(false));
    }

    // save User data
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        console.log(user)
        fetch('https://tranquil-earth-61736.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => {
            })
    }

    return {
        user,
        error,
        isLoading,
        admin,
        registerUser,
        passwordLoginUser,
        googleSignIn,
        logOut
    }
};

export default useFirebase;