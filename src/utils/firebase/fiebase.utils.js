import {initializeApp} from 'firebase/app';
import { signInWithEmailAndPassword,getAuth,signInWithRedirect,createUserWithEmailAndPassword,signInWithPopup,GoogleAuthProvider,signOut } from 'firebase/auth'
import {getFirestore , doc , getDoc , setDoc, } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDfPwm8iTBA0hkmTSBmJz_rHq5A7L_rweM",
    authDomain: "crwn-clothing-60352.firebaseapp.com",
    projectId: "crwn-clothing-60352",
    storageBucket: "crwn-clothing-60352.appspot.com",
    messagingSenderId: "849356324150",
    appId: "1:849356324150:web:132472f7d1eb72d5704797"
  };
  // Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth() 
export const signInwithGooglePopup = () => signInWithPopup(auth,provider)
export const signInwithGoogleRedirect = () => signInWithRedirect(auth,provider)

export const db = getFirestore();

export const createUserDocumentfromAuth = async (userAuth,additionalInformation={}) => {
    if(!userAuth) return;
    const userDocRef = doc(db , 'users', userAuth.uid)
    console.log(userDocRef)
    const userSnapShot = await getDoc(userDocRef)
    
    if (!userSnapShot.exists()){
        const { displayName , email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt
            });
        }
        catch(error){
            console.log("Error",error.message);
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email,password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth,email,password)
};

export const signInAuthUserWithEmailAndPassword = async (email,password) => {
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth,email,password)
};

export const signOutUser = async() => {
    await signOut(auth);
}
