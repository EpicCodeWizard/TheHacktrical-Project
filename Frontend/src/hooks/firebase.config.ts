import {FirebaseOptions, getApp, getApps, initializeApp} from 'firebase/app'

const firebaseConfig:FirebaseOptions = {
    apiKey: "AIzaSyBsxe9V_kdbUROF_lUOVMwrBqceUCQ7Z00",
    authDomain: "thehacktrical.firebaseapp.com",
    projectId: "thehacktrical",
    storageBucket: "thehacktrical.appspot.com",
    messagingSenderId: "996952121577",
    appId: "1:996952121577:web:97c3dd294b395919b8d078",
    measurementId: "G-Z18TFSH3NQ"
};

export const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()