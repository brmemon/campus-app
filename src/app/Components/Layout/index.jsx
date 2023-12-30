"use client"
import React, { useEffect, useState } from 'react'
import "./style.scss"
import { useRouter } from 'next/navigation'
import { FaRegHandshake } from 'react-icons/fa6'
import MainButton from '../MainButton'
import { AdminNavbarData } from '@/app/Helper/constant'

const CustomLayout = ({ children, SideNavbarData }) => {
    const router = useRouter()
    const [pathname, setPathname] = useState()


    useEffect(() => {
        setPathname(window.location.pathname)
    }, [typeof window !== undefined // && window.location.pathname
    ])
    return (
        <div className='Main_sideNavbar'>
            <div className='Side_Navbar'>
                <FaRegHandshake className="campus_logo" />
                <h1 className='campus_heading'>Campus</h1>
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