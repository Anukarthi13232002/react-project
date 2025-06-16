import React, { useState } from 'react'

function Toggle() {
    const[toggle,setToggle]=useState(false)

  return (
    <div className='box'>
        <h2>welcome</h2>
        <p>hii hello welcome to all</p>
        <div style={{display:toggle?'block':'none'}}>
            <p>hii hello welcome to all Check the render method of `App`. It was passed a child from List. </p>
        </div>
        <button onClick={()=>{setToggle(!toggle)}}>
          {toggle?'readless':'readmore'}</button>
    </div>
  )
}

export default Toggle