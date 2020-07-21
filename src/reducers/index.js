import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import gender from './gender';
import band from './band';

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    gender: gender,
    band: band
  });