import React from "react";
import dialogs from "./DialogItem.module.css"

function DialogItem(props) {
  let dialog = props.dialogsData.map(d => <div className={dialogs.item} key={d.id}>{d.name}</div>)
  return (
    <div className={dialogs.items}>
      {dialog}
    </div>
  )
}

export default DialogItem;