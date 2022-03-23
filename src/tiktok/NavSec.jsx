import React from "react";
import logo from './tiktokl.png'

function NavSec (){
    return(
        <>
         <div className="nav">
             <div className="header__content">
                 <div className="navbar__logo">
                     <a href="#">
                         <img className="navbar-logo"  src={logo} alt="" />
                     </a>
                 </div>
                 <div className="search">
                     <form>
                         <input 
                         type="text"
                         className="searchInput"
                         placeholder="Search account"
                         />
                     </form>
                 </div>
                 <div className="navigations">
                     <li className="navItem">
                         <a href="#">Upload</a>
                     </li>
                     <button className="login">
                         Log in
                     </button>
                 </div>
             </div>
         </div>
        </>
    )
}

export default NavSec