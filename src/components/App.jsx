import { GlobalStyle } from '../style/GlobalStyle';
import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import Layout from './Layout/Layout';
import { Loader } from '../components/Loader/Loader';

const MainPage = lazy(() =>
  import('pages/MainPage' /* webpackChunkName: "main-page" */)
);
const LoginPage = lazy(() =>
  import('pages/LoginPage' /* webpackChunkName: "login-page" */)
);
const RegistrationPage = lazy(() =>
  import('pages/RegistrationPage' /* webpackChunkName: "regisrtation-page" */)
);
const DiaryPage = lazy(() =>
  import('pages/DiaryPage' /* webpackChunkName: "diary-page" */)
);
const CalculatorPage = lazy(() =>
  import('pages/CalculatorPage' /* webpackChunkName: "calculator-page" */)
);

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="registration" element={<RegistrationPage />} />
            <Route path="diary" element={<DiaryPage />} />
            <Route path="calculator" element={<CalculatorPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
