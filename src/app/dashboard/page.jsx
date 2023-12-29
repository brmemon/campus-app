// "use client"

// import React, { useEffect, useState } from 'react'
// import CustomLayout from '../Components/Layout'
// import "./style.scss"
// import { Card } from '@mui/material'
// import { CgProfile } from 'react-icons/cg'
// import { MdBlockFlipped, MdOutlineVerifiedUser } from 'react-icons/md'
// import { AiOutlineSecurityScan } from 'react-icons/ai'
// import PieChart from '../Components/MuiChart/page'

// const Dashboard = () => {

//   const [pathname, setPathname] = useState()


//   useEffect(() => {
//     setPathname(window.location.pathname)
//   }, [typeof window !== undefined // &&  window.location.pathname
//   ])
//   return (
//     <CustomLayout pathname={pathname} >
//       <div className='all_path'>

//         <div className='dashboard'>
//           <Card className='dashboard_card'>
//             <MdOutlineVerifiedUser className='dashboard_icon' />
//             <p className='dashboard_para'>Total Verified Users</p>
//             <h2 className='dashboard_numbers'>(45)</h2>
//           </Card>

//           <Card className='dashboard_card'>
//             <AiOutlineSecurityScan className='dashboard_icon' />
//             <p className='dashboard_para'>Total Un Verified Users</p>
//             <h2 className='dashboard_numbers'>(45)</h2>
//           </Card>

//           <Card className='dashboard_card'>
//             <MdBlockFlipped className='dashboard_icon' />
//             <p className='dashboard_para'>Total Blocked Users</p>
//             <h2 className='dashboard_numbers'>(45)</h2>
//           </Card>
//         </div>

//         {/* <PieChart /> */}

//       </div>
//     </CustomLayout>
//   )
// }

// export default Dashboard
