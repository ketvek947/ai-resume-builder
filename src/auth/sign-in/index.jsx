import { SignIn } from '@clerk/react'
import React from 'react'

export const SignInPage = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <SignIn/>
    </div>
  )
}
