import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button-component";
import "./sign-in-form.scss"
import { signInAuthUserWithEmailAndPassword,createUserDocumentfromAuth,signInwithGooglePopup } from "../../utils/firebase/fiebase.utils";

const defaultFormFields = {
    email : '',
    password : '',
}

const SignIn = () => {
    
    const [formFields,setFormFields] = useState(defaultFormFields);
    const {email,password} = formFields;

    const handleChange = (event) => {
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value});
    };
    // console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    };

    const signInwithGoogle = async () => {
        const {user} = await signInwithGooglePopup();
        await createUserDocumentfromAuth(user);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            const response=await signInAuthUserWithEmailAndPassword(email,password);
            console.log(response)
            resetFormFields();
        }
        catch(error){
            switch(error.code)
            {
                case "auth/wrong-password" : alert("Incorrect Password");break;
                case "auth/user-not-found" : alert("No User associated with Email");break;
                default : console.log(error);
            }
        }
    };

    return(
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign In with Email and Password.</span>
             <form onSubmit={handleSubmit}>
 
                <FormInput label="Email : " type="email" required onChange={handleChange} name="email" value={email}/>

                <FormInput label="Password : " type="password" required onChange={handleChange} name="password" value={password}/>
                <div className="buttons-container">
                <Button content='Sign In' type="submit" />
                <Button buttonType='google' type='button' content='Google Sign In' onClick={signInwithGoogle}/>
                </div>
            </form> 
        </div>
    );
};

export default SignIn;