import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function increaseHandler(){
    setCount(count + 1);
  }

  function decreaseHandler(){
    if(count>=1)
      setCount(count - 1);
  }

  function resetHandler(){
    setCount(0);
  }

  return (
    <div className='flex flex-col items-center justify-center  h-[100vh] w-[100vw] gap-10 bg-blue-900
    '>
      <div className='text-cyan-300 font-bold text-[25px]'>Increment and Decrement</div>
    <div className='bg-slate-200 flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]'>
      <button onClick={decreaseHandler} className='b-r-2 text-center w-20 border-[#bfbfbf] text-5xl'>-</button>
      <div className='font-bold gap-12 text-5xl'>
        {count}
      </div>
      <button onClick={increaseHandler} className='b-r-2 text-center w-20 border-[#bfbfbf] text-5xl'>+</button>
    </div>
    <div>
      <button onClick={resetHandler} className='b-r-2 text-center w-auto border-[#bfbfbf] text-3xl text-white bg-black px-3'>Reset</button>
    </div>
      </div>
  );
}

export default App
