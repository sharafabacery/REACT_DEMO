import React,{useState} from 'react'

function Demo12() {
    const [chosen,setChosen]=useState({day:0,group:'',level:1})
    const[courses,setCourses]=useState([{label:'',Hours:0}])
    const handleChange=event=>{
        let choose=chosen
        choose[event.target.name]=event.target.value
        setChosen(choose)
    }
    const mySubmitHandler = (event) => {
        event.preventDefault();
        if (chosen.group===''||chosen.level===1) {
            return alert('Must fill group')
        }
        let optionsState=chosen

        optionsState.day=Number(optionsState.day.trim())
        optionsState.level=Number(optionsState.level.trim())
        optionsState.group=optionsState.group.trim().toUpperCase()

        setChosen(optionsState)
        
        console.log(chosen)   
        
       let coursesInDB=[{label:'Math1',Hours:8},{label:'Mathforcs',Hours:10},{label:'oop',Hours:14}]

       setCourses(coursesInDB)

        




    }
    const renderTableData=()=> {
        return courses.map((course, index) => {
           const { label, Hours } = course //destructuring
           return (

              <tr key={index} >
                 <td>{label}</td>
                 <td>{Hours}</td>
              </tr>
           )
        })
     }

    return (
        <div className="container"  onSubmit={mySubmitHandler}>
            <form className="form-group">
            <div className="form-group">
            <select className="form-control form-control-lg" name='day' onChange={handleChange}>

            <option className="dropdown-item"  >Select day</option>
            <option className="dropdown-item" key={0} value={0} >Saturday</option>
            <option className="dropdown-item" key={1} value={1} >Sunday</option>
            <option className="dropdown-item" key={2} value={2} >Monday</option>
            <option className="dropdown-item" key={3} value={3} >Tuesday</option>
            <option className="dropdown-item" key={4} value={4} >Wednesday</option>
            <option className="dropdown-item" key={5} value={5} >Thursday</option>
            <option className="dropdown-item" key={6} value={6} >Friday</option>

            </select>

          <br/>
          
          <input type="string" className="demo10" name='group' placeholder="G...." onChange={handleChange}  />
          <input type="number"className="demo10" name='level' placeholder="level" onChange={handleChange}  />
            
            </div>
            <button type="submit" className="btn btn-primary">submit</button>
            </form>
            <div className="form-group">
            <table id='students'>
            <tbody>
            <tr key={0} >
                 <td>label</td>
                 <td>Hours</td>
            </tr>
             {renderTableData()}
            </tbody>
           </table>
            
            </div>
            

        </div>
    )
}

export default Demo12
