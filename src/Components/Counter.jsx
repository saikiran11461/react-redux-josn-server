import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCount, reduceCount } from '../Redux/AppReducer/actionCreater'

const Counter = () => {
    const count = useSelector((store)=>{
      return store.AppReducer.count
    })
    const dispatch = useDispatch()
  return (
    <div>
        <h1>counter:{count}</h1>
        <button onClick={()=>dispatch(addCount(1))}>ADD</button>
        <button onClick={()=>dispatch(reduceCount(2))}>REDUCE</button>
    </div>
  )
}

export default Counter