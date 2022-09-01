
import { configureStore, createSlice, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { composeWithDevTools } from "redux-devtools-extension";
const reduxLogger=require('redux-logger');
const logger=reduxLogger.createLogger();
// const applyMiddleware=redux.applyMiddleware;

const toggleSlice = createSlice({
    name: 'login_register_toggle',
    initialState: { want_to_login: true },
    reducers: {
        login(state) {
            // islogin:!state.islogin
            state.want_to_login = true;
        },
        register(state) {
            state.want_to_login = false;
        }
    }
});


const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
  const userLoginSlice = createSlice({
    name: 'login_red',
    initialState :{
        userLogin: { userInfo:userInfoFromStorage,loading:false,
            error:""},
        
    },
    reducers: {
        USER_LOGIN_REQUEST(state,action) { 
            state.userLogin.loading = true;
        },
        USER_LOGIN_SUCCESS(state,action) {
              state.userLogin.loading=false;
             state.userLogin.userInfo= action.payload ;  // imp line userInfo is inside userLogin 
        },
          USER_LOGIN_FAIL(state,action) {
              state.userLogin.loading=false;
               state.userLogin.error= action.payload ;
        },
           USER_LOGOUT(state,action) {
        },
    }
})

const store = configureStore({
    reducer: { toggle: toggleSlice.reducer,login:userLoginSlice.reducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger,thunk),
    // do not forget this
    devTools: process.env.NODE_ENV !== 'production',
});

export const toggleActions = toggleSlice.actions;
export const loginActions = userLoginSlice.actions;

export default store;