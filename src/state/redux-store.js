import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReduser from "./dialogs-reduser";

let redusers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReduser
})

let store = createStore(redusers)

export default store