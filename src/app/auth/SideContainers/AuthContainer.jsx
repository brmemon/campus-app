import React from 'react'
import Image from 'next/image';
import vector from '@/app/Components/Assets/Vector14.png';
import { FaRegHandshake } from 'react-icons/fa6';
import '../Login/style.scss';
import "../../../app/Global.scss"

const AuthContainer = () => {
  return (
    <div className="sub_container_one">
      {/* <Image
        className='AuthContainer'
        priority={true}
        src={vector}
        alt="Login Image"
      /> */}
      <span className="campus_logo_text">
        <FaRegHandshake className="campus_logo" />
        <h1 className="campus_text">Campus App</h1>
        <p className="campus_para">
          "Connecting Dreams, Bridging Careers Your Gateway to Opportunities!"
        </p>
      </span>
    </div>
  )
}

export default AuthContainer
