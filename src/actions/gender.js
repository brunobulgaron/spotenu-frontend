import axios from 'axios';
import { push } from "connected-react-router";
import { routes } from '../screens/Router';

const baseURL = 'https://27xzpwuldg.execute-api.us-east-1.amazonaws.com/dev/';

export function setGender(gendersFromApi){
    return{
        type: 'SET_GENDER',
        payload:{
            genders: gendersFromApi
        }
    }
}

export function setGenderDetails(genderDetailsFromApi){
    return{
        type: 'SET_GENDER_DETAILS',
        payload:{
            genderDetails: genderDetailsFromApi
        }
    }
}


export const getGenders = (token) => async (dispatch) =>{

    const response = await axios.get(
        `${baseURL}genre/allGenres`,{
            headers:{"authorization": token}
        }    
    );
    
    dispatch(setGender(response.data.result));
}

export const createGender = (token, body) => async (dispatch) =>{

    try{
        const response = await axios.post(
            `${baseURL}genre/createGenre`,body,{
                headers:{"authorization": token}
            }
        )
        dispatch(getGenders(token));
        dispatch(push(routes.manageGenders));
        
    }catch(error){
        alert(JSON.stringify(error.response.data.error));
    }
}