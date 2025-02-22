import { useAuth } from '@clerk/clerk-react'
import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectRoute = ({children}) => {
    const { userId } = useAuth()
  return userId ? children : <Navigate to={"/login"} replace/>
}

export default ProtectRoute