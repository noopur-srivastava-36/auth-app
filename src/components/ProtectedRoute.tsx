
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import LandingPage from '../pages/LandingPage';
import { Provider } from 'react-redux';
import store from '../store/store';
import ProtectRoute from '../middleware';

interface ProtectedRouteProps {
  path: string;
  element: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ path, element }) => {

  return (
    <Provider store={store}>

      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <ProtectRoute>
          <Routes>
            <Route path={path} element={element} />
          </Routes>
        </ProtectRoute>

      </Router>

    </Provider>

  )
};

export default ProtectedRoute;
