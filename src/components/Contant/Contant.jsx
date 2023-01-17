import React from "react";
import Nav from './Nav/Nav';
import contant from './Contant.module.css';
import { Route, Routes } from "react-router-dom";
import UsersContainer from "./Users/UsersContainer";
import Login from "./Login/Login";
import ProfileContainer from "./Profile/ProfileContainer";
import DialogsContainer from "./Dialogs/DialogsContainer";

function Contant(props) {
  return (
  <div className="container">
    <div className={contant.contant}>
      <Nav />
      <Routes>
        <Route path="/profile" element={<ProfileContainer />} />
        <Route path="/profile/:userId" element={<ProfileContainer />} />
        <Route path="/dialogs" element={<DialogsContainer />} />
        <Route path="/users" element={<UsersContainer />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  </div>
  )
}

export default Contant;