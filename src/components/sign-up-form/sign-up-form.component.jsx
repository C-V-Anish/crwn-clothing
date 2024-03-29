import { useState,useContext } from "react";
import { createAuthUserWithEmailAndPassword,createUserDocumentfromAuth } from "../../utils/firebase/fiebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button-component";
import './sign-up-form.component.scss'

const defaultFormFields = {
    displayName : '',
    email : '',
    password : '',
    confirmPassword : '' 
}

const SignUpForm = () => {
    
    const [formFields,setFormFields] = useState(defaultFormFields);
    const {displayName,email,password,confirmPassword} = formFields;

    console.log("hit");

    const handleChange = (event) => {
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value});
    };
    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword)
        {
            alert("Passwords Do Not Match");
            return;
        }

        try{
            const {user}= await createAuthUserWithEmailAndPassword(email,password);
            await createUserDocumentfromAuth(user,{displayName});
            resetFormFields();
        }
        catch(error){
            if(error.code === 'auth/email-already-in-use')
                alert('Email Already Exists')
            if(error.code === 'auth/weak-password')
                alert("Password must be of atleast 6 characters");
            else
            console.log(error.message)
        }
    }

    return(
        <div className="sign-up-container">
            <h2>Dont have an account?</h2>
            <span>Sign Up with Email and Password.</span>
             <form onSubmit={handleSubmit}>
                <FormInput label="Display Name : " type="text" required onChange={handleChange} name="displayName" value={displayName}/>

                <FormInput label="Email : " type="email" required onChange={handleChange} name="email" value={email}/>

                <FormInput label="Password : " type="password" required onChange={handleChange} name="password" value={password}/>

                <FormInput label="Confirm Password : " type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>

                <Button content='Sign Up' type="submit" />
            </form> 
        </div>
    );
};

export default SignUpForm