"use client"
import React, { useEffect, useState } from 'react'
import { Sidenavbar } from '../../Helper/constant'
import "./style.scss"
import { useRouter } from 'next/navigation'
import { FaRegHandshake } from 'react-icons/fa6'
import MainButton from '../MainButton'
import { Button } from '@mui/material'

const CustomLayout = ({ icon, children }) => {
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
                {Sidenavbar.map((item) => {
                    console.log(item.icon + "icon")
                    return (
                        <MainButton
                            key={item.route}
                            className={item?.path === pathname ? "main_mapmenu" : "map_menu"}
                            onClick={() => router.push(item?.path)}
                            icon={item?.icon}
                            text={item?.route}
                        />
                    )

                }
                )}
            </div>
            <div className='children'>
                {children}
            </div>
        </div>
    )
}

export default CustomLayout