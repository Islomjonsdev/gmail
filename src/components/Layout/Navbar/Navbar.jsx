import { ModeToggle } from '@/components/shared/mode-toggle';
import { useAuth, UserButton } from '@clerk/clerk-react'
import React from 'react'

const Navbar = () => {
  const { userId } = useAuth()
  console.log(userId);
  return (
    <div>Navbar <ModeToggle /> <UserButton /></div>
  )
}

export default Navbar