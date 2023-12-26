"use client"

import React, { useEffect, useState } from 'react'
import CustomLayout from '../Components/Layout'
import "./style.scss"

const Dashboard = () => {

  const [pathname, setPathname] = useState()


  useEffect(() => {
    setPathname(window.location.pathname)
  }, [typeof window !== undefined // &&  window.location.pathname
  ])
  return (
    <CustomLayout pathname={pathname} >
      <div className='all_path'>
        <h1>Dashboard</h1>
      </div>
    </CustomLayout>
  )
}

export default Dashboard
