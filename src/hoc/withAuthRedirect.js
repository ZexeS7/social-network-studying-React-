import React from "react";
import { Link } from "react-router-dom";


export function withAuthRedirect (Component) {
  return function RedirectComponent(props) {
      if(props.isAuth === false) return <Link to='/login'/>
      return (
        <>
          <Component {...props} user={props.user}/>
        </>
      )
  }
}