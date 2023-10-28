import React, { useState } from 'react'

const TaskDetail = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
    <aside>
      <div className="pt-6 pb-7 grid grid-rows-5 gap-7 justify-items-stretch w-[300px] h-[1000px] opacity-80 bg-blue-300 rounded-[25px]">
        <div id="timer" className="pt-4 row-span-2 justify-self-center w-[245px] bg-zinc-500 rounded-[25px]">

        </div>
        <div id="assignment-details" className="pt-4 row-span-4 justify-self-center w-[245px] bg-zinc-500 rounded-[25px]">

        </div>
      </div>
    </aside>
    </>
  )
}

export default TaskDetail