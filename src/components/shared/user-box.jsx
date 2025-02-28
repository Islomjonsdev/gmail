import { useUser } from '@clerk/clerk-react'
import React from 'react'

const UserBox = () => {
    const { user } = useUser()
    console.log(user);
  return (
    <div>UserBox</div>
  )
}

export default UserBox