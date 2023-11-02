import './App.css';
import List from './Lista/listaPresentes';
import Firebase from './Lista/fire-store';
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';
import Reducers from './Reducers/Reducers';

function Cha() {
  const store = legacy_createStore(Reducers);

  return (

    <Provider store={store}>
        <List />
        <Firebase />
    </Provider>
    
  );
}

export default Cha;
