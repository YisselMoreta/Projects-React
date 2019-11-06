import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../../store/actions/authActions';

const SignInLinks = (props) => {
    
    return(
       <ul id="nav-mobile" className="left " >
           <li><NavLink to="/create">New Project</NavLink></li>
           <li><button className="logOut"  onClick={props.signOut}>Log Out</button ></li>
           <li><NavLink to="/" className="btn btn-floating blue lighten-1">
               {props.profile.initials}
           </NavLink></li>
           
       </ul>

    )

}
const mapDispatchToProps = (dispatch)=>{
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(null, mapDispatchToProps) (SignInLinks);