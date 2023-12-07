import { TextField } from '@mui/material'
import React from 'react'

const Input = ({ className, type, label }) => {
  return (
    <div>
      <TextField
        label={label}
        type={type}
        className={className}
      />
    </div>
  )
}

export default Input
