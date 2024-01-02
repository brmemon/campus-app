"use client"
import React, { useEffect, useState } from 'react'
import CustomLayout from '../Components/Layout'
import "./style.scss"
import { AdminNavbarData, Table} from '../Helper/constant'
import "../global.scss"
import MyTable from '../Components/Table'

const Unverified = () => {
  const [pathname, setPathname] = useState()

  useEffect(() => {
    setPathname(window.location.pathname)
  }, [typeof window !== undefined])

  return (
    <div>
      <CustomLayout SideNavbarData={AdminNavbarData} pathname={pathname}>
        <div className='all_path'>
        <h1 className='top_heading'>UnVerified Users</h1>
          <MyTable tableData={Table}/>
        </div>
      </CustomLayout>
    </div>
  )
}

export default Unverified
