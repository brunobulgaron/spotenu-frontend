import axios from 'axios';
import { push } from "connected-react-router";
import { routes } from '../screens/Router';

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
        `http://localhost:5000/band/allBands`,{
            headers:{"authorization": token}
        }    
    );

    dispatch(setBand(response.data.allBands));
};

export const getAllUnapprovedBands = (token) => async (dispatch) => {
    
    const response = await axios.get(
        `http://localhost:5000/band/getAllUnapprovedBands`,{
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
            `http://localhost:5000/band/approve/${id}`, body, {
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