import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logo from '../../assets/logo.jpg'

const Footer = () => {
  return (
    <div>
       <MDBFooter bgColor='white' className='text-center text-lg-start text-dark'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Voce pode encontrar-nos nas seguintes redes sociais:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='dark' fab icon='facebook-f'/>
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='dark' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='dark' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='dark' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='dark' fab icon='linkedin' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className=' fw-bold mb-4'>
                <img style={{height:'40                                                                                               px'}}
                src={logo} alt="" />
                Maduro Empreendimentos
              </h6>
              <p>
                Alguns Reis e Rainhas nao vestem coroas, mas sim a Maduro.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Coleções</h6>
              <p>
                <a href='#!' className='text-reset'>
                 Push
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Jeremiah 333
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Classic
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Malibongwe
                </a>
              </p>
            </MDBCol>


            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>CONTACTE-NOS</h6>
              <p>
                <MDBIcon color='dark' icon='home' className='me-2' />
                Maputo, Mozambique
              </p>
              <p>
                <MDBIcon color='dark' icon='envelope' className='me-3' />
                info@example.com
              </p>
              <p>
                <MDBIcon color='dark' icon='phone' className='me-3' /> + 258 84 3600 565
              </p>
              <p>
                <MDBIcon color='dark' icon='print' className='me-3' /> + 258 84 3600 555
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
         Maduro.co.mz
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer