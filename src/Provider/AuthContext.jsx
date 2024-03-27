import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import auth from '../Firebase/Firebase.config';
// import { axiosSecure } from '../api/axiosSecure';

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setloading] = useState(true)
    // const [contestData, setContestData] = useState([])
    // const [userData, setUserData] = useState([])

    const provider = new GoogleAuthProvider()

    const createUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setloading(true)
        return signInWithPopup(auth, provider)
    }

    const userSignOut = () => {
        setloading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setloading(false)
            return (() => {
                unSubscribe()
            })
        })
    }, [])
    

    // useEffect(() => {
    //     axiosSecure.get("/contest")
    //         .then(response => setContestData(response.data))
    //         .catch(error => console.log(error))
    // }, [])

    // useEffect(() => {
    //     axiosSecure.get(`/users/?email=${user?.email}`)
    //         .then(res => {
    //             setUserData(res.data)
    //         }).catch(err => {
    //             console.log(err)
    //         })

    // }, [user?.email])

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        userSignOut,
        // contestData,
        // userData
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;