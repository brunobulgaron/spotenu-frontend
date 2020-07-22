const initialState={
    albums: []    
}

const album = (state = initialState, action) =>{
    switch(action.type){
        case "SET_ALBUM":{
            return{
                ...state,
                albums: action.payload.albums
            }
        }
        default:
            return state;
    }
}

export default album;