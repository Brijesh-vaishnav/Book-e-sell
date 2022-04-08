import { ThemeProvider, Typography } from '@material-ui/core';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './assets/css/style.css';
import Login from './pages/login';
import Register from './pages/register';
import {theme} from './utils/theme';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainNavigation from './components/MainNavigation';
import { AuthWrapper } from './context/auth';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<></>}>
      <BrowserRouter>
      <AuthWrapper>
        <MainNavigation/>
        <ToastContainer />
      </AuthWrapper>
      </BrowserRouter>
      </React.Suspense>
    </ThemeProvider>
  );
}

export default App;
