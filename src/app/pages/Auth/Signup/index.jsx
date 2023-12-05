import Image from 'next/image'
import React from 'react'
import vector from "../../../Components/Assets/Vector14.png"
import "./style.scss"
import { Button, Link, } from '@mui/material'
import Input from '@/app/Components/Input'
import { FaRegHandshake } from "react-icons/fa6";


const SignUp = () => {
    return (
        <div className='container'>
            <div className='sub_container_one'>

                <Image
                    style={{ width: "100%", height: "100%" }}
                    src={vector}
                    alt='Login Image' />
                {/* <Image src={campuslogo} alt='Campus Logo' /> */}

                <span className='campus_logo_text'>
                    <FaRegHandshake className='campus_logo' />
                    <h1 className='campus_text'>Campus App</h1>
                    <p className='campus_para'>"Revolutionize your campus hiring experience with our cutting-edge recruitment app! Streamline the process, connect seamlessly with top talent effortlessly." </p >
                </span>
            </div>

            <div className='sub_container_two'>
                <h1 className='login_logo'>Sign Up</h1>

                {/* <div className='login_signup_button'>
                    <Button className='login_button' >Login</Button>
                    <Button className='signup_button'>Signup</Button>
                </div> */}

                <div className='login_input' >
                    <Input className={"input"} label="Email" />
                    <Input className={"input"} label="Password" />
                </div>
                {/* <span className='forget'>
                    <Button className='forget_button'>Forget Password?</Button>
                </span> */}
                <Button className='login_button'>Sign Up</Button>
                <p>
                    Already have an acount
                    <Link to="/login"
                        style={{ color: "#00A9FD", paddingLeft: "5px", cursor: "pointer", fontSize: "larger" }} >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default SignUp
