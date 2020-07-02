import React,{useEffect,useState}from 'react'

function Demo11() {
    const [students,setStudent]=useState([])
    useEffect(()=>{
    setStudent([
      {course:'Math1',hour:8,numOfHours:2},
      {course:'Math2',hour:10,numOfHours:3},
      {course:'Math3',hour:13,numOfHours:1},
      {course:'Math4',hour:14,numOfHours:3},
      {course:'Math0',hour:17,numOfHours:2},
      {course:'Math5',hour:20,numOfHours:2}
    ])
    },[])
    
 const renderTableData=()=> {
        return students.map((student, index) => {
           const { course, hour, numOfHours } = student //destructuring
           const dateInHours=new Date().getHours() //in production 
           return (
            <tr key={index} style={
            dateInHours === hour || (dateInHours<hour+numOfHours && dateInHours>hour) ?  { background: 'green' }
            :{ background: 'default' }
            }>
            <td>{course}</td>
            <td>{hour>12 ? hour-12 :hour}</td>
            <td>{numOfHours}</td>
            </tr>
           )
        })
     }
    return (
        <div>
        <h1 id='title'>React Dynamic Table</h1>
        <table id='students'>
        <tr>
        <th>Course</th>
        <th>Start Of Course</th>
        <th>numOfHours</th>
        </tr>
           <tbody>
            {renderTableData()}
           </tbody>
       </table>
        </div>
    )
}

export default Demo11
