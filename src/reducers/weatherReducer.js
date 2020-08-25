import {
  LOAD_WEATHER_START,
  LOAD_WEATHER_SUCCESS,
  LOAD_WEATHER_FAILURE,
} from '../actions/types';

let initialState = {
  weathers: {},
  isLoading: false,
  error: null,
};

const weathersdata = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_WEATHER_START:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_WEATHER_SUCCESS:
      return {
        ...state,
        weathers: action.payload,
        isLoading: false,
      };
    case LOAD_WEATHER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};


export default weathersdata;