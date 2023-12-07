import Image from 'next/image'
import React from 'react'
import vector from "../../Components/Assets/Vector14.png"
import "./style.scss"
import { Button } from '@mui/material'
import Input from '@/app/Components/Input'
import { FaRegHandshake } from "react-icons/fa6";
import Link from 'next/link'
import LSF_Container from '../SideContainers/LSF_Container'

const Forgetpassword = () => {
  return (
    <div className='container'>
      <LSF_Container />
      <div className='sub_container_two'>
        <h1 className='login_logo'>Forgot Password</h1>
        <div className='forget_input' >
          <Input className={"input"} label="Email" />
        </div>
        <Button className='login_button'>Forgot Password</Button>
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