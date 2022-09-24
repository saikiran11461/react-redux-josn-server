import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "./actiontypes"



const userLoginRequest=()=>{
    return{
        typE:USER_LOGIN_REQUEST,
    }
}
const userLoginSuccess=()=>{
    return{
        typE:USER_LOGIN_SUCCESS,
    }
}
const userLoginFailuer=()=>{
    return{
        typE:USER_LOGIN_FAILURE,
    }
}