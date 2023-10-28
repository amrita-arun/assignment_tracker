import React from 'react'
import TaskDetail from './TaskDetail'
import TaskComponent from './TaskComponent'


const HomePage = () => {
  return (
    <div className='grid grid-cols-9 grid-rows-6 p-5 bg-slate-500'>
      <div className='col-span-4'>
        <TaskDetail />
      </div>
      <div className='col-span-3'>
        <TaskComponent />
      </div>

      
    </div>
  )
}

export default HomePage