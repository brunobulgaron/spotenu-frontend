const initialState={
    bands: []
}

const band = (state = initialState, action) =>{
    switch(action.type){
        case "SET_BAND":{
            return{
                ...state,
                bands: action.payload.bands
            }
        }
        
        default:
            return state;
    }
}

export default band;