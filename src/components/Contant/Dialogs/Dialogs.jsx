import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import dialogs from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";

function Dialogs(props) {
  let dialogItem = props.dialogsPage.dialogsData.map(d => <DialogItem key={d.id} name={d.name} />)
  // function addMessage() {
  //   return props.addMessage()
  // }
  return (
    <div className={dialogs.dialogs}>
      <div className={dialogs.users_items}>{dialogItem}</div>
      <MessageItem dialogsPage={props.dialogsPage} dispatch={props.dispatch} />
    </div>
  )
}

export default Dialogs;