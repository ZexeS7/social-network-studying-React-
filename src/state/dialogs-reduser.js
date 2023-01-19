const ADD_MESSAGE = 'ADD-MESSAGE'

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
}

function dialogsReduser(state = initialState, action) {
  if (action.type === ADD_MESSAGE) {
    let newMessage = {
      id: state.messagesData.length + 1,
      message: action.newMessageText
    }
    let stateCopy = {...state}
    stateCopy.messagesData = [...stateCopy.messagesData]
    stateCopy.messagesData.push(newMessage)
    return stateCopy
  }
  return state
}

export default dialogsReduser
export function addMessage(newMessageText) {
  return {type: ADD_MESSAGE, newMessageText}
}