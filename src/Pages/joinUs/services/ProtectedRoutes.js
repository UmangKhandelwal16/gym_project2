import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoutes() {
    const auth=localStorage.getItem('loggedIn')
    
  return auth? <Outlet/> :<Navigate to={'/login'} />     //if aurh is true then the wrapped up content would be shown us
    
}



export default ProtectedRoutes
