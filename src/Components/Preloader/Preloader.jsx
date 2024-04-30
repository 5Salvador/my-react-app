import React from 'react'
import './Preloader.css'
import { useEffect } from 'react'
import { preLoaderAnim } from '../animations/index'
import logo from '../../assets/logo.jpg'


export const Preloader = () => {
    
    useEffect(()=>{
        preLoaderAnim()
    },[]);


  return (
     <div class="loader">
        <div></div> 
        <div></div>
        <div></div>
        <div></div>
     </div>
  )
}

export default Preloader