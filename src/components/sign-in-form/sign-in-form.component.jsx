import { useState, useContext } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { UserContext } from "../../contexts/user.context";
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
    email: "",
    password: ""
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const { setCurrentUser } = useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signinWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const {user} = await signInAuthUserWithEmailAndPassword(
                email,
                password
            );
            setCurrentUser(user)
      
            resetFormFields();
        } catch (err) {
            switch (err.code) {
                case "auth/wrong-password":
                    alert("you password is incorrect");
                    break;
                case "auth/user-not-found":
                    alert("user name is incorrect");
                    break;
                default:
                    console.log(err);
                    break;
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with you email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button
                        buttonType="google"
                        onClick={signinWithGoogle}
                        type="button"
                    >
                        Google Sign IN
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
