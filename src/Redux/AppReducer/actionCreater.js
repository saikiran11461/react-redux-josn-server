import { ADD, POST_TOD_FAILUERE, POST_TOD_REQUEST, POST_TOD_SUCCESS, REDUCE, TODO_FAILUERE, TODO_REQUEST, TODO_SUCCESS } from "./actionTypes"

export const addCount=(payload)=>{
    return{
        type:ADD,
        payload,
    }
}
export const reduceCount=(payload)=>{
    return{
        type:REDUCE,
        payload
    }
}

export const todoRequest=()=>{
    return{
        type:TODO_REQUEST
    }
}
export const todoSuccess=(payload)=>{
    return{
        type:TODO_SUCCESS,
        payload
}
    }
export const todoFailuer=()=>{
    return{
        type:TODO_FAILUERE
    }
}


export const todoPostRequest=()=>{
    return{
        type:POST_TOD_REQUEST
    }
}
export const todoPostSuccess=(payload)=>{
    return{
        type:POST_TOD_SUCCESS,
        payload
    }
}
export const todoPostFailuer=()=>{
    return{
        type:POST_TOD_FAILUERE
    }
}