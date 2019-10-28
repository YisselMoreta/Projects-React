const initState = {
    projects: [
       {id: '1', title:'help', conten: 'lorem'},
       {id: '2', title:'so', conten: 'baaa'}, 
       {id: '3', title:'me', conten: 'luis'}, 


    ]
}

const projectReducer = (state = initState, action)=>{
    return state
}

export default projectReducer;