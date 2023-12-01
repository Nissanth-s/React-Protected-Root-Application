import React, { lazy, Suspense } from "react"
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Cookies from 'js-cookie';

import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import Loader from "./components/Loader"

const NotFound = lazy(() => import('./components/NotFound'));
const Dashboard = lazy(() => import('./components/Dashboard'));
const Login = lazy(() => import('./components/Login'));

const getToken = Cookies.get('token');

const LoginRoute = () => {
    if (!getToken || getToken === "" || getToken === "undefined") {
        return <Login />
    } else {
        return <Dashboard />
    }
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <>

            <Route path="/" element={
                <LoginRoute />
                // <PublicRoute>
                //     <Login />
                // </PublicRoute>
            } />
            <Route path="dashboard" element={
                <Suspense fallback={<Loader />}>
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                </Suspense>

            } />
            <Route path="login" element={
                <Suspense fallback={<Loader />}>
                    <LoginRoute />
                    {/* <PublicRoute>
                        <Login />
                    </PublicRoute> */}
                </Suspense>

            } />
            <Route path="/*" element={<NotFound />} />
        </>
    )
);

export default router;
