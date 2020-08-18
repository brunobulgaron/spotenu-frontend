import axios from 'axios';
import { push } from "connected-react-router";
import { routes } from '../screens/Router';

const baseURL = 'https://27xzpwuldg.execute-api.us-east-1.amazonaws.com/dev/';

export const signUpUserFree = (body) => async (dispatch) => {
    try{
        const response = await axios.post(`${baseURL}user/signup`, body)
       
        alert("Usuário cadastrado com sucesso!");
        localStorage.setItem("token", response.data.token.token);
        dispatch(push(routes.root));

    }catch(error){
        alert(JSON.stringify(error.response.data.error));
    };
};

export const signUpUserBand = (body) => async (dispatch) => {
    try{
        const response = await axios.post(`${baseURL}user/signupBand`, body)

        alert(response.data.token.message);
        dispatch(push(routes.dashboardBand));

    }catch(error){
        alert(JSON.stringify(error.response.data.error));
    };
};

export const signUpUserAdmin = (body) => async (dispatch) => {
    try{
        const response = await axios.post(`${baseURL}user/signupAdmin`, body)
        
        alert("Administrador cadastrado com sucesso!");
        dispatch(push(routes.adminPanel));

    }catch(error){        
        alert(JSON.stringify(error.response.data.error));        
    };
};

export const login = (body) => async (dispatch) => {
    try{
        const response = await axios.post(`${baseURL}user/login`, body)
        
        localStorage.setItem("token", response.data.tokenTeste.resultTeste);
        dispatch(push(routes.dashboardBand));
        window.location.reload();
    }catch(error){
        alert(JSON.stringify(error.response.data.error));
        // alert(error);
    };
};