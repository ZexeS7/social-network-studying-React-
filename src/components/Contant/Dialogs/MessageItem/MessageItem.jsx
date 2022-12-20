import React from "react";
import { addMessageActionCreator, changeNewMessageTextActionCreator } from "../../../../state/dialogs-reduser";
import m_class from "./MessageItem.module.css";

function MessageItem(props) {
  let messages = props.dialogsPage.messagesData.map( m => <div className={m_class.item} key={m.id}>{m.message}</div>)
  let newMessageElement = React.createRef()
  function changeMessageText() {
    let newMessageText = newMessageElement.current.value
    return props.dispatch(changeNewMessageTextActionCreator(newMessageText))
  }
  function addMessage() {
    return props.dispatch(addMessageActionCreator())
  }
  return (
    <div className={m_class.items}>
      {messages}
      <textarea ref={newMessageElement} onChange={changeMessageText} value={props.dialogsPage.newMessageText} />
      <button onClick={addMessage}>Add</button>
    </div>
  )
}

export default MessageItem;