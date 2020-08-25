import {
  LOAD_WEATHER_START,
  LOAD_WEATHER_SUCCESS,
  LOAD_WEATHER_FAILURE,
} from './types';
import getLogoutClient from '../func/loggedOutClient';

import {apiKey, lon, lat} from '../func/globals';

const loadWeather = (units) => async (dispatch, getState) => {
  dispatch({type: LOAD_WEATHER_START});
  const stranger = getLogoutClient();
  stranger
    .get('/onecall?lat='+lat+'&lon='+lon+'&exclude=hourly,minutely&appid='+apiKey+units)
    .then((response) => {
      console.log('RESPONSE', response.data)
      dispatch({type: LOAD_WEATHER_SUCCESS, payload: response.data});
    })
    .catch(function (error) {
      dispatch({type: LOAD_WEATHER_FAILURE, payload: error});
    });
};

export default {
  loadWeather,
};
