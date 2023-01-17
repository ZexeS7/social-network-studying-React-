import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import dialogs from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";

function Dialogs(props) {
  let dialogItem = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} />)
  let messagesItem = props.messages.map(m => <MessageItem key={m.id} message={m.message} /> )
  let newMessageElement = React.createRef()
  function changeMessageText() {
    let newMessageText = newMessageElement.current.value
    return props.changeMessageText(newMessageText)
  }
  return (
    <div className={dialogs.dialogs}>
      <div className={dialogs.users_items}>{dialogItem}</div>
      <div>
        {messagesItem}
        <textarea ref={newMessageElement} onChange={changeMessageText} value={props.messageText} />
        <button onClick={props.addMessage}>Add</button>
      </div>
    </div>
  )
}

export default Dialogs;