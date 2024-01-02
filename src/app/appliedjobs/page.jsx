"use client"
import React, { useEffect, useState } from 'react'
import CustomLayout from '../Components/Layout'
import "./style.scss"
import { StudentNavbarData, Table} from '../Helper/constant'
import MyTable from '../Components/Table'
import "../global.scss"

const AppliedJobs = () => {
  const [pathname, setPathname] = useState()

  useEffect(() => {
    setPathname(window.location.pathname)
  }, [typeof window !== undefined])
// console.log(SideNavbarData, "okay")
  return (
    <div>
      <CustomLayout SideNavbarData={StudentNavbarData} pathname={pathname}>
        <div className='all_path'>
        <h1 className='top_heading'>Applied Jobs</h1>
          <MyTable tableData={Table} />
        </div>
      </CustomLayout>
    </div>
  )
}

export default AppliedJobs
