import React from "react";
import Nav from './Nav/Nav';
import contant from './Contant.module.css';
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";
import UsersContainer from "./Users/UsersContainer";

function Contant(props) {
  return (
  <div className="container">
    <div className={contant.contant}>
      <Nav />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/dialogs" element={<Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch} />} />
        <Route path="/users" element={<UsersContainer />} />
      </Routes>
    </div>
  </div>
  )
}

export default Contant;