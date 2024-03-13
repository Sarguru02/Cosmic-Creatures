import React, { useEffect } from 'react'
import './Dashboard.css'
import { useNavigate } from 'react-router-dom'
import { checkLogin } from '../../utils/login';
import { BarChart,LineChart } from '@mui/x-charts';
import ProgressCard from '../ProgressCard/ProgressCard';

export const Dashboard = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        if(!checkLogin()){
            return navigate("/login");
        }
    },[])
    return (
        <div className='dashboard-main'>
            <div className='dashboard-progress'>
                <ProgressCard percentage={50} type='Distance' />
                <ProgressCard />
                <ProgressCard />
                <ProgressCard />
            </div>
            <div className='dashboard-charts'>
                <div className='dashboard-linechart'>
                    <LineChart
                        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                        series={[
                            {
                                data: [2, 5.5, 2, 8.5, 1.5, 5],
                                area: true,
                            },
                        ]}
                        width={500}
                        height={300}
                     />
                </div>
                <div className='dashboard-barchart'>
                    <BarChart 
                        width={500}
                        height={300}
                        series={[
                            { data: [3, 4], label: 'pv', id: 'pvId', color: "blue" },
                            { data: [7, 8], label: 'uv', id: 'uvId' },
                        ]}
                        xAxis={[{ data: ['a', 'b'], scaleType: 'band' , color: "white"}]}
                    />                </div>
            </div>

        </div>
    )
}
