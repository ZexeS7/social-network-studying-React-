const ADD_MESSAGE = 'ADD-MESSAGE'
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT'

let initialState = {
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
}

function dialogsReduser(state = initialState, action) {
  if (action.type === CHANGE_NEW_MESSAGE_TEXT) {
    state.newMessageText = action.newMessageText
  } else if (action.type === ADD_MESSAGE) {
    let newMessage = {
      id: state.messagesData.length + 1,
      message: state.newMessageText
    }
    state.messagesData.push(newMessage)
    state.newMessageText = ''
  }
  return state
}

export default dialogsReduser
export function addMessageActionCreator() {
  return {type: ADD_MESSAGE}
}
export function changeNewMessageTextActionCreator(newMessageText) {
  return {type: CHANGE_NEW_MESSAGE_TEXT, newMessageText: newMessageText}
}