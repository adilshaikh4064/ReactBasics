import { useState } from 'react'
//this is the way you import the hooks from react.

import './App.css'

/*
  this is the example to demonstrate the use of hooks[propogation of change] and
  props[reusing of component].

*/

function App() {

  let [counter_name, setCounter_name]=useState(5);

  //let counter=5;
  const addValue=function(){
    //console.log('functionAdd called', Math.random());
    ++counter_name;
    setCounter_name(counter_name);
    /*
    setCounter_name((counter_name)=>(++counter_name))
    setCounter_name((counter_name)=>(++counter_name))
    setCounter_name((counter_name)=>(++counter_name))
    -> setCounter_name(callback function) takes as an argument 
      and which in further, takes the previous input of counter_name
      as its input and it will cause the counter variable to be increased;
    */

    /*
    setCounter_name(counter+1)
    setCounter_name(counter+1)
    setCounter_name(counter+1)
    -> what does the fiber(core of react- implementation) do is that it creates the small packets or 
        bundles of task and send it to multiple nodes. it packets all of the [setCounter_name] in the same packet
        which causing the same operation to happen. this is the special property of fiber called dipping.
        which doesn't causes the change in the state of variable.
     */
  }
  const removeValue=function(){
    --counter_name;
    setCounter_name(counter_name);
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter_name}</h2>

      <button 
        onClick={addValue} >Add value: {counter_name}</button>
      <button
        onClick={removeValue}>Remove value: {counter_name} </button>
    </>
  )
}

export default App