import dialogsReduser from "./dialogs-reduser"
import profileReducer from "./profile-reducer"

let store = {
  _state: {
    messagePage: {
      messagesData: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Good"},
        {id: 4, message: "Hi"},
        {id: 5, message: "How are you?"},
        {id: 6, message: "Good"},
        {id: 7, message: "Hi"},
        {id: 8, message: "How are you?"},
        {id: 9, message: "Good"},
      ],
      dialogsData: [
        {id:1, name:"Anastasia"},
        {id:2, name:"Evsey"},
        {id:3, name:"Pavel"}
      ],
      newMessageText: ''
    },
    profilePage: {
      postsData: [
        {id:1, post:"Hello my first post"},
        {id:2, post:"Second post"},
        {id:3, post:"oh la la"}
      ],
      newText: ''
    }
  },
  _callSubscribe() {},
  getState() {
    return this._state
  },
  subscribe(observe) {
    return this._callSubscribe = observe
  },
  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.messagePage = dialogsReduser(this._state.messagePage, action)
    this._callSubscribe()
  }
}

window.myStore = store;

export default store;