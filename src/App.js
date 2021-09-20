import React, { useState } from "react";
import 'tachyons';

function App() {
  const [count, setCount] = useState(0)
  const[lswitch, setlSwitch] = useState('on')
  const decrement = () => {
    setCount(previousCount => previousCount -1)
  }
  const increment = () => {
    setCount(previousCount => previousCount +1)
  }
  const on_off = () => {
    if(lswitch === 'on'){
      setlSwitch('off')
    } else {
      setlSwitch('on')
    }
  }
  return (
    <div >
      <div className='flex items-center justify-center pa4 bg-green '>
        <h1>This is an basic counting App created using React Hooks</h1>
      </div>
      <div className='flex items-center justify-center pa4 bg-lightest-blue navy'>
        <button style={{fontSize: '30px'}}className='ba pa3' onClick={decrement}>-</button>
        <span style={{fontSize: '30px'}} className='ba pa3'>{count}</span>
        <button style={{fontSize: '30px'}} onClick={increment} className='ba pa3'>+</button>
      </div>
      
      <div className='flex items-center justify-center pa4 bg-green'>
        <h1>Down here is a basic on and off switch that you can toggle.</h1>
      </div>
      <div className='flex items-center justify-center pa4 bg-lightest-blue navy'> 
        <button style={{fontSize: '30px'}}className='ba pa3' onClick={on_off}>{lswitch}</button>
      </div>
    </div>
  );
}

export default App;
