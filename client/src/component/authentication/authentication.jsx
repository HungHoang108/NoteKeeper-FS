import React from 'react'
import SignIN from '../signIn/sign-in.signin'
import SignUp from '../sign-up/sign-up'
import SignInWithEmailAndPassword from '../signIn/sign-in-email-password'

const Authentication = () => {
  return (
    <div>
        <SignIN/>
        <SignInWithEmailAndPassword/>
        <SignUp/>

    </div>
  )
}

export default Authentication