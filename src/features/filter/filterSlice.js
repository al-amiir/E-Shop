import { createSlice } from "@reduxjs/toolkit";
import { filterDataFunc, sortingFunc } from "../../Js/Global/globalFunc";
import TEST_DATA from "../../TEST_DATA";
export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    value: 0,
    clientArray: [],
    dataArray: TEST_DATA,
  },

  reducers: {
    filter: (state, recived) => {
      state.dataArray = filterDataFunc(recived.payload, TEST_DATA);
    },
    sort: (state, recived) => {
      state.dataArray = sortingFunc(state.dataArray, recived.payload);
    },
  },
});

export const { filter, sort } = filterSlice.actions;
export default filterSlice.reducer;
