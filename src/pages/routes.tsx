import React, { Component, Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LandingHomePage } from './landing/home';
import { RoutesName } from '../utils/constant';
import FallbackLoading from '../components/common/fallback';
import NotFoundPage from '../components/common/not_found';
import { Navbar } from '../components/navbars/navbar';
import Footer from '../components/footer/footer';
import OurLandingPortfolio from './landing/portfolio/porfolio';
import OurLandingPortfolioDetails from './landing/portfolio/portfolio_details';
const LandingContactPage = lazy(() => import('./landing/contact'));
const LandingOurTeam = lazy(() => import('./landing/our_team'));
const LandingOurTeamDetails = lazy(() => import('./landing/team_details'));
const LandingOurServices = lazy(() => import('./landing/our_service'))
const LandingOurServiceDetails = lazy(() => import('./landing/service_details'));

const RouteHanding = () => {

      const isLogin = false;

      if (isLogin) {
            return (
                  <Routes>
                        // Route for landing Home Page
                        <Route path="/" element={<LandingHomePage />} />
                  </Routes>
            )
      }


      else {
            return (
                  <div className='w-full h-full'>
                        <Navbar />
                        <Routes>
                              // Route for landing Home Page
                              <Route path={RoutesName.Home} element={<LandingHomePage />} />
                              // Route for landing Home Page
                              <Route path={RoutesName.Contact} element={<Suspense fallback={<FallbackLoading />}><LandingContactPage /></Suspense>} />
                              <Route path={RoutesName.OurTeam} element={<Suspense fallback={<FallbackLoading />}><LandingOurTeam /></Suspense>} />
                              <Route path={RoutesName.OurTeamDetails} element={<Suspense fallback={<FallbackLoading />}><LandingOurTeamDetails /></Suspense>} />
                              <Route path={RoutesName.OurServices} element={<Suspense fallback={<FallbackLoading />}><LandingOurServices /></Suspense>} />
                              <Route path={RoutesName.OurServiceDetails} element={<Suspense fallback={<FallbackLoading />}><LandingOurServiceDetails /></Suspense>} />
                              <Route path={RoutesName.OurPortfolio} element={<Suspense fallback={<FallbackLoading />}><OurLandingPortfolio /></Suspense>} />
                              <Route path={RoutesName.OurPortfolioDetails} element={<Suspense fallback={<FallbackLoading />}><OurLandingPortfolioDetails /></Suspense>} />
                              {/* Not Found route */}
                              <Route path="/not-found" element={<NotFoundPage />} />
                              <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                  </div>
            )
      }
}

export { RouteHanding }
// OurLandingPortfolioDetails