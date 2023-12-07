import React from 'react'
import Image from 'next/image';
import vector from '@/app/Components/Assets/Vector14.png';
import { FaRegHandshake } from 'react-icons/fa6';
import '../Login/style.scss';
import "../../../app/Global.scss"

const LSF_Container = () => {
  return (
    <div className="sub_container_one">
      <Image
        className='LSF_container'
        priority={true}
        src={vector}
        alt="Login Image"
      />
      <span className="campus_logo_text">
        <FaRegHandshake className="campus_logo" />
        <h1 className="campus_text">Campus App</h1>
        <p className="campus_para">
          "Revolutionize your campus hiring experience with our cutting-edge recruitment app! Streamline the process,
          connect seamlessly with top talent effortlessly."
        </p>
      </span>
    </div>
  )
}

export default LSF_Container
