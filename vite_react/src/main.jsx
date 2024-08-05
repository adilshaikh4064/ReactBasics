import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>
        this is the custom vite react jsx.
      </h1>
    </div>
  )
}

// const reactElement={
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children:'click to open google'
// }

const anontherElement=(
  <a href="https://google.com" target='_blank'>visit google</a>
)

const anotherUser=' this is evaluated expression'
const  reactElement=React.createElement(
  'a',
  {
    href:'https://google.com', 
    target:'_blank'
  },
  'click me to go to google search engine.',
  anotherUser   // this is what we call it as [evaluated expression in JS]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  //anontherElement
  //reactElement
  //<App/>
  App()
)
