import { auth ,signInwithGooglePopup, signInwithGoogleRedirect , createUserDocumentfromAuth} from "../../utils/firebase/fiebase.utils";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import Button from "../../components/button/button-component";

const SignIn = () => {
    useEffect(() => {
        async function authenticate(){
        const response = await getRedirectResult(auth);
        console.log(response);
        }
        authenticate()       
     } , [] );
    const logGoogleUser = async () => {
        const {user} = await signInwithGooglePopup();
        const userDocRef = await createUserDocumentfromAuth(user);
    }
    return (<div>
        <SignUpForm/>
        <Button onClick={logGoogleUser} content='Sign In with Google' buttonType='google'/>
        {/* <Button onClick={signInwithGoogleRedirect} content='Sign In with Google Redirect' buttonType='google'/> */}
    </div>);
};

export default SignIn;
