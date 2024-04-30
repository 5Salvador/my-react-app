import React from 'react'
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

const Icons = () => {
  return (
    <div>
     <MDBNavbar expand='lg' light bgColor='white' className=''>
        <MDBContainer fluid>
          <MDBNavbarNav className='d-flex flex-row  justify-content-center'>
            <MDBNavbarItem className='me-3 me-lg-0'>
              <MDBNavbarLink href='#'>
                <MDBIcon fab icon="facebook" color="dark"/>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='me-3 me-lg-0'>
              <MDBNavbarLink href='https://www.instagram.com/_maduro/'>
              <MDBIcon fab icon="instagram" color="dark"/>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='me-3 me-lg-0'>
              <MDBNavbarLink href='#'>
                <MDBIcon fab icon='twitter' color="dark"/>
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>

    </div>
  )
}

export default Icons