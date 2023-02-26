import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ExampleSlice {
  name: string;
}

const initialState: ExampleSlice = {
  name: "",
};

const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
});

export const { setName } = exampleSlice.actions;

export default exampleSlice.reducer;
