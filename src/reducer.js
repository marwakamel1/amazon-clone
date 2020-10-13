import { combineReducers } from "redux";
import {
  SET_AUTHED_USER,
  DELETE_AUTHED_USER,
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  EMPTY_BASKET,
} from "./actions";
import { loadingBarReducer } from "react-redux-loading";

const initialState = {
  basket: [],
  authedUser: null,
  loadingBar: loadingBarReducer,
  totalPrice: 0,
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return { ...state, authedUser: action.user };
    case DELETE_AUTHED_USER:
      return { ...state, authedUser: null };
    case ADD_TO_BASKET:
      return {
        ...state,
        basket: state.basket.concat(action.item),
        totalPrice: state.totalPrice + action.item.price,
      };
    case REMOVE_FROM_BASKET:
      const index = state.basket.findIndex(
        (item) => item.id === action.item.id
      );
      let newBasket = [...state.basket].filter((item, i) => i !== index);
      return {
        ...state,
        basket: newBasket,
        totalPrice: state.totalPrice - action.item.price,
      };
    case EMPTY_BASKET : 
      return {...state,basket:[],totalPrice:0}
    default:
      return state;
  }
}
