import { useState } from "react"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../Firebase.init";



const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const useFirebase = () => {
    const [user, setUser] = useState({})

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                setUser(user)
                console.log(user)
            })
    }
    return { user, setUser, signInWithGoogle }
}
export default useFirebase;