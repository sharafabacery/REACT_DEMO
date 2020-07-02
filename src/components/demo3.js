import React,{useEffect,useState}from 'react'

function Demo3() {
    const [students,setStudent]=useState([])
    useEffect(()=>{
    setStudent([
    { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
    { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
    { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
    { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }])
    },[])
 const renderTableData=()=> {
        return students.map((student, index) => {
           const { id, name, age, email } = student //destructuring
           return (
              <tr key={index} style={
                 
              }>
                 <td>{id}</td>
                 <td>{name}</td>
                 <td>{age}</td>
                 <td>{email}</td>
              </tr>
           )
        })
     }
    return (
        <div>
        <h1 id='title'>React Dynamic Table</h1>
        <table id='students'>
           <tbody>
            {renderTableData()}
           </tbody>
       </table>
        

        
        
        
        
        </div>
    )
}

export default Demo3
