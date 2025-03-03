import { useAuth, UserButton } from '@clerk/clerk-react'
import React from 'react'

const Home = () => {
  const { userId } = useAuth()
  console.log(userId);
  return (
    <div>Home <UserButton /></div>
  )
}

export default Home