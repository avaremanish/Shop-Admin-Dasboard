import React from 'react'
import { Link } from 'react-router-dom'

export default function Sliderbar() {
  return (
 
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Admin Shopping<sup>2</sup></div>
    </a>

    <hr className="sidebar-divider my-0"/>

   
    <li className="nav-item active">
        <Link className="nav-link" to="/dashboard"> 
        <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Shopping</span> </Link>
      
            
    </li>

   
    <hr className="sidebar-divider"/>



   
    <li className="nav-item">
        <Link className="nav-link collapsed" to="/employees">  
        <i className="fas fa-fw fa-cog"></i>
            <span>VERSACE</span>
             </Link>
       
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Custom Components:</h6>
                <a className="collapse-item" href="buttons.html">Buttons</a>
                <a className="collapse-item" href="cards.html">Cards</a>
            </div>
        </div>
    </li>

    <li className="nav-item">
        <Link  className="nav-link collapsed" to="/about"> 
        <i className="fas fa-fw fa-wrench"></i>
            <span>To-do-list</span> </Link>
       
      
    </li>

  
   

   
  

   

</ul>
        
        
  )
}
