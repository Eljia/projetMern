import { SET_LOADING } from "../const";
import { AJOUT_ANNONCE_SUCCESS, AJOUT_FAIL } from "../const/productconst";

const initialState = {
  product: null,
  isLoading: false,
  success: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case AJOUT_ANNONCE_SUCCESS:
      return { ...state, isLoading: true, product: payload, success: true };
    case AJOUT_FAIL:
      return { ...state, product: null, isLoading: true, success: false };
    default:
      return state;
  }
};
