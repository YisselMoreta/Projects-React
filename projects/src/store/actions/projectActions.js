 const creatProject = (project)=>{
    return(dispatch, getState, {getFirebase,getFirestore})=>{
        //llamada a la bbdd async
        const firestore = getFirestore();
        firestore.collection ('projects').add({
            ...project,
            authorFirstName: 'my',
            authorLastName: 'self',
            authorId: 12345,
            cratedAt: new Date()
        }).then(()=>{
            dispatch({type: 'CREATE_PROJECT'}, project);
        }).catch(err=>{
            dispatch({type: 'CREATE_PROJECT_ERROR'}, err);
        });
        
    }
}

export default creatProject;