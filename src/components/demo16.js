import React,{useState,useEffect} from 'react'

function Demo16() {
    const[courses,setCourses]=useState([])
    const[voteList,setVoteList]=useState([{courseID:'',VoteDescription:'',voteSelect:''}])
    const[selectedCourse,setSelectedCourse]=useState('')
    const[description,setDescription]=useState('')
    useEffect(()=>{
        //courses get from redux
        setCourses([
            { label: "Math1", value: "1000"},
            { label: "java", value: "1001"},
            { label: "AI", value: "1002"},
            {label:'AAA',value:'1003'}
            ])
    },[])
    const handleChange=(event)=>{
        console.log(event.target.value)
        setSelectedCourse(event.target.value)
    }
    const handleChangeTextArea=(event)=> {
       setDescription( event.target.value);
      }
      const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...voteList];
        list[index][name] = value;
        setVoteList(list);
      };
     
      // handle click event of the Remove button
      const handleRemoveClick = index => {
        const list = [...voteList];
        list.splice(index, 1);
        setVoteList(list);
      };
      // handle click event of the Add button
      const handleAddClick = (event) => {
        setVoteList([...voteList, {courseID:'',VoteDescription:'',voteSelect:''}]);
      };
      const mySubmitHandler = (event) => {
        event.preventDefault();
        let list=voteList
        if (list.length===1 ) {
          return  alert('Must fill form')
        }
        for (let index = 0; index < list.length; index++) {
            list[index].courseID=selectedCourse
            list[index].VoteDescription=description
        }
        setVoteList(list)
        console.log(voteList)
        console.log(list)
      }
    return (
        <div className="container">
            <form onSubmit={mySubmitHandler} className="form-group">
            <select className="form-control form-control-lg" name='course' onChange={handleChange}>

            <option className="dropdown-item">Select Course</option>
            {
            courses.map((course,index)=>{
            return(<option className="dropdown-item" key={index} value={course.value} >{course.label}</option>)                   
            })
            }

          </select>
          <h3>Description for Vote</h3><br/>
          <h5>{description.length }/250</h5>
          <textarea value={description} onChange={handleChangeTextArea} className="form-control form-control-lg"/>
           <h3>Votes </h3><br/>         
          {voteList.map((x, i) => {
            return (
              <div className="box"  key={i}>
                <input
                key={i}
                  className="mt"
                  name="voteSelect"
                  placeholder="Enter Vote"
                  value={x.voteSelect}
                  onChange={e => handleInputChange(e, i)}
                />
                <div className="btn-box">
                {voteList.length !== 1 && <button
                  className="mr10"  key={i+10}
                  onClick={() => handleRemoveClick(i)}>Remove</button>}
                {voteList.length - 1 === i && <button onClick={handleAddClick} key={i+11}>Add</button>}
              </div>
              </div>
            );
          })}
            <br/>
          <button type="submit" className="btn btn-primary">submit</button>
            </form>
        </div>
    )
}

export default Demo16
