"use client"
import React, { useEffect, useState } from 'react'
import CustomLayout from '../Components/Layout'
import "./style.scss"
import Tables from '../Components/Table/page'


const Verified = () => {
  const [pathname, setPathname] = useState()

  useEffect(() => {
    setPathname(window.location.pathname)
  }, [typeof window !== undefined])

  return (
    <div>
      <CustomLayout pathname={pathname}>
        <div className='all_path'>
          <Tables Verifey={"Block"} />
        </div>
      </CustomLayout>
    </div>
  )
}

export default Verified
