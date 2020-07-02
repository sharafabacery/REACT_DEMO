import React,{useState} from 'react'

export default function Demo2() {
    const [ID,SETID]= useState('')
    const [inputList, setInputList] = useState([{ StudentID: '', CourseID: "" ,Grade:''}]);
 
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
 
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
  // handle click event of the Add button
  const handleAddClick = (event) => {
    setInputList([...inputList, { StudentID: '', CourseID: "" ,Grade:''}]);
  };

  const SETNEWID=(event)=>{
    SETID(event.target.value)
  }

  const mySubmitHandler = (event) => {
    event.preventDefault();
    let list=inputList
    for (let index = 0; index < list.length; index++) {
        list[index].StudentID=ID
    }
    setInputList(list)
    console.log(inputList)
    console.log(list)
  }
  
    return (
        <div>
        <form onSubmit={mySubmitHandler} >
        <input
        
        name="StudentID"
        placeholder="Enter STUDENTID"
        onChange={SETNEWID}
      />
      <br/> <br/> <br/>
        {inputList.map((x, i) => {
            return (
              <div className="box">
                <input
                  className="mt"
                  name="CourseID"
                  placeholder="Enter COURSEID"
                  value={x.CourseID}
                  onChange={e => handleInputChange(e, i)}
                />
                <input
                  className="ml10"
                  name="Grade"
                  placeholder="Enter GRADE"
                  value={x.Grade}
                  onChange={e => handleInputChange(e, i)}
                />
                
                <div className="btn-box">
                {inputList.length !== 1 && <button
                  className="mr10"
                  onClick={() => handleRemoveClick(i)}>Remove</button>}
                {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
              </div>
              </div>
            );
          })}
          <input
          type='submit'
        />
          </form>
        </div>
    )
}
