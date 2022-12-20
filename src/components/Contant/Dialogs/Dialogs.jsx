import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import dialogs from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";

function Dialogs(props) {
  return (
    <div className={dialogs.dialogs}>
      <DialogItem dialogsData={props.dialogsPage.dialogsData}/>
      <MessageItem dialogsPage={props.dialogsPage} dispatch={props.dispatch} />
    </div>
  )
}

export default Dialogs;