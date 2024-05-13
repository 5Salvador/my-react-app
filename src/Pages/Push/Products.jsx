import React from 'react'
import maduro1 from '../../assets/maduro1.jpg'
import maduro55 from '../../assets/maduro55.jpg'
import maduro563 from '../../assets/maduro563.jpg'
import maduro557 from '../../assets/maduro557.jpg'
import maduro559 from '../../assets/maduro559.jpg'
import maduro558 from '../../assets/maduro558.jpg'
import maduro564 from '../../assets/maduro564.jpg'
import maduro580 from '../../assets/maduro580.jpg'


const Products = () => {
  return (
    <div className="container py-5">
     <h1 className="text-black text-center display-3"><strong>Push coleção</strong></h1>

     <div className="row row-cols-1 row-cols-md-3 g-4 py-5 ">
     <div className="col">
        <div className="card ">
            <img src={maduro563}  className="card-img-top pe-auto" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Maduro Clothes</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
           <div className="d-flex justify-content-around mb-5">
            <h3> 120 MZN</h3>
            <a href="#" className="btn btn-primary">Comprar</a>
           </div>
          </div>
        </div>
        <div className="col">
            <div className="card">
                <img src={maduro557} style={{height:'480px'}} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Maduro Clothes</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
               <div className="d-flex justify-content-around mb-5">
                <h3> 120 MZN</h3>
                <a href="#" className="btn btn-primary">Comprar</a>
               </div>
              </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src={maduro559} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Maduro Clothes</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                   <div className="d-flex justify-content-around mb-5">
                    <h3> 120 MZN</h3>
                    <a href="#" className="btn btn-primary">Comprar</a>
                   </div>
                  </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={maduro558} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">Maduro Clothes</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                       <div className="d-flex justify-content-around mb-5">
                        <h3> 120 MZN</h3>
                        <a href="#" className="btn btn-primary">Comprar</a>
                       </div>
                      </div>
                    </div>
                    <div className="col">
                    <div className="card">
                        <img src={maduro580} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">Maduro Clothes</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                       <div className="d-flex justify-content-around mb-5">
                        <h3> 120 MZN</h3>
                        <a href="#" className="btn btn-primary">Comprar</a>
                       </div>
                      </div>
                    </div>
                    <div className="col">
                    <div className="card">
                        <img src={maduro564} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">Maduro Clothes</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                       <div className="d-flex justify-content-around mb-5">
                        <h3> 120 MZN</h3>
                        <a href="#" className="btn btn-primary">Comprar</a>
                       </div>
                      </div>
                    </div>
                    <p className='text-black text-center '>PRAY UNTIL SOMETHING HAPPENS</p>
                </div>
     </div>
  )
}

export default Products