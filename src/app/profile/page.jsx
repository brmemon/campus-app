"use client"
import React, { useEffect, useState } from 'react'
import CustomLayout from '../Components/Layout'
import { Avatar, FormControlLabel, Radio, RadioGroup, } from '@mui/material'
import { PiNotePencilLight } from "react-icons/pi";
import "./style.scss"
import Input from '../Components/Input';
import MainButton from '../Components/MainButton';
import { AdminNavbarData } from '../Helper/constant';
import Image from 'next/image';
import avater from "../Components/Assets/avater3png.png"

const Profile = () => {
  const [pathname, setPathname] = useState()

  useEffect(() => {
    setPathname(window.location.pathname)
  }, [typeof window !== undefined])
  return (
    <div>
      <CustomLayout SideNavbarData={AdminNavbarData} pathname={pathname}
      >
        <div className='all_path'>
          <div className='profile'>
            <div className='avater_and_name'>
              <span className='avater_pencilicon'>
                <Image src={avater} className='avater' alt='Avater' />
                {/* <Avatar className='avater' /> */}
                <PiNotePencilLight className='pencil_icon' />
              </span>
              <p className='avater_name'>Raza</p>
            </div>

            <div className='profile_input'>
              <Input label={"Raza123@gmail.com"} className='input_profile' disabled={true} />
              <Input label={"Name"} className='input_profile' />
              <p className='gender_class'>Gender:</p>
            </div>
            <RadioGroup className='profile_radio'>
              <FormControlLabel value="male" control={<Radio />} label="Male" className='input_profile' />
              <FormControlLabel value="female" control={<Radio />} label="Female" className='input_profile' />
              <FormControlLabel value="other" control={<Radio />} label="Other" className='input_profile' />
            </RadioGroup>
            <div className='profile_input'>
              <Input label={"Old Password"} className='input_profile' />
              <Input label={"New Password"} className='input_profile' />
            </div>
            <div className='parent_profilebutton'>
              <MainButton text={"Update Changes"} className={"profile_button"} />
            </div>
          </div>
        </div>
      </CustomLayout>
    </div>
  )
}

export default Profile
