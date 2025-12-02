import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Shell from '../components/layout/Shell';
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
            <Route path="/dashboard" element={<Shell><Dashboard /></Shell>} />
            <Route path="/assistant" element={<Shell><Assistant /></Shell>} />
            <Route path="/courses" element={<Shell><Courses /></Shell>} />
            <Route path="/settings" element={<Shell><Settings /></Shell>} />
        </Routes>
    );
};

export default AppRoutes;