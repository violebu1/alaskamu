import { configureStore } from "@reduxjs/toolkit";

import setEvents from "./slices/event.slice";
import  setUser  from "./slices/geUser.slice";
import  setPermiss from "./slices/permiss.slice";

export default configureStore({
  reducer: {
    setUser:setUser,
    setEvents: setEvents,
    setPermiss:setPermiss
  },
});
