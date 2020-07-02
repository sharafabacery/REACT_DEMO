import React,{useState} from 'react'
import MaterialTable from 'material-table';
function Demo13() {
    const [chosen,setChosen]=useState({day:0,group:'',level:1})    
    const [mystate, mysetState] = useState({
        columns: [
         {title:'CourseID',field:'Id'},
          { title: 'Course', field: 'course' },
          { title: 'Hour', field: 'hour', type: 'numeric'},
          { title: 'NumOfHours', field: 'numofhours', type: 'numeric' }
          
        ]
      });
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
        
       let coursesInDB=[{Id:'1000',course:'Math1',hour:8,numofhours:2},{Id:'1010',course:'Mathforcs',hour:10,numofhours:2},{Id:'1020',course:'oop',hour:14,numofhours:5}]

       mysetState((pre)=>{return{...pre,data: coursesInDB}})
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
        <MaterialTable
    title="Editable Example"
    columns={mystate.columns}
    data={mystate.data}
    editable={{
      onRowUpdate: (newData, oldData) =>
        new Promise((resolve) => {
          setTimeout(() => {
           resolve();
            if (oldData) {
              //console.log(oldData)
              mysetState((prevState) => {
                const data = [...prevState.data];
                data[data.indexOf(oldData)] = newData;
                console.log(newData)
                return { ...prevState, data };
              });
            }
          }, 100);
        }).catch(function(e) {
          console.log(e); // doesn't happen
        }),
    
    }}
  />
        
        </div>
        </div>
    )
}

export default Demo13
