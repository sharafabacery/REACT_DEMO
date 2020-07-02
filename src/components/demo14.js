import React,{useEffect,useState} from 'react';
import {Doughnut,Line} from 'react-chartjs-2';


const Demo14=()=>{
const [data,setData]=useState({}) 
useEffect(()=>{

    let hours=[66,132-66]
    
 setData ( {
	labels: [
		'finished',
		'Remain',
		
	],
	datasets: [{
		data: hours,
		backgroundColor: [
		'#00cc00',
        '#ff0000'
		],
		hoverBackgroundColor: [
		'#00cc00',
        '#ff0000'
        ]
	}]
});    
},[])
    return (
      <div className="container">
        <h2>Hours Doughnut chart</h2>
        <Doughnut data={data} options={{
            responsive: true,
            maintainAspectRatio: true,
          }} />
      </div>
    );
  
}

export default {Demo14}
 