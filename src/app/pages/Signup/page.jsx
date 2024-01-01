"use client"
import React, { useState } from 'react'
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import Input from '@/app/Components/Input'
import { FaRegEyeSlash, FaRegHandshake } from "react-icons/fa6";
import Link from 'next/link'
import { IoEyeOutline } from 'react-icons/io5'
import "./style.scss"
import StudentRequirment from './StudentRequirment.jsx'
import LSF_Container from '../SideContainers/LSF_Container'
import MainButton from '@/app/Components/MainButton';

const Signup = () => {
    const [userType, setUserType] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const PasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (event) => {
        setUserType(event.target.value);
    };

    return (
        <div className='container'>
            <LSF_Container />

            <div className='sub_container_two'>
                <h1 className='login_logo'>Sign Up</h1>
                <h2 className='login_welcome'>Welcome! Create Your Acount Now</h2>

                <div className='Signup_input' >
                    <div className='login_input_display'>
                        <Input className={"input"} label="Name" />
                        <Input className={"input"} label="Email" />
                    </div>
                    <div className='login_input_display'>
                        <div className="password-input-container">
                            <Input
                                className="input_eye"
                                type={showPassword ? 'text' : 'password'}
                                label="Password"
                            />
                            <div className="eye-icon" onClick={PasswordVisibility}>
                                {showPassword ? <IoEyeOutline /> : <FaRegEyeSlash />}
                            </div>
                        </div>
                        <div className="password-input-container">
                            <Input
                                className="input_eye"
                                type={showPassword ? 'text' : 'password'}
                                label="Confirm Password"
                            />
                            <div className="eye-icon" onClick={PasswordVisibility}>
                                {showPassword ? <IoEyeOutline /> : <FaRegEyeSlash />}
                            </div>
                        </div>
                    </div>
                    <div className='input_select'>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Select Role</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={userType}
                                label="Select Role"
                                onChange={handleChange}
                                className={"select"}
                            >
                                <MenuItem value={"student"}>Student</MenuItem>
                                <MenuItem value={"Company"}>Company</MenuItem>
                                <MenuItem value={"admin"}>Admin</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    {(userType === 'student') ?
                        <StudentRequirment userType={userType} />
                        :
                        false}
                </div>
                <div className='MainButton_Parent'>
                    <MainButton text={"Sign Up"} />
                </div>
                <p>
                    Already have an account?
                    <Link
                        className='link'
                        href="/pages/Login"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;
