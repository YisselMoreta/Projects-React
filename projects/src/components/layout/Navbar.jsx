import React from 'react';
import {Link} from 'react-router-dom';
import SignInLinks from './SignInLinks.jsx';
import SignOutLinks from './SignOutLinks.jsx';

const Navbar = () => {
    return(
       <nav className="nav-wrapper grey darken-3">
          <div className="container">
            {/* <Link to="/" className="brand-logo">Yissel Moreta</Link> */}
            <SignInLinks/>
            <SignOutLinks/>

          </div> 


       </nav>

    )

}
export default Navbar;