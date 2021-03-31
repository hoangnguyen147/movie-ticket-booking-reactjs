import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
const { configureStore } = require("@reduxjs/toolkit");


const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk]
});


export default store;
