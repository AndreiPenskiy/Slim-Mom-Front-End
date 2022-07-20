import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import LocaleContext from './context/context';
import CalloriesContext from 'context/kcalContext';
import './fonts/fonts.css';
import 'modern-normalize/modern-normalize.css';

function Main() {
  const [locale, setLocale] = useState("uk");
  const [kcal, setKcal] = useState(null);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/">
          <LocaleContext.Provider value={{ locale, setLocale }}>
            <CalloriesContext.Provider value={{ kcal, setKcal }}>
              <App />
              </CalloriesContext.Provider>
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