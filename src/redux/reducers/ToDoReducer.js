import { v4 as uuidv4 } from 'uuid';
const ToDoReducer=(state=[{id:uuidv4(),description:"one to one",isDone:false},{id:uuidv4(),description:"checkpoint",isDone:false}],action)=>{
    switch (action.type) {
        case "ADDITION":
           return [...state,action.payload]
            break;
        case "EDIT":
          return state.map(el=>(el.id===action.payload.id)? {...el,description:action.payload.description,isDone:action.payload.isDone} : el)
            break;
        default:
            return state
            break;
    }
}
export default ToDoReducer