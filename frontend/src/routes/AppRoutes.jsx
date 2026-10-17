import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import RebuiltSurface from '../pages/RebuiltSurface';
import Booking from '../pages/Booking/Booking';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Profile from '../pages/Auth/Profile';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<RebuiltSurface kind="about" />} />
            <Route path="/gallery" element={<RebuiltSurface kind="gallery" />} />
            <Route path="/programs" element={<RebuiltSurface kind="programs" />} />
            <Route path="/programs/:id" element={<RebuiltSurface kind="program-details" />} />
            <Route path="/trainers" element={<RebuiltSurface kind="trainers" />} />
            <Route path="/membership" element={<RebuiltSurface kind="membership" />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<RebuiltSurface kind="contact" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    );
};

export default AppRoutes;
