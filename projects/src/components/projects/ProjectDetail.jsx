import React from 'react';

const ProjectDetail =(props)=> {
    const id = props.match.params.id;
        return (
            <div className="container section project-details">
                <div className="card z-depth-o">
                  <div className="card-content">
                      <span className="card-title">Projectt Tittle-{id}</span>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, reprehenderit. Numquam voluptatem esse quibusdam tenetur.</p>
                      </div> 
                      <div className="card-action grey ligthen-4 grey-text">
                         <div>Posted by</div>
                         <div>Fecha</div>
                          </div> 
                </div>
            </div>
        )
    
}

export default ProjectDetail;