import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReduser from "./dialogs-reduser";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

let redusers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReduser,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer
})

let store = createStore(redusers, applyMiddleware(thunkMiddleware))

window.myStore = store

export default store