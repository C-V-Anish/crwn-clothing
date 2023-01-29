import { auth ,signInwithGooglePopup, signInwithGoogleRedirect , createUserDocumentfromAuth} from "../../utils/firebase/fiebase.utils";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignIn from "../../components/sign-in-form/sign-in-form";
import "./authentication.scss"

const Authentication = () => {
    useEffect(() => {
        async function authenticate(){
        const response = await getRedirectResult(auth);
        console.log(response);
        }
        authenticate()       
     } , [] );
    
    return (<div className="authentication-container">
        <SignIn/>
        <SignUpForm/>
        {/* <Button onClick={signInwithGoogleRedirect} content='Sign In with Google Redirect' buttonType='google'/> */}
    </div>);
};

export default Authentication;
