import React from 'react'
import { useState } from 'react'
import './Header.css'

function Header() {
  const [course,setCourse]=useState(false)
  const [pro,setPro] =useState(false)

  return (
    <div>
      <button  className="course-button" onClick={()=>setCourse(!course)}>{course?'Course':'Course'}</button>
      <div 
      style={{display:course?'block':'none'}}>
             <div className='container'> 
              <h1 className='container-head'>Courses</h1>

              <div className='container-flex'>
                <div className='container-flex1'>
                  <div>
                      <button className="pro" onClick={()=>setPro(!pro)}>{pro?'Programming ':'Prog'}</button>
                        <div 
                        style={{display:pro?'block':'none'}} >
                          <div className='container-flex2'>
                         
                      <button className='fullstack'>Full stack<span>{'>'}</span></button>
                      <button className='dig'>Digital Marketing<span>{'>'}</span></button>
                      <button className='data'>Data Anlytics<span>{'>'}</span></button>
                      <button className='cloud'>Cloud computing<span>{'>'}</span></button>
                      <button className='it'>It Security<span>{'>'}</span></button>
                      <button className='web'>Web Development<span>{'>'}</span></button>
                      <button className='ui'>UI/UX Designing<span>{'>'}</span></button>
                      <button className='dd'>Database Development<span>{'>'}</span></button>
                      <button className='mpd'>Mobile App Development<span>{'>'}</span></button>
                      <button className='st'>Software Testing<span>{'>'}</span></button>
                      <button className='rpa'>RPA<span>{'>'}</span></button>
                      <button className='auto'>Industry Automation<span>{'>'}</span></button>
                  </div>
                </div>
                </div>
                </div>
              </div>
            </div>
      </div>
      
     
    </div>
  )
}

export default Header