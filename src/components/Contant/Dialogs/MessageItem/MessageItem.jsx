import React from "react";
import m_class from "./MessageItem.module.css";

function MessageItem(props) {
  return (
    <div className={m_class.item} key={props.key}>
      {props.message}
    </div>
  )
}

export default MessageItem;