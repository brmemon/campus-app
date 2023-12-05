import React from 'react'
import Login from "./pages/Auth/Login"
import SignUp from './pages/Auth/Signup'

const page = () => {
  return (
    <div style={{maxWidth:"1440px", margin:"auto"}}>
      <Login />
      {/* <SignUp/> */}
    </div>
  )
}

export default page
