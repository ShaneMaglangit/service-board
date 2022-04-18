import React from "react"
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebaseConfig from "../firebase-config.js"

// var firebase = require('firebase')
// var uiConfig =  {
//     callbacks: {
//       signInSuccessWithAuthResult: function(authResult, redirectUrl) {
//         return true;
//       },
//     },
//     signInFlow: 'popup',
//     signInSuccessUrl: '/listing',
//     signInOptions: [
//         firebase.default.auth.GoogleAuthProvider.PROVIDER_ID,
//         {
//             provider: firebase.default.auth.EmailAuthProvider.PROVIDER_ID,
//             signInMethod: firebase.default.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD,
//             requireDisplayName: true
//         }
//     ],
// }

const AuthenticationForm = () => {
    return(
        <div className="h-screen flex items-center">
            <div className="w-96 mx-auto">
                <p>Authentication does not function on archive mode</p>
                {/* <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.default.auth()} /> */}
            </div>
        </div>
    )
}

export default AuthenticationForm