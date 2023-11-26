import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Lista/Home';
import List from './Lista/listaPresentes';
import Nav from './Lista/Nav';
import Footer from './Lista/Footer';
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';
import Reducers from './Reducers/Reducers';
import Firebase from './Lista/fire-store';

function Cha() {
  const store = legacy_createStore(Reducers);

  return (
  
        <Provider store={store}>
          <Router>
                <Nav />
                <Routes>
                  <Route path='/' exact element={<Home />} />
                  <Route path='/listaPresentes' element={<List/>} />
                </Routes>
                <Footer />
          </Router>

          <Firebase/>
        </Provider>
  );
}

export default Cha;
