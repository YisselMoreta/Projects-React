import React from 'react';
import {Link} from 'react-router-dom';
import SignInLinks from './SignInLinks.jsx';
import SignOutLinks from './SignOutLinks.jsx';
import {connect} from 'react-redux';

const Navbar = (props) => {
   const {auth, profile} = props;
   console.log(auth)
   const links = auth.uid ? <SignInLinks profile={profile}/> : <SignOutLinks/>;
    return(
       <nav className="nav-wrapper teal lighten-1">
          <div className="container">
            <Link to="/" className="brand-logo center">Projects launching</Link>
            {links}

          </div> 


       </nav>

    )

}
const mapStateToProps =(state)=>{
   console.log(state)
   return {
      auth: state.firebase.auth,
      profile: state.firebase.profile
   }
}
export default connect(mapStateToProps) (Navbar);