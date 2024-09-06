
import { useState } from "react"

function App() {

  let [color,setColor]=useState('black')

  return (
    <>
      <div className="h-[100vh] w-[100vw] cd
          grid justify-center content-end" style={{backgroundColor:color}}>
        <div className=" h-min w-max rounded-xl bg-slate-400 mb-12">
          <button className=" inline-black mx-4 rounded-xl w-[80px] h-auto mt-4 mb-4 text-center text-white bg-red-600"
            onClick={()=>{setColor('red')}}
          >Red</button>
          <button className=" inline-black mx-4 rounded-xl w-[80px] h-auto mt-4 mb-4 text-center text-white bg-green-500"
            onClick={function(){setColor('green')}}
          >Green</button>
          <button className=" inline-black mx-4 rounded-xl w-[80px] h-auto mt-4 mb-4 text-center text-white bg-yellow-500"
            onClick={()=>(setColor('yellow'))}
          >Yellow</button>
          <button className=" inline-black mx-4 rounded-xl w-[80px] h-auto mt-4 mb-4 text-center text-white bg-blue-500"
            onClick={()=>setColor('blue')}
          >Blue</button>
          <button className=" inline-black mx-4 rounded-xl w-[80px] h-auto mt-4 mb-4 text-center text-white bg-green-900"
          onClick={()=>(setColor('olive'))}
          >Olive</button>
          <button className=" inline-black mx-4 rounded-xl w-[80px] h-auto mt-4 mb-4 text-center text-white bg-gray-500" onClick={()=>setColor('gray')}>Gray</button>
          <button className=" inline-black mx-4 rounded-xl w-[80px] h-auto mt-4 mb-4 text-center text-white bg-pink-500" onClick={()=>setColor('pink')}>Pink</button>
          <button className=" inline-black mx-4 rounded-xl w-[80px] h-auto mt-4 mb-4 text-center text-white bg-purple-500" onClick={()=>setColor('purple')}>Purple</button>
          <button className=" inline-black mx-4 rounded-xl w-[80px] h-auto mt-4 mb-4 text-center text-white bg-slate-500" onClick={()=>setColor('lavender')}>Lavender</button>
          <button className=" inline-black mx-4 rounded-xl w-[80px] h-auto mt-4 mb-4 text-center text-black bg-white" onClick={()=>setColor('white')}>White</button>
          <button className=" inline-black mx-4 rounded-xl w-[80px] h-auto mt-4 mb-4 text-center text-white bg-black" onClick={()=>setColor('black')}>Black</button>
        </div>
      </div>
    </>
  )
}

export default App
