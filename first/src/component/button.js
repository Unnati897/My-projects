import React from 'react'
import { useDispatch } from 'react-redux'
import { decrease, increase } from '../action/action';

export default function Button() {
const dispatch =useDispatch();

  return (
    <div>
<button onClick={()=>dispatch(increase())}>increase</button>
<button onClick={()=>dispatch(decrease())}>decrease</button>

    </div>
  )
}