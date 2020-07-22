import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import gender from './gender';
import band from './band';
import album from './album';
import song from './song';
import user from './user';

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    gender: gender,
    band: band,
    album: album,
    song: song,
    user: user
  });