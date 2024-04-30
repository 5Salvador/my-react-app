import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Slide from './Components/Slide/Slide'
import 'bootstrap/dist/css/bootstrap.min.css';
import Collections from './Components/Collections/Collections';
import Programs from './Components/Collections/Programs';
import Footer from './Components/Footer/Footer';
import Icons from './Components/NavBar/Icons';
import { Preloader } from './Components/Preloader/Preloader';


const App = () => {
  return (

  

    

    <div>


       <Icons />
       <NavBar />
       <Slide />
       <Programs />
       <Footer />
      </div> 
    
 
    
  )
}

export default App