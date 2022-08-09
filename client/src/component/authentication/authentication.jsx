import React from 'react'
import SignIN from '../signIn/sign-in-google/sign-in.signin'
import SignUp from '../sign-up/sign-up'

import SignInWithEmailAndPassword from '../signIn/sign-in-email/sign-in-email-password'
import './authentication.styles.scss'

const Authentication = () => {
  return (
    <div className='authen-box'>
      <div className='authen-sign-in'>
        
        <SignInWithEmailAndPassword/>
        <SignIN/>
      </div>

      <div className='authen-sign-up'>
        <SignUp/>
      </div>
    </div>
  )
}

export default Authentication