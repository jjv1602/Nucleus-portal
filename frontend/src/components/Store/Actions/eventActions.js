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


// imp variable names declared in backend event model and event controller should be same as declared here 
export const createEventAction=(title_of_event,content,time_of_event,date_of_event)=> async (dispatch) => {
  try {
    dispatch(eventActions.EVENT_CREATE_REQUEST());

    const userInfo=JSON.parse(localStorage.getItem('userInfo'));
    const token=userInfo.token;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,   //only Bearer token is accepted so we send token
      },
    };
  
    const { data } = await axios.post(`api/events/create`,{title_of_event,content,time_of_event,date_of_event},config);
    dispatch(eventActions.EVENT_CREATE_SUCCESS(data));
    window.location.reload(false);   // imp so that this event displays at bottom of the page
  } catch (error) {
    console.log("error");
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch(eventActions.EVENT_CREATE_FAIL(message));
  }
};


export const listuserCreatedEvents = () => async (dispatch) => {
  try {
    dispatch(eventActions.EVENT_LIST_REQUEST());
    const userInfo=JSON.parse(localStorage.getItem('userInfo'));
    const token=userInfo.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,   //only Bearer token is accepted so we send token
      },
    };
  
    const { data } = await axios.get("api/events/get", config);
    console.log(data);
    dispatch(eventActions.USER_CREATED_Events(data));
  } catch (error) {
    console.log("error");
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch(eventActions.EVENT_LIST_FAIL(message));
  }

};