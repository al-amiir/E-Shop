import { createSlice } from "@reduxjs/toolkit";
import { filterDataFunc } from "../../Js/Global/globalFunc";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    clientArray: [],
    dataArray: [],
  },
  reducers: {
    filter: (state, recived) => {
      //   state.clientArray = recived.payload;
      console.log(recived.payload);
      //   filterDataFunc(state.clientArray, state.dataArray);
    },
  },
});

// Action creators are generated for each case reducer function
export const { filter } = filterSlice.actions;

export default filterSlice.reducer;
