import {
  LOAD_WEATHER_START,
  LOAD_WEATHER_SUCCESS,
  LOAD_WEATHER_FAILURE,
  LOAD_WEATHER_EVERY3HOURS_START,
  LOAD_WEATHER_EVERY3HOURS_SUCCESS,
  LOAD_WEATHER_EVERY3HOURS_FAILURE,
  GET_THERM_UNIT,
} from "./types";
import getLogoutClient from "../func/loggedOutClient";

import { apiKey, lon, lat } from "../func/globals";

const loadWeather = (units) => async (dispatch, getState) => {
  dispatch({ type: LOAD_WEATHER_START });
  const stranger = getLogoutClient();
  stranger
    .get(
      "/onecall?lat=" +
        lat +
        "&lon=" +
        lon +
        "&exclude=hourly,minutely&appid=" +
        apiKey +
        units
    )
    .then((response) => {
      dispatch({ type: LOAD_WEATHER_SUCCESS, payload: response.data });
    })
    .catch(function (error) {
      dispatch({ type: LOAD_WEATHER_FAILURE, payload: error });
    });
};

const loadWeatherEvery3Hours = (units, cityname) => async ( dispatch, getState) => {
  dispatch({ type: LOAD_WEATHER_EVERY3HOURS_START });
  const stranger = getLogoutClient();
  stranger
    .get("/forecast?q=" + cityname + "&appid=" + apiKey + units)
    .then((response) => {
      dispatch({
        type: LOAD_WEATHER_EVERY3HOURS_SUCCESS,
        payload: response.data,
      });
    })
    .catch(function (error) {
      dispatch({ type: LOAD_WEATHER_EVERY3HOURS_FAILURE, payload: error });
    });
};

const getThermUnit = (unit) => (dispatch, getState) =>{
  dispatch({
    type: GET_THERM_UNIT,
    payload: unit,
  });
}

export default {
  loadWeather,
  loadWeatherEvery3Hours,
  getThermUnit
};
