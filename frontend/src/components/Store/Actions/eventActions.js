import { getType } from "@reduxjs/toolkit";
import axios from "axios";
import { eventActions, loginActions } from "../Store";
export const listEvents = () => async (dispatch) => {
  try {
    dispatch(eventActions.EVENT_LIST_REQUEST());
    const userInfo=JSON.parse(localStorage.getItem('userInfo'));
    const token=userInfo.token;
    const config = {
      headers: {

        Authorization: `Bearer ${token}`,   //only Bearer token is accepted so we send token
      },
    };
  
    const { data } = await axios.get("api/events", config);
    dispatch(eventActions.EVENT_LIST_SUCCESS(data));
  } catch (error) {
    console.log("error");
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch(eventActions.EVENT_LIST_FAIL(message));
  }
};
