import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import auth from '../Firebase/Firebase.config';
import { axiosPublic } from '../API/AxiosPublic/AxiosPublic';
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
            if(currentUser){
                const userInfo = {email: currentUser.email}
                axiosPublic.post('/jwt', userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                    }
                })
            }else{
                localStorage.removeItem('access-token')
            }
            setloading(false)
            return (() => {
                unSubscribe()
            })
        })
    }, [])
    

    

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