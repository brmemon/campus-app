import { LineChart } from '@mui/x-charts/LineChart';
import React from 'react'
import "./style.scss"

const PieChart = () => {
    return (
        <div style={{color:"#00A9FD"}}>
            <LineChart
            className='piechart'
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                    {
                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                        area: true,
                    },
                ]}
                width={960}
                height={500}
            />
        </div>
    )
}

export default PieChart
