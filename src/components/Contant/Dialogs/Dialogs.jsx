import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator } from "../../../utilities/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";
import DialogItem from "./DialogItem/DialogItem";
import dialogs from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";

const maxLength50 = maxLengthCreator(50)

function Dialogs(props) {
  let dialogItem = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} />)
  let messagesItem = props.messages.map(m => <MessageItem key={m.id} message={m.message} /> )
  function onSubmit(values) {
    props.addMessage(values.newMessadgeText)
  }
  return (
    <div className={dialogs.dialogs}>
      <div className={dialogs.users_items}>{dialogItem}</div>
      <div>
        {messagesItem}
        <DialogsReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  )
}

const DialogsReduxForm = reduxForm({form:'messagesForm'})(DialogsForm)

function DialogsForm(props) {
  return (<form className={dialogs.form} onSubmit={props.handleSubmit}>
    <Field className={dialogs.textarea} validate={[maxLength50]} component={Textarea} name={'newMessadgeText'} placeholder={'Enter your message'}/>
    <button className={dialogs.btn} >Add</button>
  </form>)
}

export default Dialogs;