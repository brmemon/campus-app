import { MdOutlineDashboardCustomize } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { MdBlockFlipped } from "react-icons/md";

export const Sidenavbar = [
    {
        route: "Dashboard"
        , path: '/dashboard'
        , icon: <MdOutlineDashboardCustomize size={"22px"} />
    },
    {
        route: "Profile"
        , path: '/profile'
        , icon: <CgProfile size={"22px"} />
    },
    {
        route: "Verified"
        , path: '/verified'
        , icon: <MdOutlineVerifiedUser size={"22px"} />
    },
    {
        route: "UnVerified"
        , path: '/unverified'
        , icon: <AiOutlineSecurityScan size={"22px"} />
    },
    {
        route: "Block"
        , path: '/block'
        , icon: <MdBlockFlipped size={"22px"} />
    }
]