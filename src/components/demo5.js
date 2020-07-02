import React,{useEffect,useState} from 'react'
import MultiSelect from "react-multi-select-component";
function Demo5() {
    const [selected, setSelected] = useState([]);
    const [options, setOptions] = useState([]);
    const[ID,setID]=useState()
    const [numOFHours,setNumOfHours]=useState(0)
  
    useEffect(()=>{
    setOptions([
        { label: "Math1", value: "1000",hours:2},
        { label: "java", value: "1001",hours:4},
        { label: "AI", value: "1002",hours:1},
        {label:'AAA',value:'1003',hours:5}
      ])
      setID('100000') 

    },[])
    const mySubmitHandler = (event) => {
        event.preventDefault();
        let chosenCourses=[]
        selected.map((op)=>{
            let chose=[ID,op.value]
            
          return  chosenCourses.push(chose)
        })
        
        console.log(chosenCourses)
        chosenCourses=[]
      }
      const handlebutton=(e)=>{
          let num=0
         selected.forEach((s)=>{
            num=num+s.hours
         }) 
         
          setNumOfHours(num)
          console.log(num)
         
      }
    return (
        <div className="container">
        <h1>Select Courses</h1>
      
        <h3 className='h3'>{numOFHours}</h3>
        <form onSubmit={mySubmitHandler}  className="form-group">
        <MultiSelect
          options={options}
          value={selected}
          onChange={setSelected}
          labelledBy={"Select"}
        />
        <br/>
        <button type="button" className="btn btn-primary" onClick={handlebutton}>Calculate Number of hours</button>
        <br/>
        <br/>
       
        <button type="submit"   className="btn btn-primary">Submit</button>
        </form>
        </div>
    )
}

export default Demo5
