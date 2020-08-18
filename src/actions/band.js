import axios from 'axios';
import { push } from "connected-react-router";
import { routes } from '../screens/Router';

const baseURL = 'https://27xzpwuldg.execute-api.us-east-1.amazonaws.com/dev/';

export function setBand(bandsFromApi){
    return{
        type: 'SET_BAND',
        payload:{
            bands: bandsFromApi
        }
    };
};

export const getBands = (token) => async (dispatch) =>{

    const response = await axios.get(
        `${baseURL}band/allBands`,{
            headers:{"authorization": token}
        }    
    );

    dispatch(setBand(response.data.allBands));
};

export const getAllUnapprovedBands = (token) => async (dispatch) => {
    
    const response = await axios.get(
        `${baseURL}band/getAllUnapprovedBands`,{
            headers:{"authorization": token}
        }    
    );

    dispatch(setBand(response.data.allUnapprovedBands));
};

export const approveBand = (id) => async (dispatch) => {
    try{
        const body = {}
        const token = localStorage.getItem("token");
    
        const response = await axios.post(
            `${baseURL}band/approve/${id}`, body, {
                headers: {"authorization": token}
            }
        );
        
        alert(response.data.message);
        dispatch(getAllUnapprovedBands(token));
        dispatch(push(routes.manageBands));

    }catch(error){
        alert(JSON.stringify(error.message));
    };
};