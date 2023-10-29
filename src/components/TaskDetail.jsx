import React, { useState } from 'react'
import Timer from './Timer'

const TaskDetail = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
    <aside>
      <div className='space-y-6 p-6 justify-items-stretch h-[800px] opacity-80 bg-blue-300 rounded-[25px]' >
        <div id="timer" className="pt-4 pb-4 h-[200px] justify-self-center bg-zinc-500 rounded-[25px]">
          <Timer />
        </div>
        <div id="assignment-details" className="pb-4 pt-4 h-[523px] justify-self-center bg-zinc-500 rounded-[25px]">

        </div>
      </div>
    </aside>

    {/*
    <aside>
      <div className="pt-6 pb-7 grid grid-rows-5 gap-7 justify-items-stretch w-[300px] h-[1000px] opacity-80 bg-blue-300 rounded-[25px]">
        <div id="timer" className="pt-4 row-span-2 justify-self-center w-[245px] bg-zinc-500 rounded-[25px]">

        </div>
        <div id="assignment-details" className="pt-4 row-span-4 justify-self-center w-[245px] bg-zinc-500 rounded-[25px]">

        </div>
      </div>
    </aside>
  */}
    </>
  )
}

export default TaskDetail