//import { useState } from 'react'
import Chai from './Chai.jsx'

function App() {
  //const [count, setCount] = useState(0)
  const anotherUser='evaluated expression in JS'

  return (
    //fragments in React
    //this is the way to inject evaluated expression in JS
    <>
      <h1>hello world!</h1>
      <Chai/>
      <p>this is paragraph tag {anotherUser}</p>
    </>
  )
}

export default App;