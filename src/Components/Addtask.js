import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addition } from '../redux/actions/ToDoAction' 
import { v4 as uuidv4 } from 'uuid';
import './Task.css'
const Addtask = () => {
    const x=useRef();
    const dispatch=useDispatch();
    return (
    <div className=' addtask'  >
        
            <input placeholder='description' ref={x}></input>
            <button onClick={()=>dispatch(addition({id:uuidv4(),description:x.current.value,isDone:false}))}>Add a new task</button>
        
    </div>
  )
}

export default Addtask