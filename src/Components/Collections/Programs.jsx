import React from 'react'
import './Programs.css'
import maduro3 from '../../assets/maduro3.jpg'
import maduro15 from '../../assets/maduro15.jpg'
import maduro16 from '../../assets/maduro16.jpg'

const Programs = () => {
  return (
    <div className='programs'>
       <div className="program">
        <img src={maduro3} alt="" />
        <div className="caption">
          <p>CLASSIC</p>
        </div>
       </div>
       <div className="program">
        <img src={maduro15} alt="" />
        <div className="caption">
          <p>JEREMIAH 333</p>
        </div>
       </div>
       <div className="program">
        <img src={maduro16} alt="" />
        <div className="caption">
          <p>PUSH</p>
        </div>
       </div>
    </div>
  )
}

export default Programs