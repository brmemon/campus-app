import React from 'react'
import {Button} from "@mui/material" 
const MainButton = ({className,text}) => {
  return (
    <div>
      <Button className={className}>{text}</Button>
    </div>
  )
}

export default MainButton
