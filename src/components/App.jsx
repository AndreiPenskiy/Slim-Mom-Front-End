import { GlobalStyle } from '../style/GlobalStyle';
import { lazy, Suspense } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Loader } from '../components/Loader/Loader';
import { fetchCurrentUser } from 'redux/auth/auth-options';
import { getCurrentRefresh } from 'redux/auth/auth-selectors';
import { PublicRoute } from './RouteType/PublicRoute';
import { PrivateRoute } from './RouteType/PrivateRoute';

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

const DiaryFormProductMobile = lazy(() =>
  import(
    '../components/DiaryAddProductForm/DiaryFormProductMobile' /* webpackChunkName: "calculator-page" */
  )
);

export const App = () => {
  const isCurrentRefresh = useSelector(getCurrentRefresh);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isCurrentRefresh && (
      <>
        <GlobalStyle />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<AppBar />}>
              <Route
                index
                element={
                  <PublicRoute restricted>
                    <MainPage />
                  </PublicRoute>
                }
              />

              <Route
                path="login"
                element={
                  <PublicRoute restricted>
                    <LoginPage />
                  </PublicRoute>
                }
              />

              <Route
                path="registration"
                element={
                  <PublicRoute restricted>
                    <RegistrationPage />
                  </PublicRoute>
                }
              />

              <Route
                path="diary"
                element={
                  <PrivateRoute>
                    <DiaryPage />
                  </PrivateRoute>
                }
              />

              <Route
                path="calculator"
                element={
                  <PrivateRoute>
                    <CalculatorPage />
                  </PrivateRoute>
                }
              />

              <Route
                path="diaryformmobile"
                element={
                  <PrivateRoute>
                    <DiaryFormProductMobile />
                  </PrivateRoute>
                }
              />

              <Route path="*" element={<MainPage />} />
            </Route>
          </Routes>
        </Suspense>
      </>
    )
  );
};
