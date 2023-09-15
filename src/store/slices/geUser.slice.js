import { createSlice } from "@reduxjs/toolkit";

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const getUser = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    setUser: (state, action) => {
      const data = action.payload;
      return data;
    },
  },
});



export const {setUser} = getUser.actions;

export default getUser.reducer;
