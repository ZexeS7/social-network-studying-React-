import React from "react";
import { connect } from "react-redux";
import DialogItem from "./DialogItem/DialogItem";
import Dialogs from "./Dialogs";
import dialogs from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";

function Dialogs(props) {
  let dialogItem = props.dialogsPage.dialogsData.map(d => <DialogItem key={d.id} name={d.name} /> )
  return (
    <div className={dialogs.dialogs}>
      <div className={dialogs.users_items}>{dialogItem}</div>
      <MessageItem dialogsPage={props.dialogsPage} dispatch={props.dispatch} />
    </div>
  )
}
function mapStateToProps(state) {
  return {
    dialogs: state.dialogsPage.dialogsData,
    messages: state.dialogsPage.messagesData,

  }
}
function mapDispatchToProps(dispatch) {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator())
    },
    changeMessageText: (newMessageText) => {
      dispatch(changeNewMessageTextActionCreator(newMessageText))
    }
  }
}

const SuperDialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;