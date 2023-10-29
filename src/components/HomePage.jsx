import React, { Fragment, useState } from 'react'
import TaskDetail from './TaskDetail'
import TaskComponent from './TaskComponent'
import Timer from './Timer'
//import Datetime from 'react-datetime';
import NewTask from './NewTask';
import AddTaskForm from './AddTaskForm';


const HomePage = () => {
  return (
    <>
    <div className='space-y-3 pt-6 pl-6 pr-6 justify-items-stretch h-[800px] opacity-80 bg-blue-100 rounded-[25px]'>
      <TaskComponent />
      <NewTask />
      
    </div>
    
    {/*
    <div className= 'space-x-6 p-5 flex bg-slate-500'>
        <div className='w-1/4'>
          <TaskDetail />
        </div>
        <div className='w-3/4'>
          <TaskComponent />
        </div>
        
    </div>
  */}
    </>
  
  )
}

export default HomePage
