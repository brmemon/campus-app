"use client"

import React, { useEffect, useState } from 'react'
import CustomLayout from '../Components/Layout'
import "./style.scss"
import { Card } from '@mui/material'
import { CgProfile } from 'react-icons/cg'
import { MdBlockFlipped, MdOutlineVerifiedUser } from 'react-icons/md'
import { AiOutlineSecurityScan } from 'react-icons/ai'

const Dashboard = () => {

  const [pathname, setPathname] = useState()


  useEffect(() => {
    setPathname(window.location.pathname)
  }, [typeof window !== undefined // &&  window.location.pathname
  ])
  return (
    <CustomLayout pathname={pathname} >
      <div className='all_path'>

        <div style={{ display: "flex", width: "100%" }}>
          <Card className='dashboard_card'>
            <MdOutlineVerifiedUser className='dashboard_icon' />
            <p className='dashboard_para'>Total Verify Users</p>
          </Card>

          <Card className='dashboard_card'>
            <AiOutlineSecurityScan className='dashboard_icon' />
            <p className='dashboard_para'>Total UnVerify Users</p>
          </Card>

          <Card className='dashboard_card'>
            <MdBlockFlipped className='dashboard_icon' />
            <p className='dashboard_para'>Total Block Users</p>
          </Card>
        </div>

      </div>
    </CustomLayout>
  )
}

export default Dashboard
