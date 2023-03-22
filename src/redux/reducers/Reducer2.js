import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    string: '',
};

const stringReducer = createSlice({
    name: 'stringReducer',
    initialState,
    reducers:{
        stringvalue(state,action){
            return{
                string: action.payload.string,
            }
        }
    }
})

export const {stringvalue} = stringReducer.actions
export default stringReducer.reducer