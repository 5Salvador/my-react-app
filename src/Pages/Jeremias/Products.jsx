import React from 'react'
import maduro15 from '../../assets/maduro15.jpg'

const Products = () => {
  return (
    <div className="container py-5">
     <h1 className="text-black text-center display-3"><strong>Jeremias 333 coleção</strong></h1>

     <div className="row row-cols-1 row-cols-md-3 g-4 py-5">
     <div className="col">
        <div className="card">
            <img src={maduro15} style={{height:'450px'}} className="card-img-top" alt="..." />
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
                <img src={maduro15} style={{height:'450px'}} className="card-img-top" alt="..." />
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
                    <img src={maduro15} style={{height:'450px'}} className="card-img-top" alt="..." />
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
                        <img src={maduro15} style={{height:'450px'}} className="card-img-top" alt="..." />
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
                </div>
           </div>
  )
}

export default Products