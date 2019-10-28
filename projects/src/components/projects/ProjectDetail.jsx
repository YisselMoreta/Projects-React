import React from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';
import moment from 'moment';


const ProjectDetail =(props)=> {
    const{project, auth} = props;
   
    if (!auth.uid) return <Redirect to="/signin"/>
    if(project) {
        return(
            <div className="container section project-details">
        <div className="card z-depth-o">
          <div className="card-content">
              <span className="card-title">{project.title}</span>
              <p>{project.content}</p>
              </div> 
              <div className="card-action grey ligthen-4 ">
                 <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                 <div>{moment(project.cratedAt.toDate()).calendar()}</div>
                  </div> 
        </div>
    </div>
        )
    } else {
        return (
          <div className="container center">
              <p>loading...</p>
          </div> 
        )
    }
        
    
}

const mapStateToProps = (state, ownProps) =>{
    // console.log(state)
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null

    return {
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(ProjectDetail);