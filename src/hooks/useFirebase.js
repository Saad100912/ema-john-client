import { useState, useEffect } from "react";
import initializeAuthentication from "./../Firebase/firebase.init";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    // const signInUsingGoogle = () => {
    //     signInWithPopup(auth, googleProvider)
    //         .then((result) => {
    //             const user = result.user;
    //             console.log(user);
    //         })
    //         .catch((error) => {
    //             console.log(error.message);
    //         });
    // };

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        });
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
            }
        });
    }, []);

    return { user, signInUsingGoogle, logOut };
};

export default useFirebase;
