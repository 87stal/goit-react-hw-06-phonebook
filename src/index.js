import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { store, persistor } from './redux/store';


ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
  <PersistGate  persistor={persistor}>
    <App />
  </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


