import { createSlice } from "@reduxjs/toolkit";

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const permissSlice = createSlice({
  name: "data",
  initialState: false,
  reducers: {
    setPermiss: (state, action) => {
      const data = action.payload;
      return data;
    },
  },
});



export const {setPermiss} = permissSlice.actions;

export default permissSlice.reducer;
