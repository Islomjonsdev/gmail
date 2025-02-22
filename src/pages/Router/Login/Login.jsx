import { SignIn } from '@clerk/clerk-react'
import React from 'react'

const Login = () => {
  return (
    <div className='flex items-center justify-center h-[100vh]'>
        <SignIn signUpUrl='/signup' forceRedirectUrl='/'/>
    </div>
  )
}

export default Login