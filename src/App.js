import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Contant from './components/Contant/Contant';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Contant store={props.store} state={props.state} dispatch={props.dispatch}/>
        <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
