import { MdOutlineDashboardCustomize } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { MdBlockFlipped } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";

export const Sidenavbar = [
    {
        route: "Dashboard"
        , path: '/dashboard'
        , icon: <MdOutlineDashboardCustomize />
    },
    {
        route: "Profile"
        , path: '/profile'
        , icon: <CgProfile />
    },
    {
        route: "Verified"
        , path: '/verified'
        , icon: <MdOutlineVerifiedUser />
    },
    {
        route: "UnVerified"
        , path: '/unverified'
        , icon: <AiOutlineSecurityScan />
    },
    {
        route: "Block"
        , path: '/block'
        , icon: <MdBlockFlipped />
    }
]