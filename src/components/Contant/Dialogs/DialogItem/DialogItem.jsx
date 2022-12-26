import React from "react";
import dialogs from "./DialogItem.module.css"

function DialogItem(props) {
  return (
      <div className={dialogs.item} key={props.key}>{props.name}</div>
  )
}

export default DialogItem;