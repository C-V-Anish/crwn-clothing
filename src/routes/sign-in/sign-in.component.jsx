import { signInwithGooglePopup , createUserDocumentfromAuth} from "../../utils/firebase/fiebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInwithGooglePopup();
        const userDocRef = await createUserDocumentfromAuth(user);
    }
    return (<div>
        <button onClick={logGoogleUser}>Sign In with Google</button>
    </div>);
};

export default SignIn;