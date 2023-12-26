"use client"
import React, { useEffect, useState } from 'react'
import CustomLayout from '../Components/Layout'
import { Avatar, Card, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, radioClasses } from '@mui/material'
import { PiNotePencilLight } from "react-icons/pi";
import "./style.scss"
import Input from '../Components/Input';
import MainButton from '../Components/MainButton';

const Profile = () => {
  const [pathname, setPathname] = useState()


  useEffect(() => {
    setPathname(window.location.pathname)
  }, [typeof window !== undefined])
  return (
    <div>
      <CustomLayout pathname={pathname}>
        <div className='all_path'>
          <div className='profile'>
            <div className='avater_and_name'>
              <span className='avater_pencilicon'>
                <Avatar className='avater' />
                <PiNotePencilLight className='pencil_icon' />
              </span>
              <p className='avater_name'>Raza</p>
            </div>

            <div className='profile_input'>
              <Input label={"Raza123@gmail.com"} className='input_profile' />
              <Input label={"Name"} className='input_profile' />
            </div>
            <RadioGroup className='profile_radio'>
            {/* <p>Gender:-</p> */}
              <FormControlLabel value="male" control={<Radio />} label="Male" className='input_profile' />
              <FormControlLabel value="female" control={<Radio />} label="Female" className='input_profile' />
              <FormControlLabel value="other" control={<Radio />} label="Other" className='input_profile' />
            </RadioGroup>
            <div className='profile_input'>
              <Input label={"Old Password"} className='input_profile' />
              <Input label={"New Password"} className='input_profile' />
            </div>
            {/* <FormControl> */}
            {/* <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl> */}

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
