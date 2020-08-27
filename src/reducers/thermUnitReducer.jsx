import {GET_THERM_UNIT} from "../actions/types";

let initialState = {
  unit: "Celsius",
};

const thermUnit = (state = initialState, action) => {
  switch (action.type) {
    case GET_THERM_UNIT:
      return {
        ...state,
        unit: action.payload
      };
    default:
      return state;
  }
};

export default thermUnit;
