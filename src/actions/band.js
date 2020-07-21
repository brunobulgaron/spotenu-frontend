import axios from 'axios';

export function setBand(bandsFromApi){
    return{
        type: 'SET_BAND',
        payload:{
            bands: bandsFromApi
        }
    }
}

export const getBands = (token) => async (dispatch) =>{

    const response = await axios.get(
        `http://localhost:5000/band/allBands`,{
            headers:{"authorization": token}
        }    
    );

    dispatch(setBand(response.data.allBands));
}