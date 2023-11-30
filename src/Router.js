import React, { lazy, Suspense } from "react"
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Loader from "./components/Loader"

const NotFound = lazy(() => import('./components/NotFound'));
const Dashboard = lazy(() => import('./components/Dashboard'));
const Login = lazy(() => import('./components/Login'));

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Login />} />
            <Route path="dashboard" element={
                <Suspense fallback={<Loader />}>
                    <Dashboard />
                </Suspense>

            } />
            <Route path="login" element={
                <Suspense fallback={<Loader />}>
                    <Login />
                </Suspense>

            } />
            <Route path="/*" element={<NotFound />} />
        </>
    )
);

export default router;
