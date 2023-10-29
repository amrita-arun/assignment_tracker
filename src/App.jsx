import './App.css'
import TaskDetail from './components/TaskDetail'
import TaskComponent from './components/TaskComponent'
import HomePage from './components/HomePage'
import { useEffect, useState } from 'react'


function App() {
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
  return (
    <>
    <div className= 'space-x-6 p-5 flex bg-slate-500'>
      <div className='w-1/4'>
        <TaskDetail />
      </div>
      <div className='w-3/4'>
        <HomePage />
      </div>
      
    </div>
      {/*<HomePage />*/}
    </>
  )
}

export default App
