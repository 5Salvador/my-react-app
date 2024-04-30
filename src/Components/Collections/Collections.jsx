import React from 'react'
import './Collections.css'
import maduro3 from '../../assets/maduro3.jpg'
import maduro15 from '../../assets/maduro15.jpg'
import maduro16 from '../../assets/maduro16.jpg'
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

const Collections = () => {
  return (
    <div className='collections'>
        <div className="collection">
            <img src={maduro3} alt="" />
            <div className="caption">
            <p>PUSH</p>
        </div>
     </div>
     <div className="collection">
            <img src={maduro15} alt="" />
            <div className="caption">
            <p className='desc'>JEREMIAH 333</p>
        </div>
     </div>
     <div className="collection">
            <img src={maduro16} alt="" />
            <div className="caption">
            <p className='desc'>PUSH</p>
        </div>
     </div>
</div>


  )
}

export default Collections