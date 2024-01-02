"use client"
import React, { useEffect, useState } from 'react'
import "./style.scss"
import { useRouter } from 'next/navigation'
import { FaRegHandshake } from 'react-icons/fa6'
import MainButton from '../MainButton'
import Image from 'next/image'
import avater from "../Assets/avater3png.png"

const CustomLayout = ({ children, SideNavbarData }) => {
    const router = useRouter()
    const [pathname, setPathname] = useState()


    useEffect(() => {
        setPathname(window.location.pathname)
    }, [typeof window !== undefined // && window.location.pathname
    ])
    // console.log(SideNavbarData, "error")
    return (
        <div className='Main_sideNavbar'>
            <div className='Side_Navbar'>
                <div className='logo_heading'>
                    <FaRegHandshake className="campus_logo" />
                    <h1 className='campus_heading'>Campus App</h1>
                </div>
                <div className='avater_div'>
                    <Image src={avater} className='navbar_avater' alt='Avater' />
                    <p className='user_name'>Bilal Raza</p>
                </div>
                {SideNavbarData.map((item) =>
                    <MainButton
                        key={item.route}
                        className={item?.path === pathname ? "main_mapmenu" : "map_menu"}
                        onClick={() => router.push(item?.path)}
                        icon={item?.icon}
                        text={item?.route}
                    />
                )}
            </div>
            <div className='children'>
                {children}
            </div>
        </div>
    )
}

export default CustomLayout