import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset, incrementByAmount } from '../Redux/counterSlice'

const Counter = () => {
  const [amount,setAmount] = useState(0)
  const dispatch = useDispatch()
  const {count} = useSelector(state=>state.counterReducer)  
  const handleIncrementByAmount = () =>{
    if (amount) {
      dispatch(incrementByAmount(Number(amount)))
      // amountBox.value=""
      // setAmount(0)
    } else {
      alert("Please Enter Amount!!")
    }
  }
  
  return (
    <div>
      <h1 className='text-center '>COUNTER APP</h1>
      <div className='border p-5 rounded mt-5' style={{width:"800px"}}>
        <h1 className='text-center' style={{fontSize:"80px"}}>{count}</h1>
        <div className="d-flex justify-content-around  align-items-center  mt-3 w-100 ">
            <button onClick={()=>dispatch(decrement())} className='btn btn-warning '>DECREMENT</button>
            <button onClick={()=>dispatch(reset())} className='btn btn-danger '>RESET</button>
            <button onClick={()=>dispatch(increment())} className='btn btn-success '>INCREMENT</button>
        </div>
        <div className="d-flex justify-content-between align-items-center  mt-5 w-100 ">
            <input id='amountBox' onChange={e=>(setAmount(e.target.value))} type="text" className='form-control' placeholder='Incremented counter amount'/>
            <button onClick={handleIncrementByAmount} className='btn btn-primary ms-2'>INCREMENT BY AMOUNT</button>
        </div>
      </div>
    </div>
  )
}

export default Counter