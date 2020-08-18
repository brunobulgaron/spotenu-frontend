import axios from 'axios';
import { push } from "connected-react-router";
import { routes } from '../screens/Router';

const baseURL = 'https://27xzpwuldg.execute-api.us-east-1.amazonaws.com/dev/';

export function setAlbum(albumsFromApi){
    return{
        type: 'SET_ALBUM',
        payload:{
            albums: albumsFromApi
        }
    }
}

export const getAlbums = (token) => async (dispatch) =>{

    const response = await axios.get(
        `${baseURL}album/getAllAlbums`,{
            headers:{"authorization": token}
        }    
    );
    
    dispatch(setAlbum(response.data.result));
}

export const getAlbumsByCreatedBy = (token) => async (dispatch) =>{

    const response = await axios.get(
        `${baseURL}album/getAlbumsByCreatedBy`,{
            headers:{"authorization": token}
        }    
    );
    
    dispatch(setAlbum(response.data.result));
}

export const createAlbum = (token, body) => async (dispatch) =>{

    try{
        const response = await axios.post(
            `${baseURL}album/createAlbum`,body,{
                headers:{"authorization": token}
            }
        )        
        dispatch(getAlbums(token));
        dispatch(push(routes.manageAlbums));
        
    }catch(error){
        alert(JSON.stringify(error.message));
    }
}