import axios from 'axios';
import { push } from "connected-react-router";
import { routes } from '../screens/Router';

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
        `http://localhost:5000/album/getAllAlbums`,{
            headers:{"authorization": token}
        }    
    );
    
    dispatch(setAlbum(response.data.result));
}

export const getAlbumsByCreatedBy = (token) => async (dispatch) =>{

    const response = await axios.get(
        `http://localhost:5000/album/getAlbumsByCreatedBy`,{
            headers:{"authorization": token}
        }    
    );
    
    dispatch(setAlbum(response.data.result));
}

export const createAlbum = (token, body) => async (dispatch) =>{

    try{
        const response = await axios.post(
            `http://localhost:5000/album/createAlbum`,body,{
                headers:{"authorization": token}
            }
        )        
        dispatch(getAlbums(token));
        dispatch(push(routes.manageAlbums));
        // alert(JSON.stringify((response.data.message)));
        
    }catch(error){
        alert(JSON.stringify(error.message));
    }
}