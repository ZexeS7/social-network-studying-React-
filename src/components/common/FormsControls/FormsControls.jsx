import React from "react"
import s from "./FormsControls.module.css"

export const Textarea = ({input, meta, ...props}) => {
  const hasError = meta.error && meta.touched
  return (<>
      <textarea {...input} {...props}
        className={hasError ? s.textarea + ' ' + s.error : s.textarea} />
      {hasError ? <span style={{color: 'red'}}>{meta.error}</span> : null}
    </>
  )
}

export const Input = ({input, meta, ...props}) => {
  const hasError = meta.error && meta.touched
  return (<>
      <input {...input} {...props}
        className={hasError ? s.textarea + ' ' + s.error : s.textarea} />
      {hasError ? <span style={{color: 'red'}}>{meta.error}</span> : null}
    </>
  )
}