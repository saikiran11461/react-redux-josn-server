import axios from 'axios'
import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { todoFailuer, todoPostFailuer, todoPostRequest, todoPostSuccess, todoRequest, todoSuccess } from '../Redux/AppReducer/actionCreater';
import Todo from './Todo';

const AddTodo = () => {
    const dispatch = useDispatch();
    const{todos,isError,isLoading }= useSelector(store=>{
        return{
            todos:store.AppReducer.todos,
            isLoading:store.AppReducer.isLoading,
            isError:store.AppReducer.isError
        }
    },shallowEqual)
    useEffect(()=>{
        getTodos()
    },[])

    const getTodos=()=>{
        dispatch(todoRequest())
     return  axios.get('http://localhost:8080/todos')
        .then(res=>{
            dispatch(todoSuccess(res.data))
        })
        .catch(err=>{
           dispatch(todoFailuer())
        })
    }
    // console.log(todos)
    const addTodo=(text)=>{
       if(text){
         const payload={
            text,
            stats:false
         }
         dispatch(todoPostRequest())
         return axios.post('http://localhost:8080/todos',payload)
         .then(res=>{
            dispatch(todoPostSuccess())
         })
         .catch(err=>{
            dispatch(todoPostFailuer())
         })
       }
    }


    const handleAddTodo=(text)=>{
        addTodo(text)
        .then(()=>getTodos())
        .then(()=>{
            console.log('success')
        })
    }
  return (
    <div>
        <Todo handleAddTodo={handleAddTodo}/>
        {isLoading && <h1>Loading.....</h1>}
       <h1>todos</h1>
       {
        todos.map((item)=><h1 key={item.id}>{item.text}-{item.status?"TRUE":"FALSE"}</h1>)
       }
    </div>
  )
}

export default AddTodo