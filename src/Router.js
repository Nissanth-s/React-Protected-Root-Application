import React, { lazy, Suspense } from "react"
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import Loader from "./components/Loader"

const NotFound = lazy(() => import('./components/NotFound'));
const Dashboard = lazy(() => import('./components/Dashboard'));
const Login = lazy(() => import('./components/Login'));

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={
                <Suspense fallback={<Loader />}>
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                </Suspense>
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
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                </Suspense>

            } />
            <Route path="/*" element={<NotFound />} />
        </>
    )
);

export default router;
