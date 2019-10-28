 const creatProject = (project)=>{
    return(dispatch, getState)=>{
        //llamada a la bbdd async
        dispatch({type: 'CREATE_PROJECT', project})
    }
}

export default creatProject;