import React,{useEffect,useState} from 'react'

function Demo6() {
    const[courses,setCourses]=useState([])
    const[optionsState,setOptionsState]=useState('')
    useEffect(()=>{
        setCourses([
            { label: "Math1", value: "1000"},
            { label: "java", value: "1001"},
            { label: "AI", value: "1002"},
            {label:'AAA',value:'1003'}
          ])
    },[])
    const mySubmitHandler = (event) => {
        event.preventDefault();
        if(optionsState ===''||optionsState==='Select Course'){
            return alert('No Course select')

        }
       console.log(optionsState)        
      }
    const handleChanges=(event)=>{
        console.log(event.target.value)
        setOptionsState(event.target.value)
       
    }
    return (
        <div className="container">
            <form onSubmit={mySubmitHandler}  className="form-group">
            <div className="form-group">
            <label >Enter Course Name </label>
            <br/>
            <br/>
            <select className="form-control form-control-lg"  onChange={handleChanges}>
            <option className="dropdown-item"  >Select Course</option>
            {
            courses.map((course)=>{
            return(<option className="dropdown-item" key={course.value} value={course.value} >{course.label}</option>)                   
            })
            }
          </select>
            </div>
            <button type="submit" className="btn btn-primary">Search For Tweets</button>
            </form>
        </div>
    )
}

export default Demo6
