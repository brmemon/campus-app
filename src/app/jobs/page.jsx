"use client"
import React, { useEffect, useState } from 'react'
import CustomLayout from '../Components/Layout'
import "./style.scss"
import MyTable from '../Components/Table/page'
import { StudentNavbarData, table } from '../Helper/constant'

const Jobs = () => {
  const [pathname, setPathname] = useState()

  useEffect(() => {
    setPathname(window.location.pathname)
  }, [typeof window !== undefined])

  return (
    <div>
      <CustomLayout SideNavbarData={StudentNavbarData} pathname={pathname}>
        <div className='all_path'>
          <MyTable tableHeader={table} />
        </div>
      </CustomLayout>
    </div>
  )
}

export default Jobs
