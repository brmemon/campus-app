"use client"
import React, { useState } from 'react';
import './style.scss';
// import { Button } from '@mui/material';
import Input from '@/app/Components/Input';
import { FaRegEyeSlash, FaRegHandshake } from 'react-icons/fa6';
import { IoEyeOutline } from "react-icons/io5";
import Link from 'next/link';
import LSF_Container from '../SideContainers/LSF_Container';
import MainButton from '@/app/Components/MainButton';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const PasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <LSF_Container />
      <div className="sub_container_two">
        <h1 className="login_logo">Login</h1>
         <h2 className='login_welcome'>Welcome Back! Login To Your Account</h2>
        <div className="login_input">
          <Input className="input" label="Email" />
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
        </div>
        <span className="forget">
          <Link href="/pages/ForgetPassword" className="forget_button">
            Forgot Password?
          </Link>
        </span>
        <div className='MainButton_Parent'>
          <MainButton text={"Login"} />
        </div>
        <p>
          Don't Have An Account
          <Link
            className='link'
            href="/pages/Signup"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
