import React from 'react'

function Videohead() {
  return (
    <div>
      <video  controls height="900" width="1300">
        <source src='background video.mp4' type='video/mp4'/>
      </video>
    </div>
  )
}

export default Videohead