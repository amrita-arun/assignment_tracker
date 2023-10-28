import './App.css'
import TaskDetail from './components/TaskDetail'
import TaskComponent from './components/TaskComponent'
import HomePage from './components/HomePage'


function App() {
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
