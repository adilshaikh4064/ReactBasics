import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  let [password,setPassword]=useState('')
  let [length,setLength]=useState(8)
  let [numberAllowed,setNumberAllowed]=useState(false)
  let [charAllowed,setCharAllowed]=useState(false)

  //useRef Hook
  const passwordRef=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "`!@#$%^&*-_=+[]{}~`";

    for(let i=1; i<=length; i++){
      let idx=Math.floor(Math.random()*str.length+1)
      pass += str.charAt(idx);
    }
    setPassword(pass)
    str = "";

  },[length,numberAllowed,charAllowed,setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  const copyPassword=useCallback(()=>{
    passwordRef.current?.select();
    //passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password)
  },[password])


  return (
    <>
      <div className="bg-slate-900 h-screen text-center">
        <div className='relative top-10 mx-auto w-[40vw] px-5 py-5 bg-gray-500 shadow-lg rounded-lg'>
            <h1 className='text-3xl shadow-md font-bold mb-2 px-1'>Password Generator</h1>
          <div className='flex mb-3'>
            <input
              type='text'
              className='outline-none w-full py-1 rounded-l-md pl-3'
              value={password}
              placeholder='  Password'
              readOnly
              ref={passwordRef}
            ></input>
            <button className='bg-blue-400 rounded-r-md px-2 
              hover:bg-blue-600 focus:border-sky-500 cursor-pointer'
              onClick={copyPassword}
              >Copy</button>
          </div>

          <div className='mt-2 flex justify-between'>
            <div className='flex'>
              <label htmlFor='slider' className='ml-2 mr-1'>Length:{length}</label>
              <input
              className='mr-2 cursor-pointer'
              id='slider'
              type='range'
              min={6}
              max={50}
              value={length}
              onChange={(e)=>{
                setLength(e.target.value)
              }}
              ></input>
            </div>
            
            <div>
              <label htmlFor='numberInput'className='ml-2 mr-1' >Numbers:</label>
              <input
              className='mr-2'
              type='checkbox'
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={()=>{
                setNumberAllowed((prev)=>!prev)
              }}
              ></input>
            </div>

            <div>
              <label htmlFor='charInput' className='ml-2 mr-1'>Characters:</label>
              <input
                className='mr-2'
                type='checkbox'
                defaultChecked={charAllowed}
                id='charInput'
                onChange={()=>{
                  setCharAllowed((prev)=>!prev)
                }}
                ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
