import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { edit } from '../redux/actions/ToDoAction';
import './Task.css'
const Task = ({props}) => {
  const y=useRef();
  const z=useRef();
  const dispatch=useDispatch();
  
  return (
   
        <div className='container'>
            {/* <h1 className='title'>{props.id}</h1> */}
            <h1>{props.description}</h1>
            {/* <h1>{ (props.isDone)? "done" :"not done"}</h1> */}
            <input className='input' placeholder=' new description' ref={y}></input>
            <input type='checkbox' ref={z}></input>
            

            <button onClick={()=>  {(!y.current.value)? dispatch(edit({description:props.description,id:props.id,isDone:z.current.checked})):dispatch(edit({description:y.current.value,id:props.id,isDone:z.current.checked})) }}>Edit the task</button>
        </div>
    
  )
}

export default Task