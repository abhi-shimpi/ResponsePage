import React from "react";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale, // y
    Tooltip,
    Legend
}
    from
    'chart.js';

import { Bar } from "react-chartjs-2";

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale, // y
    Tooltip,
    Legend
)

const BarChart = () => {

    const data = {
    labels: ['Mon', 'Tue','Wed','Thurs','Fri','Sat'],
    datasets:[
        {
            label:'Number of Responses',
            data : [3,6,9,2,6,7],
            backgroundColor : 'green',
            borderColor:'black',
            barThickness: 20,
        }
    ]
    }
    const options ={

    }

    return (
        <>
            <Bar
                data={data}
                options={options}
            ></Bar>
        </>
    );
}

export default BarChart;


