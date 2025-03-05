
import './App.css'

import React, { useEffect, useRef, useState } from 'react'

function App() {
   const [count, setcount]=useState(0);
let val= useRef(0);
let btnRef=useRef();
   function handleIncrement(){
val.current=val.current+1;
console.log("value of var",val.current);

     setcount(count+1);
   }
   // it runs on every render
   useEffect(()=>{
     console.log('useEffect called');
   })

   function Changecolor(){
      btnRef.current.style.backgroundColor='red';
  }
    
  return (
    <div>
      <button ref={btnRef}  onClick={handleIncrement}>
         increment
      </button>
      <br></br>
      <button onClick={Changecolor}>
         Change color
      </button>
       <div>
         Count : {count}
       </div>
    </div>
  )
}

export default App
