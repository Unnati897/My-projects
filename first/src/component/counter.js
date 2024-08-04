import React from 'react'
import {useSelector} from 'react-redux'

export default function Counter() {

  const counter= useSelector(state=>state.count)
  return (
    <div>
<h1>Counter is {counter}</h1>

    </div>
  )
}