import React from 'react';
import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp }) {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


  return (
    <div>
      <div className='pb-3 text-3xl/8'>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      {/*<p>{isRunning ? 'Running' : 'Not running'}</p>*/}
      <div className=' grid grid-rows-4 gap-2 h-[130px] justify-self-center justify-center'>
        <div className='w-[50px] rounded-[10px] bg-blue-300'>
          <button onClick={start}>Start</button>
        </div>
        <div className='w-[70px] rounded-[10px] bg-blue-300'>
          <button onClick={pause}>Pause</button>
        </div>
        <div className='w-[80px] rounded-[10px] bg-blue-300'>
          <button onClick={resume}>Resume</button>
        </div>
        <div className='rounded-[10px] bg-blue-300'>
          <button onClick={() => {
            // Restarts to 5 minutes timer
            const time = new Date();
            time.setSeconds(time.getSeconds() + 1500);
            restart(time)
          }}>Restart</button>
        </div>
        
      </div>
      
    </div>
  );
}

export default function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 1500); // 10 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}