import React from 'react'

const AddTaskForm = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') onClose();
  }
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center item-center' id="wrapper" onClick={handleClose}>
      <div className='w-[600px] flex flex-col'>
        <button className='text-white text-xl place-self-end' onClick={() => onClose()}>X</button>
        <div className='bg-white p-2 rounded grid grid-rows-6'>{children}</div>
      </div>
    </div>
  )
}

export default AddTaskForm