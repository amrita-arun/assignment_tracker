import React from 'react'
import TaskDetail from './TaskDetail'
import TaskComponent from './TaskComponent'


const HomePage = () => {
  return (
    <div className= 'p-5 flex bg-slate-500'>
        <div className='w-1/4'>
          <TaskDetail />
        </div>
        <div className='w-3/4'>
          <TaskComponent />
        </div>
        
    </div>
  )
}

export default HomePage