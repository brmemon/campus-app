import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const Tables = ({ Verifey }) => {
    return (
        <div>
            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Details</TableCell>
                            <TableCell>{Verifey}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0.2 } }}
                        >
                            <TableCell>Raza</TableCell>
                            <TableCell>Company</TableCell>
                            <TableCell>Raza123@gmail.com</TableCell>
                            <TableCell>Alpha</TableCell>
                            <TableCell>Block</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Tables
