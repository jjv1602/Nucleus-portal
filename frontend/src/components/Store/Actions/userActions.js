  import axios from "axios";
  import { loginActions } from '../Store';
  export const login = (email, password) => async (dispatch) => {
    try {
      dispatch(loginActions.USER_LOGIN_REQUEST());
  
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
  
      const { data } = await axios.post(
        "/api/users/login",
        { email, password },
        config
      );
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      dispatch(loginActions.USER_LOGIN_SUCCESS(data));
  
      
    } catch (error) {
      dispatch(
        loginActions.USER_LOGIN_FAIL(
          error.response && error.response.data.message
          ? error.response.data.message
          : error.message));
    }
  };
  
  // export const logout = () => async (dispatch) => {
  //   localStorage.removeItem("userInfo");
  //   // dispatch(loginActions.USER_LOGOUT());
  // };
  
  // export const register = (name, email, password, pic) => async (dispatch) => {
  //   try {
  //     // dispatch(loginActions.USER_REGISTER_REQUEST());
  
  //     const config = {
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //     };
  
  //     const { data } = await axios.post(
  //       "/api/users",
  //       { name, pic, email, password },
  //       config
  //     );
  
  //     // dispatch(loginActions.USER_REGISTER_SUCCESS(data));
  
  //     // dispatch(loginActions.USER_LOGIN_SUCCESS(data));
  
  //     localStorage.setItem("userInfo", JSON.stringify(data));
  //   } catch (error) {
  //     dispatch({
  //       type: USER_REGISTER_FAIL,
  //       payload:
  //         error.response && error.response.data.message
  //           ? error.response.data.message
  //           : error.message,
  //     });
  //   }
  // };
  
  // export const updateProfile = (user) => async (dispatch, getState) => {
  //   try {
  //     // dispatch(loginActions.USER_UPDATE_REQUEST());
  
  //     const {
  //       userLogin: { userInfo },
  //     } = getState();
  
  //     const config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${userInfo.token}`,
  //       },
  //     };
  
  //     const { data } = await axios.post("/api/users/profile", user, config);
  
  //     dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
  
  //     dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
  
  //     localStorage.setItem("userInfo", JSON.stringify(data));
  //   } catch (error) {
  //     dispatch({
  //       type: USER_UPDATE_FAIL,
  //       payload:
  //         error.response && error.response.data.message
  //           ? error.response.data.message
  //           : error.message,
  //     });
  //   }
  
  
  
