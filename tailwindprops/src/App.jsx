import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj={
    name:"siddu",
    roll:34
  }
  let myArr=[3,2,4]
  let name='siddu'

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 mb-4 rounded-xl ">Tailwind Test</h1>
      {/* <Card username={'chai aur react'} someArr={[1,2,3]}  someObj={{name: 'adil shikh', roll:12}}/> */}
      <Card username={name} someArr={myArr} someObj={myObj} />
      <Card/>
      <Card/>
    </>
  )
}

export default App
