import { TextField } from '@mui/material'
import React from 'react'

const Input = ({ className, type, label }) => {
  return (
    <div>
      <TextField
        label={label}
        type={type}
        className={className}
      // sx={{
      //   borderRadius:"50px"
      // }}
      //   inputProps={{
      //     style: {
      //       borderRadius: 999
      //     }
      //   }}
      // inputProps={{
      //   style: {
      //     borderRadius: "100px"
      //   }
      // }}
      // sx={{bor}}
      />
    </div>
  )
}

export default Input
