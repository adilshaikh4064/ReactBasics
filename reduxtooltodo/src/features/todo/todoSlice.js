import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[
        {id:1,text:"hello world!"}
    ]
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload 
                //or, {text:action.payload.text} because again field and passed value 
                // in the payload have same name. 
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>(todo.id !==action.payload))
        },
        updateTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>(
                //todo.id===action.payload.id?(todo.text=action.payload.text,true):true
                todo.id===action.payload.id?
                {...todo,text:action.payload.text}:todo
            ))
        },
    }
})

export const {addTodo,removeTodo,updateTodo}=todoSlice.actions
export default todoSlice.reducer