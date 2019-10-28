import React from 'react';
import {NavLink} from 'react-router-dom';

const SignOutLinks = () => {
    return(
       <ul className="rigth">
           <li><NavLink to="/">SignUp</NavLink></li>
           <li><NavLink to="/">Log In</NavLink></li>
         
         
       </ul>

    )

}
export default SignOutLinks;