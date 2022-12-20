import React from "react";
import Nav from './Nav/Nav';
import contant from './Contant.module.css';
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";

function Contant(props) {
  return (
  <div className="container">
    <div className={contant.contant}>
      <Nav />
      <Routes>
        <Route path="/profile" element={<Profile store={props.store} />} />
        <Route path="/dialogs" element={<Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch} />
        } />
      </Routes>
    </div>
  </div>
  )
}

export default Contant;