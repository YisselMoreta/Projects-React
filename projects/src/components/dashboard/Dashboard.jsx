import React, { Component } from 'react'
import Notifications from './Notifications.jsx';
import ProjectList from '../projects/ProjectList.jsx';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';

 class Dashboard extends Component {
    render() {
        // console.log(this.props);
        const {projects, auth, notifications} = this.props;
        if (!auth.uid) return <Redirect to="/signin"/>
            
        
        return (
            <div>
                <div className="dashboard container">
                    <div className="row">
                        <div className="col s12 offset-m l10 ">
                            <ProjectList projects={projects}/>
                        </div>
                            <div className="s6 m5 l6 offset-m1">
                                <Notifications notifications={notifications} />
                            </div>

                        
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    console.log(state)
    return{
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notification
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'},
        {collection: 'notification', limit: 3}
    ])
)(Dashboard)

