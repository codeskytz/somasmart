import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Shell from '../components/layout/Shell';
import ProtectedRoute from '../components/ProtectedRoute';
import Landing from '../pages/Landing';
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';
import Dashboard from '../pages/Dashboard';
import Assistant from '../pages/Assistant';
import Courses from '../pages/Courses';
import Settings from '../pages/Settings';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/signup" element={<Signup />} />
            <Route 
                path="/dashboard" 
                element={
                    <ProtectedRoute>
                        <Shell><Dashboard /></Shell>
                    </ProtectedRoute>
                } 
            />
            <Route 
                path="/assistant" 
                element={
                    <ProtectedRoute>
                        <Shell><Assistant /></Shell>
                    </ProtectedRoute>
                } 
            />
            <Route 
                path="/courses" 
                element={
                    <ProtectedRoute>
                        <Shell><Courses /></Shell>
                    </ProtectedRoute>
                } 
            />
            <Route 
                path="/settings" 
                element={
                    <ProtectedRoute>
                        <Shell><Settings /></Shell>
                    </ProtectedRoute>
                } 
            />
        </Routes>
    );
};

export default AppRoutes;