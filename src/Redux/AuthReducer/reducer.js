import { type } from "@testing-library/user-event/dist/type"
import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "./actiontypes";

const init={
    isAuth:false,
    Token:"",
    isAuthLoading:false
}
export const reducer =(oldstate= init,action)=>{
    const {type,payload} = action;
    switch(type){
        case USER_LOGIN_REQUEST:
            return{...oldstate,isAuthLoading:true}
        case USER_LOGIN_SUCCESS:
            return{...oldstate,isAuthLoading:false,Token:payload,isAuth:true}
        case USER_LOGIN_FAILURE:
            return{...oldstate,isAuthLoading:false,Token:"",isAuth:false}
        default:
            return oldstate
    }
}