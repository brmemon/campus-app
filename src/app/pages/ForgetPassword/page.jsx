import React from 'react'
import "./style.scss"
import { Button } from '@mui/material'
import Input from '@/app/Components/Input'
import Link from 'next/link'
import LSF_Container from '../SideContainers/LSF_Container'
import MainButton from '@/app/Components/MainButton'

const Forgetpassword = () => {
  return (
    <div className='container'>
      <LSF_Container />
      <div className='sub_container_two'>
        <h1 className='login_logo'>Forgot Password</h1>
        <div className='forget_input' >
          <Input className={"input"} label="Email" />
        </div>
        <div className='MainButton_Parent'>
          <MainButton text={"Forgot Password"} />
        </div>
        <Button>
          <Link
            className='link'
            href="/pages/Login"
          >Back To Login
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default Forgetpassword