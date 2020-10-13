export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const DELETE_AUTHED_USER = "DELETE_AUTHED_USER";
export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET";
export const EMPTY_BASKET = "EMPTY_BASKET"

export function setUser(user) {
  return {
    type: SET_AUTHED_USER,
    user,
  };
}

export function deleteUser() {
  return {
    type: DELETE_AUTHED_USER,
  };
}
export function addToBasket(item) {
  return {
    type: ADD_TO_BASKET,
    item,
  };
}

export function removeFromBasket(item) {
  return {
    type: REMOVE_FROM_BASKET,
    item,
  };
}

export function emptyBasket(){
  return {
    type : EMPTY_BASKET
  }
}