import React from 'react'
import { signInWithGoogle } from '../../config/firebase-config'

function SignUp() {
    return (
        <div>
            <button onClick={signInWithGoogle}>
                Sign in with google
            </button>
        </div>
    )
}

export default SignUp
