import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    name: '',
    password: '',
    fullname: '',
  };

const initialStateForString = {
    string: '',
}

const loginReducer = createSlice({
    name:"loginreducer",
    initialState,
    reducers:{
        LoginDetail(state, action) {
            return{
                name : action.payload.name,
                password : action.payload.password,
                fullname : action.payload.fullname,
            }
        }
    }

})


export const {LoginDetail} = loginReducer.actions
export default loginReducer.reducer;
