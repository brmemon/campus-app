"use client"
import React, { useEffect, useState } from 'react'
import CustomLayout from '../Components/Layout'
import "./style.scss"
import { StudentNavbarData, Table} from '../Helper/constant'
import MyTable from '../Components/Table'

const Jobs = () => {
  const [pathname, setPathname] = useState()

  useEffect(() => {
    setPathname(window.location.pathname)
  }, [typeof window !== undefined])

  return (
    <div>
      <CustomLayout SideNavbarData={StudentNavbarData} pathname={pathname}>
        <div className='all_path'>
          <MyTable tableData={Table} />

        </div>
      </CustomLayout>
    </div>
  )
}

export default Jobs
