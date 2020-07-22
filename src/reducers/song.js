const initialState={
    songs: []    
}

const song = (state = initialState, action) =>{
    switch(action.type){
        case "SET_SONG":{
            return{
                ...state,
                songs: action.payload.songs
            }
        }
        default:
            return state;
    }
}

export default song;