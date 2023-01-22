import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Contant from './components/Contant/Contant';
import Footer from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeaderContainer';
import { initializeApp } from "./state/app-reducer";
import { connect } from 'react-redux';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if(!this.props.initialize) {
      return <Preloader />
    }
    return (
      <div className="App">
        <BrowserRouter>
          <HeaderContainer />
          <Contant />
          <Footer />
          </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialize: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp}) (App);
