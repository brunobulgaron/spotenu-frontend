const initialState={
    users: []    
}

const user = (state = initialState, action) =>{
    switch(action.type){
        case "SET_USER":{
            return{
                ...state,
                users: action.payload.users
            }
        }
        default:
            return state;
    }
}

export default user;