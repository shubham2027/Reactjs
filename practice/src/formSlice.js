import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    formData: {
        name: '',
        password: ''
    }
}
const reducer = createSlice({
    name: 'form',
    initialState,
    reducers:{
        setFormData: (state, action) => {
            state.formData = action.payload;
        },
        resetForm:(state)=> {
            state.formData = {name: '', password: ''};
            
        }
    }


})

export const {setFormData, resetForm} = formSlice.actions;

export default formSlice.reducer;