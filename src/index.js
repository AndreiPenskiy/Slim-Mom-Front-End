import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import LocaleContext from './context/context';
import './fonts/fonts.css';

function Main() {
  const [locale, setLocale] = useState("uk");

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="Slim-Mom-Front-End">
          <LocaleContext.Provider value={{ locale, setLocale }}>
            <App />
          </LocaleContext.Provider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);