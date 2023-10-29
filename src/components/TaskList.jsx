import React from 'react'

const [backendData,setBackendData] = useState([{}])
  useEffect(()=>{
    fetch("/").then(
      Response=>Response.json()
    ).then(
      data=>{
        setBackendData(data)
      }
    )
  },[])
const TaskList = () => {
  return (
    <div>TaskList</div>
    
    
  )
}

export default TaskList