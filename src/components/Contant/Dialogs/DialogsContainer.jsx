import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { addMessage, changeMessageText } from "../../../state/dialogs-reduser";

function mapStateToProps(state) {
  return {
    dialogs: state.dialogsPage.dialogsData,
    messages: state.dialogsPage.messagesData,
    messageText: state.dialogsPage.newMessageText,
    isAuth: state.auth.isAuth
  }
}

const DialogsContainer = connect(mapStateToProps, { addMessage, changeMessageText })(Dialogs)

export default DialogsContainer;