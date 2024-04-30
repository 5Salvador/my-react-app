import React from 'react'
import maduro7 from '../../assets/maduro7.jpg'
import nelson22 from '../../assets/nelson22.jpg'
import nelson from '../../assets/nelson.jpg'

const Content = () => {
  return (
    <div>
        <div className="container">
            <div className="row justify-content-center">
                <h1 className='text-black text-center mt-5 display-3'><strong>Sobre a Maduro Clothing</strong></h1>
                <p className='text-center text-black mt-3 h5'>Em novembro de 2019, entramos no mercado, não em busca de clientes, mas sim em busca de almas para alcançar 
                e impactar com o evangelho de Deus que pregamos, nunca vendemos roupas, 
                sempre foi e é nosso maior foco oferecer esperança, falar de coisas sobrenaturais que passam desapercebidas em nossas vidas.</p>
                <div className="col-md-10 mt-5">
                    <img src={maduro7}
                    className='img-fluid ' alt="" />
                </div>
                <div className="col-md-12">
                    <h4 className='text-black text-center mt-4'>Conheça o nosso CEO</h4>
                    <div className="row justify-content-center">
                        <div className="col-md-3 mt-4">
                            <img src={nelson} className='img-fluid'alt="" />
                        </div>
                        <div className="col-md-3 mt-4">
                            <img src={nelson22} className='img-fluid' alt="" />
                        </div>
                    </div>
                    <p className='text-center text-black mt-3 h5'>Nascido da visão empreendedora e do talento criativo de Nelson Francisco Muzila, 
                    a Maduro Clothing Company emergiu como uma potência na indústria da moda. Com uma paixão ardente por design e qualidade, Muzila transformou seu sonho em realidade,
                    criando uma marca que transcende o comum e reflete um estilo distinto e sofisticado.</p>

                </div>


            </div>
        </div>
    </div>
  )
}

export default Content