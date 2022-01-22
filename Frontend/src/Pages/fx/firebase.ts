import {app} from './../../hooks/firebase.config';
import {getAuth, signOut, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, Auth} from 'firebase/auth'
import {Dispatch, SetStateAction} from 'react'

let auth: Auth = getAuth(app)
let google: GoogleAuthProvider = new GoogleAuthProvider()

export async function EmailSignup(email: string, password: string, name: string, role: 'recruiter' | 'actor', setError: Dispatch<SetStateAction<string>>) {
    await createUserWithEmailAndPassword(auth, email, password)
        .then(res => {

        })
        .catch(setError)
}

export async function GoogleSignup(setError: Dispatch<SetStateAction<string>>) {
    await signInWithPopup(auth, google)
        .then(res => {

        })
        .catch(setError)
}

export async function Signin(email: string, password: string, setError: Dispatch<SetStateAction<string>>) {
    await signInWithEmailAndPassword(auth, email, password)
        .then(res => {

        })
        .catch(setError)
}

export async function SignOut(setError: Dispatch<SetStateAction<string>>) {
    await signOut(auth)
        .then(res => {

        })
        .catch(setError)
}