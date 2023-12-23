"use client"
import React, { useEffect, useState } from 'react'
import CustomLayout from '../Components/Layout'

const Profile = () => {
  const [pathname, setPathname] = useState()


  useEffect(() => {
    setPathname(window.location.pathname)
  }, [window !== undefined && window.location.pathname])
  return (
    <div>
      <CustomLayout pathname={pathname} />
      <h1>Proflie</h1>
    </div>
  )
}

export default Profile
