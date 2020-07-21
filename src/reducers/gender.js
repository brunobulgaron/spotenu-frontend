const initialState={
    genders: [],
    genderDetails: []
}

const gender = (state = initialState, action) =>{
    switch(action.type){
        case "SET_GENDER":{
            return{
                ...state,
                genders: action.payload.genders
            }
        }
        case "SET_GENDER_DETAILS":{
            return{...state, genderDetails: action.payload.genderDetails}
        }
        default:
            return state;
    }
}

export default gender;