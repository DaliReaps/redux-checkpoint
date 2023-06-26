import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'
import { useState } from 'react'

const Listtask = () => {
  
    const elem1=useSelector(state=>state.ToDoReducer)
    const [sear,setsear]=useState(2)

  return (

    <div className='box'>
      <h1 style={{textAlign:'center'}}>List of tasks</h1>
        {elem1.filter(el=>(sear===0)? el.isDone===false : (sear===1)? el.isDone===true : el).map(el=> <Task props={el}/>)}
        <div className='filter'> <button onClick={()=>setsear(0)}> Filter by not Done </button>
        <button onClick={()=>setsear(1)   }>Filter by Done </button>
        <button onClick={()=> setsear(2) }> Show All </button></div>
       
            </div>
  )
}

export default Listtask