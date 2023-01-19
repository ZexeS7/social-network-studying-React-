import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../../utilities/validators/validators";
import { Input } from "../../common/FormsControls/FormsControls";
import style from "./Login.module.css"

function LoginForm (props) {
  return <form onSubmit={props.handleSubmit} className={style.form}>
    <Field className={style.input} placeholder={"Login"} name={'login'} component={Input} validate={[required]} />
    <Field className={style.input} placeholder={"Password"} name={'password'} component={Input} validate={[required]} />
    <div><Field type={'checkbox'} name={'rememberMe'} component={'input'} /> remember me</div>
    <button className={style.btn} >Login</button>
  </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

function Login (props) {
  const onSubmit = (formData) => {
    console.log(formData)
  }

  return <div className={style.body}>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit} />
  </div>
}

export default Login