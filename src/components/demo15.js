import React,{useEffect,useState} from 'react';
import {Line} from 'react-chartjs-2';


const Demo15=()=>{
    const[data,setData]=useState({})
    useEffect(()=>{
    let term=[1,2,3,4]
    let gpa=[3.69,3.61,3.64,4]
    setData({
        labels: term,
        datasets: [
          {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: gpa
          }
        ]
      })
    
    },[])
    
    return(
        <div className="container">
        <Line data={data}options={{
            responsive: true,
            maintainAspectRatio: true,
          }} />
        </div>
    )
    }
   export default Demo15