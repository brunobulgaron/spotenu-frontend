import axios from 'axios';
import { push } from "connected-react-router";
import { routes } from '../screens/Router';

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
        `http://localhost:5000/user/getUserById`,{
            headers:{"authorization": token}
        }    
    );    

    dispatch(setUser(response.data.result));
}