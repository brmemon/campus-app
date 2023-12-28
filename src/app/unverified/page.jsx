"use client"
import React, { useEffect, useState } from 'react'
import CustomLayout from '../Components/Layout'
import "./style.scss"
import MyTable from '../Components/Table/page'
import { table } from '../Helper/constant'

const Unverified = () => {
  const [pathname, setPathname] = useState()

  useEffect(() => {
    setPathname(window.location.pathname)
  }, [typeof window !== undefined])

  return (
    <div>
      <CustomLayout pathname={pathname}>
        <div className='all_path'>
          <MyTable tableHeader={table} />
        </div>
      </CustomLayout>
    </div>
  )
}

export default Unverified
