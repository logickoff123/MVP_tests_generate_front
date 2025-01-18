import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Test from './pages/Test';
import Alltests from './pages/Alltests';
import Answer from './pages/Answer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Auth0Provider } from '@auth0/auth0-react';
import Me from './pages/Me';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
    },
  },
})
const AppRoutes = () => {
  return (
    <Auth0Provider
      domain="dev-qyax2072h48uwzrg.us.auth0.com"
      clientId="F06ZhbTnZudMkoDVw80SChCXYvbqgBc3"
      authorizationParams={{
        redirect_uri: window.location.origin, //"http://localhost:8000/login"
        audience: "https://dev-qyax2072h48uwzrg.us.auth0.com/api/v2/",
        scope: "openid read:current_user update:current_user_metadata"
      }}
    >
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/me" element={<Me />} />
            <Route path="/test" element={<Test />} /> {/* Новый маршрут */}
            <Route path="/alltests" element={<Alltests />} />
            <Route path="/answer" element={<Answer />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </Auth0Provider>
  );
};

export default AppRoutes;
