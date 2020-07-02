import React,{useEffect,useState} from 'react'

function Demo10() {
  
    const[courses,setCourses]=useState([])

    const optionsState={course:'',day:0,group:'',hour:0,numOfHours:0,level:1,type:""}
    
    useEffect(()=>{
        setCourses([
        { label: "Math1", value: "1000"},
        { label: "java", value: "1001"},
        { label: "AI", value: "1002"},
        {label:'AAA',value:'1003'}
        ])
    },[])
    
    const handleChange=event=>optionsState[event.target.name]=event.target.value

    const mySubmitHandler = (event) => {
        event.preventDefault();
        optionsState.day=Number(optionsState.day.trim())
        optionsState.hour=Number(optionsState.hour.trim())
        optionsState.numOfHours=Number(optionsState.numOfHours.trim())
        optionsState.level=Number(optionsState.level.trim())
        optionsState.type=optionsState.lecture.toLowerCase()
        optionsState.group=optionsState.group.trim().toUpperCase()
        console.log(optionsState)        
    }

    return (
        <div className="container">

            <form onSubmit={mySubmitHandler} className="form-group">

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

          <select className="form-control form-control-lg" name='course' onChange={handleChange}>

            <option className="dropdown-item">Select Course</option>
            {
            courses.map((course)=>{
            return(<option className="dropdown-item" key={course.value} value={course.value} >{course.label}</option>)                   
            })
            }

          </select>

          <br/>
          
            <input type="string" className="demo10" name='group' placeholder="G...." onChange={handleChange}  />
            <input type="number" className="demo10" name='hour' placeholder="Hours 24h" onChange={handleChange}  />
            <input type="number"className="demo10" name='numOfHours' placeholder="NumofHours" onChange={handleChange}  />
            <input type="number"className="demo10" name='level' placeholder="level" onChange={handleChange}  />
            <input type="number"className="demo10" name='lecture' placeholder="lecture or section " onChange={handleChange}  />

            </div>

            <button type="submit" className="btn btn-primary">submit</button>
            
            </form>
        </div>
    )
}

export default Demo10