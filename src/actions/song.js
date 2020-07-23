import axios from 'axios';
import { push } from "connected-react-router";
import { routes } from '../screens/Router';

export function setSong(songsFromApi){
    return{
        type: 'SET_SONG',
        payload:{
            songs: songsFromApi
        }
    }
}

export const getAllSongs = (token) => async (dispatch) =>{

    const response = await axios.get(
        `http://localhost:5000/song/getAllSongs`,{
            headers:{"authorization": token}
        }    
    );
    
    dispatch(setSong(response.data.result));
}

export const createSong = (token, body) => async (dispatch) =>{

    try{
        const response = await axios.post(
            `http://localhost:5000/song/createSong`,body,{
                headers:{"authorization": token}
            }
        )        
        dispatch(push(routes.manageSongs));
        alert(JSON.stringify((response.data.message)));
        
    }catch(error){
        alert(JSON.stringify(error.message));
    }
}