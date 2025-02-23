import { useAuth, UserButton } from '@clerk/clerk-react'
import React from 'react'

const Navbar = () => {
  const { userId } = useAuth()
  console.log(userId);
  return (
    <div>Navbar <UserButton /></div>
  )
}

export default Navbar