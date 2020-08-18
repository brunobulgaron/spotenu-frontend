import axios from 'axios';
import { push } from "connected-react-router";
import { routes } from '../screens/Router';

const baseURL = 'https://27xzpwuldg.execute-api.us-east-1.amazonaws.com/dev/';

export function setUser(usersFromApi){
    return{
        type: 'SET_USER',
        payload:{
            users: usersFromApi
        }
    }
}

export const getUserById = (token) => async (dispatch) =>{

    const response = await axios.get(
        `${baseURL}user/getUserById`,{
            headers:{"authorization": token}
        }    
    );    

    dispatch(setUser(response.data.result));
}