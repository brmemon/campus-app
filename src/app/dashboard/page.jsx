"use client"

import React, { useEffect, useState } from 'react'
import CustomLayout from '../Components/Layout'

const Dashboard = () => {

  const [pathname, setPathname] = useState()


  useEffect(() => {
    setPathname(window.location.pathname)
  }, [window !== undefined && window.location.pathname])
  return (
    <div style={{ display: "flex", backgroundColor: "#00A9FD" }}>
      <CustomLayout pathname={pathname} />
      <div style={{ borderBottomLeftRadius: "40px", borderTopLeftRadius: "40px", backgroundColor: "white", width: "100%", paddingLeft: "40px" }}>
        <h1>Dashboard</h1>
      </div>
    </div>
  )
}

export default Dashboard
