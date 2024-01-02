"use client"
import React, { useEffect, useState } from 'react'
import CustomLayout from '../Components/Layout'
import "./style.scss"
import { CompanyNavbarData, Table } from '../Helper/constant'
import MyTable from '../Components/Table'
import "../global.scss"

const PostedJobs = () => {
  const [pathname, setPathname] = useState()

  useEffect(() => {
    setPathname(window.location.pathname)
  }, [typeof window !== undefined])

  return (
    <div>
      <CustomLayout SideNavbarData={CompanyNavbarData} pathname={pathname}>
        <div className='all_path'>
        <h1 className='top_heading'>Posted Jobs</h1>
          <MyTable tableData={Table} />
        </div>
      </CustomLayout>
    </div>
  )
}

export default PostedJobs
