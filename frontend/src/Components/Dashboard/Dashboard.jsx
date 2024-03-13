import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import { useNavigate } from 'react-router-dom'
import { checkLogin } from '../../utils/login';
import { BarChart, LineChart } from '@mui/x-charts';
import ProgressCard from '../ProgressCard/ProgressCard';
import { getUserData } from '../../utils/db';
import { findac, findsize } from '../../utils/calenginesize';

export const Dashboard = () => {
    const navigate = useNavigate();
    const [userdata, setUserdata] = useState();
    useEffect(() => {
        if (!checkLogin()) {
            return navigate("/login");
        }
        setUserdata(() => {
            const a = getUserData();
            console.log("fetchingData: ",a['fetchingData']);
            return a;
        })
    }, [])
    
    return (
         <div className='dashboard-main'>
             {userdata && <div className='dashboard-progress'>
                <ProgressCard percentage={userdata['fetchingData']['distance']*2} type='Distance travelled' />
                <ProgressCard percentage={findsize(userdata)}type='Engine type'/>
                <ProgressCard type='AC type' percentage={findac(userdata)*20}/>
                <ProgressCard type='AC usage' percentage={userdata['fetchingData']['actime']*100/24}/>
            </div>}
            <div className='dashboard-charts'>
                <div className='dashboard-linechart' align='center'>
                    <h2>Your Score</h2>
                    <LineChart
                        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                        series={[
                            {
                                data: [2, 5.5, 2, 8.5, 1.5, 5],
                                area: true,
                            },
                        ]}
                        width={700}
                        height={500}
                    />
                </div>
                <div className='dashboard-barchart' align='center'>
                    <h2>State wise Carbon Emission</h2>
                    <BarChart
                        width={700}
                        height={500}
                        series={[
                            {
                                data: [
                                    1000,
                                    500,
                                    700,
                                    1200,
                                    300,
                                    1500,
                                    800,
                                    200,
                                    1000,
                                    1200,
                                    400,
                                    1000,
                                    1800,
                                    100,
                                    150,
                                    100,
                                    200,
                                    800,
                                    600,
                                    1000,
                                    100,
                                    1500,
                                    800,
                                    200,
                                    1500,
                                    300,
                                    1300
                                ], label: 'Carbon Emission', id: 'pvId', color: "red"
                            },
                        ]}
                        xAxis={[{ data: [
                            "Andhra Pradesh",
                            "Assam",
                            "Bihar",
                            "Chhattisgarh",
                            "Goa",
                            "Gujarat",
                            "Haryana",
                            "Himachal Pradesh",
                            "Jharkhand",
                            "Karnataka",
                            "Kerala",
                            "Madhya Pradesh",
                            "Maharashtra",
                            "Manipur",
                            "Meghalaya",
                            "Mizoram",
                            "Nagaland",
                            "Odisha",
                            "Punjab",
                            "Rajasthan",
                            "Sikkim",
                            "Tamil Nadu",
                            "Telangana",
                            "Tripura",
                            "Uttar Pradesh",
                            "Uttarakhand",
                            "West Bengal"
                          ], scaleType: 'band', color: "white" }]}
                    />                </div>
            </div>
                        
        </div>
    )
}
