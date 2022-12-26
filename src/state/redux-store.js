import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReduser from "./dialogs-reduser";
import usersReducer from "./users-reducer";

let redusers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReduser,
  usersPage: usersReducer
})

let store = createStore(redusers)

export default store