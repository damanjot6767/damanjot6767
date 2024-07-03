import React, { Component, Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LandingHomePage } from './landing/home';
import NotFoundPage from '../components/common/not_found';


const RouteHanding = () => {
            return (
                  <Routes>
                        // Route for landing Home Page
                        <Route path="/" element={<LandingHomePage />} />
                        <Route path="/not-found" element={<NotFoundPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                  </Routes>
            )

}

export { RouteHanding }
// OurLandingPortfolioDetails