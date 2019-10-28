import React, { Component } from 'react'
import Notifications from './Notifications.jsx';
import ProjectList from '../projects/ProjectList.jsx';



export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className="dashboard container">
                    <div className="row">
                        <div className="col s12 m6">
                            <ProjectList/>
                        </div>
                            <div className="s12 m5 offset-m1">
                                <Notifications />
                            </div>

                        
                    </div>
                </div>
            </div>
        )
    }
}


