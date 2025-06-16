import React, { useState } from 'react'

function Action() {
  const [name,setName]=useState('Santhosh')
  const [count,setCount]=useState(0)

    function x(a){
        setName('Jana')
    }
  return (
    <div>
        <h1>Hello{name}</h1>
        <button onClick={x}> Click Action</button>

        <h4>No of Count:{count}</h4>
        <button onClick={()=>setCount(count+1)}>Incre</button>
        <button onClick={()=>setCount(count-1)}>Dec</button>
    </div>
  )
}

export default Action