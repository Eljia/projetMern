import {
  AJOUT_ANNONCE_SUCCESS,
  AJOUT_FAIL,
  SET_LOADING,
} from "../const/productconst";
import axios from "axios";
export const addproduct =
  (
    name,
    numero,
    address,
    tarifJ,
    tarifS,
    tarifM,
    caution,
    message,
    ville,
    category
  ) =>
  async (dispatch) => {
    dispatch({ type: SET_LOADING });
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      let { data } = await axios.post(
        "/product/add",
        {
          name,
          numero,
          address,
          tarifJ,
          tarifS,
          tarifM,
          caution,
          message,
          ville,
          category,
        },
        config
      );

      dispatch({
        type: AJOUT_ANNONCE_SUCCESS,
        payload: data, // name , pic ,email, password
      });
    } catch (error) {
      dispatch({
        type: AJOUT_FAIL,
      });
    }
  };
