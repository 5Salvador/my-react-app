import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarBrand,
} from 'mdb-react-ui-kit';
import logo from '../../assets/logo.jpg';
import './NavBar.css';
import { Link } from "react-router-dom";
import Icons from './Icons';

export default function App() {
  const [openNavRight, setOpenNavRight] = useState(false);

  return (
    <div>
      
      <Icons />
      <MDBNavbar expand='lg' light bgColor='white' className='fixed-top'>
        <MDBContainer fluid>
          <MDBNavbarBrand href=''><Link to="/" className='link'>
          <img src={logo} alt="" className='logo'/>
          MADURO
          </Link>
            
          </MDBNavbarBrand>

          <MDBNavbarToggler
            type='button'
            data-target='#navbarRightAlignExample'
            aria-controls='navbarRightAlignExample'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenNavRight(!openNavRight)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar open={openNavRight} class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <MDBNavbarNav right fullWidth={false} className='ms-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page'><Link to="/" className='link'>INICIO</Link>
               
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current><Link to="/push"  className='link'>PUSH</Link></MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'><Link to="/jeremias" className='link'>JEREMIAH 333</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'><Link to="/about" className='link'>SOBRE-NOS</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='contact'><Link to="/contact" className='link'>CONTACTE-NOS</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}
