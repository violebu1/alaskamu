import { createSlice } from "@reduxjs/toolkit";

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const eventSlice = createSlice({
  name: "event",
  initialState: [],
  reducers: {
    setEvents: (state, action) => {
      const data = action.payload;
      return data;
    },
  },
});



export const {setEvents} = eventSlice.actions;

export default eventSlice.reducer;
