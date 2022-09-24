import { accessData, saveData } from "../../utils/aooLocalStirage";
import { ADD, REDUCE, TODO_FAILUERE, TODO_REQUEST, TODO_SUCCESS } from "./actionTypes";
const init={
    counter:accessData('counter') || 2,
    todos:[],
    isLoading:false,
    isError:false
}
export const reducer=(oldstate=init,action)=>{
    const {type,payload} = action
    switch(type){
        case ADD:
            saveData("counter",oldstate.counter+payload)
            return{...oldstate,counter:oldstate.counter+payload}
        case REDUCE:
            saveData("counter",oldstate.counter-payload)
            return{...oldstate,counter:oldstate.counter-payload}
        case TODO_REQUEST:
            return{...oldstate,isLoading:true,isError:false }
        case TODO_SUCCESS:
            saveData("todos",oldstate.todos)
            return{...oldstate,isLoading:false,isError:false,todos:payload}
        case TODO_FAILUERE:
            return{...oldstate,isError:true,isLoading:false,todos:[]}
        default:
            return oldstate;
    }
}