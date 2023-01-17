import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

function WithRouterProps(Component) {
  function ComponentWithRouerProps(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }
  return ComponentWithRouerProps
}

export default WithRouterProps