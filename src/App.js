import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Contant from './components/Contant/Contant';
import Footer from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeaderContainer';

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderContainer />
        <Contant store={props.store} state={props.state} dispatch={props.dispatch}/>
        <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
