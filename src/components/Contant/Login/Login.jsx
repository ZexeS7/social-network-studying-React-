import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { required } from "../../../utilities/validators/validators";
import { Input } from "../../common/FormsControls/FormsControls";
import style from "./Login.module.css";
import { login } from "../../../state/auth-reducer";

function LoginForm (props) {
  return <form onSubmit={props.handleSubmit} className={style.form}>
    <Field className={style.input} placeholder={"Login"} name={'email'} component={Input} validate={[required]} />
    <Field className={style.input} placeholder={"Password"} type={'password'} name={'password'} component={Input} validate={[required]} />
    <div><Field type={'checkbox'} name={'rememberMe'} component={'input'} /> remember me</div>
    <button className={style.btn} >Login</button>
  </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

function Login (props) {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  return <div className={style.body}>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit} />
  </div>
}

export default connect(null, {login}) (Login)