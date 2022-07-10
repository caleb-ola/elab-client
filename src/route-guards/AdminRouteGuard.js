import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const useAuth = () => {
  // elUsrT is used to denote "eLab User Token"
  const admin = localStorage.getItem('elAdmT');
  return admin && true;
};

function AdminRouteGuard() {
  const isAuth = useAuth();
  const location = useLocation();

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/auth/login" replace state={{ from: location }} />
  );
}

export default AdminRouteGuard;
