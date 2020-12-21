import React from 'react'
import {Button} from "@material-ui/core";
import {auth, provider} from './firebase'
import "./Login.css";
function Login() {

const signIn = () => {
//do google login
auth.signInWithPopup(provider).catch((error) => alert(error.message));

}

    return (
        <div className="login">
          
            <div className="login__logo">
            <img src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png" alt="discord logo" />
            </div>

            <Button  onClick={signIn} > Sigin In</Button>
        </div>
    )
}

export default Login
