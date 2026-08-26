import React from 'react'
import { Button } from '../ui/button'
import { UserButton, useUser } from '@clerk/react'
import { Link } from 'react-router-dom'

export const Header = () => {
  const {isSignedIn} = useUser();
  return (
    <div className = "flex justify-between p-3 px-5 shadow-md">
      <img src = "/logo.svg" width = {50} height = {50} alt = "logo"/>
      {isSignedIn ?
        <div className = "flex gap-2 items-center">
          <Link to = {"/dashboard"}>
            <Button variant = "outline">Dashboard</Button>
          </Link>
          <UserButton/>
        </div> :
        <Link to = {"/auth/sign-in"}>
          <Button>Get Started</Button>
        </Link>
      }
    </div>
  )
}
