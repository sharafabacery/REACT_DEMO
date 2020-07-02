import React,{useState,useEffect} from 'react'

function Demo17() {
    const[id,setID]=useState('')
    const[courses,setCourse]=useState([])
    const[voted,setVoted]=useState({studentID:'',CourseID:'',vote:''})
    const[voteList,setVoteList]=useState([])
    const[selectedCourse,setSelectedCourse]=useState('')
    useEffect(()=>{
        setID('1000001101001')//redux store
        setCourse([
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
    const mySubmitHandler = (event) => {
        event.preventDefault();
        if (selectedCourse==='') {
            return alert('Must choose Course')
        }
        setVoteList([{voteDescription:"dfgdfgdfgdfgdfdfgdfgfgdfg",vote:'1'},{voteDescription:"dfgdfgdfgdfgdfdfgdfgfgdfg",vote:'2'},{voteDescription:"dfgdfgdfgdfgdfdfgdfgfgdfg",vote:'3'}])
        let course=voted
        course.studentID=id
        course.CourseID=selectedCourse
        setVoted(course)
      }
    const handleChangeInVote=(event)=>{
        let vvote=voted
        vvote.vote=event.target.value
        setVoted(vvote)
    }
    const mySubmitHandler1=(event)=>{
        event.preventDefault()
        if (voted.vote===''||voted.vote==='select vote') {
            return alert('')
        }
        console.log(voted)
    }
      const VotesFormDb=()=>{
          if (voteList.length>0) {
              return(
                
                  <form className='form-group'   onSubmit={mySubmitHandler1}>
                  <h4>{voteList[0].voteDescription}</h4>
                  <select className="form-control form-control-lg" name='vote' onChange={handleChangeInVote}>
                  <option className="dropdown-item">select vote</option>
                  {
                    voteList.map((vot,index)=>{
                    return(<option  className="dropdown-item" key={index} value={vot.vote} >{vot.vote}</option>)                       
                  }
                  )
                  }</select>
                  <br/><br/>
                  <button type="submit" className="btn btn-primary">submit</button>  
                </form>)
              
          }else{
              return(<br/>)
          }
         
      }
    return (
        <div className="container">
        <form onSubmit={mySubmitHandler} className="form-group">
        <select className="form-control form-control-md" name='course' onChange={handleChange}>

        <option className="dropdown-item">Select Course</option>
        {
        courses.map((course,index)=>{
        return(<option className="dropdown-item" key={index} value={course.value} >{course.label}</option>)                   
        })
        }

      </select>
      <br/><br/>
      <button type="submit" className="btn btn-primary">submit</button>        

        </form>

        <VotesFormDb/>


        </div>
    )
}

export default Demo17
