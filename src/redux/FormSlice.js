import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const FormSlice = createSlice({
  name: "Details",
  initialState,
  reducers: {
    formSubmit: (state, action) => {
      //    state.users.push(action.payload);
      if (action.payload) {
        return {
          ...state,
          users: [...state.users, action.payload],
        };
      }
    },
    deleteButton: (state, action)=>{
        if (action.payload){
            return{
                ...state,
                users:state.users.filter((item, index) => index !== action.payload)
            }
        }
    }
  },
});
export const { formSubmit } = FormSlice.actions;

export default FormSlice.reducer;
