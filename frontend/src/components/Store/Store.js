
import { configureStore, createSlice } from '@reduxjs/toolkit';

const toggleSlice=createSlice({
    name:'login_register_toggle',
    initialState:{want_to_login:true},
    reducers:{
        login(state){
            // islogin:!state.islogin
            state.want_to_login=true;
        },
        register(state){
            state.want_to_login=false;
        }
    }
});

const store=configureStore({
    reducer:{toggle:toggleSlice.reducer}
});

export const toggleActions=toggleSlice.actions;

export default store;