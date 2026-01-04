import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Implantations from './pages/Implantations';
import PageTransition from './components/PageTransition/PageTransition';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import SNTPEngineering from './pages/SNTPEngineering';
import SNTPAnabibe from './pages/SNTPAnabibe';
import SNTPLogistique from './pages/SNTPLogistique';
import TravauxRoutiers from './pages/TravauxRoutiers';
import LocationMateriel from './pages/LocationMateriel';
import TravauxFerroviaires from './pages/TravauxFerroviaires';
import GenieCivil from './pages/GenieCivil';
import Hydrauliques from './pages/Hydrauliques';
import MaintenanceRehabilitation from './pages/MaintenanceRehabilitation';
import BatimentsIndustriels from './pages/BatimentsIndustriels';
import NosEngagements from './pages/NosEngagements';
import Environnement from './pages/Environnement';
import RSE from './pages/RSE';
import Innovation from './pages/Innovation';
import SanteSecurite from './pages/SanteSecurite';
import NosDirections from './pages/NosDirections';
import NousRejoindre from './pages/NousRejoindre';
import MotDuPDG from './pages/MotDuPDG';
import NousConnaitre from './pages/NousConnaitre';
import NosUnites from './pages/NosUnites';
import Histoire from './pages/Histoire';
import VisionValeurs from './pages/VisionValeurs';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import AppelsOffres from './pages/AppelsOffres';
import AppelOffreDetails from './pages/AppelOffreDetails';
import './App.css';
import FloatingChatButton from './components/Chatbot/FloatingChatButton';
import ChatbotWindow from './components/Chatbot/ChatbotWindow';
import useScrollToHash from './hooks/useScrollToHash';

import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import ProtectedRoute from './components/admin/ProtectedRoute';

import ArticleList from './components/admin/ArticleList';
import ArticleForm from './components/admin/ArticleForm';
import BlogArticle from './pages/BlogArticle';
import ArticleDetail from './pages/ArticleDetail';

import MentionsMedias from './pages/MentionsMedias';
import MentionsList from './components/admin/MentionsList';
import MentionForm from './components/admin/MentionForm';

import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';

import adminPaths, { ADMIN_PREFIX } from './config/adminConfig';

import authService from './services/authService';

import './i18n/config';

function AdminRouteMonitor() {
  const location = useLocation();
  const wasInAdmin = React.useRef(false);

  useEffect(() => {
    const isAdminRoute = adminPaths.isAdminPath(location.pathname);
    const isLoginRoute = adminPaths.isLoginPath(location.pathname);

    if (wasInAdmin.current && !isAdminRoute && authService.isAuthenticated()) {
      console.log('Sortie de la zone admin détectée. Déconnexion automatique.');
      authService.logoutSilent();
    }

    wasInAdmin.current = isAdminRoute && !isLoginRoute;
  }, [location.pathname]);

  return null;
}


function AppContent() {
  const location = useLocation();
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.setAttribute('lang', i18n.language);
    document.documentElement.setAttribute('dir', i18n.language === 'ar' ? 'rtl': 'ltr');

  }, [i18n.language]);
  
  
  useScrollToHash();
  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  }
  
  const closeChatbot = () => {
    setIsChatbotOpen(false);
  }

  // Vérifier si on est sur la page Projects pour cacher le footer
  const isProjectsPage = location.pathname === '/projects';

  return (
    <div className="App">
      <AdminRouteMonitor />
      <Header />
      <main id="main" className="site-main">
        <PageTransition location={location.pathname}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/about" element={<MotDuPDG />} />
            <Route path="/nous-connaitre" element={<NousConnaitre />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path='/articles/:slug' element={<ArticleDetail />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/implantations" element={<Implantations />} />
            <Route path="/sntp-engineering" element={<SNTPEngineering />} />
            <Route path="/sntp-anabibe" element={<SNTPAnabibe />} />
            <Route path="/sntp-logistique" element={<SNTPLogistique />} />
            <Route path="/travaux-routiers" element={<TravauxRoutiers />} />
            <Route path="/location-materiel" element={<LocationMateriel />} />
            <Route path="/travaux-ferroviaires" element={<TravauxFerroviaires />} />
            <Route path="/hydraulique" element={<Hydrauliques />} />
            <Route path="/genie-civil" element={<GenieCivil />} />
            <Route path="/maintenance-rehabilitation" element={<MaintenanceRehabilitation />} />
            <Route path="/batiments" element={<BatimentsIndustriels />} />
            <Route path="/nos-engagements" element={<NosEngagements />} />
            <Route path="/nos-directions" element={<NosDirections />} />
            <Route path="/nous-rejoindre" element={<NousRejoindre />} />
            <Route path="/nos-appels-offres" element={<AppelsOffres />} />
            <Route path="/nos-appels-offres/:id" element={<AppelOffreDetails />} />
            <Route path='/nos-unites' element={<NosUnites />} />
            <Route path="/mentions-medias" element={<MentionsMedias />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
            <Route path={`${ADMIN_PREFIX}/admin/login`} element={<Login />} />
            <Route path={`${ADMIN_PREFIX}/admin/dashboard`} element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
              {/* Routes Articles */}
              <Route path="articles" element={<ArticleList />} />
              <Route path="articles/nouveau" element={<ArticleForm />} />
              <Route path="articles/modifier/:id" element={<ArticleForm />} />
            </Route>

            <Route 
              path={`${ADMIN_PREFIX}/admin/articles`} 
              element={
                <ProtectedRoute>
                  <ArticleList />
                </ProtectedRoute>
              }
            />
            <Route 
              path={`${ADMIN_PREFIX}/admin/articles/nouveau`} 
              element={
                <ProtectedRoute>
                  <ArticleForm />
                </ProtectedRoute>
              }
            />
            <Route 
              path={`${ADMIN_PREFIX}/admin/articles/modifier/:id`} 
              element={
                <ProtectedRoute>
                  <ArticleForm />
                </ProtectedRoute>
              }
            />
             <Route 
              path={`${ADMIN_PREFIX}/admin/mentions-medias`} 
              element={
                <ProtectedRoute>
                  <MentionsList />
                </ProtectedRoute>
              }
            />
            <Route 
              path={`${ADMIN_PREFIX}/admin/mentions-medias/nouveau`} 
              element={
                <ProtectedRoute>
                  <MentionForm />
                </ProtectedRoute>
              }
            />
             <Route 
              path={`${ADMIN_PREFIX}/admin/mentions-medias/modifier/:id`} 
              element={
                <ProtectedRoute>
                  <MentionForm />
                </ProtectedRoute>
              }
            />
            <Route path='*' element={<Navigate to="/" replace />} />
          </Routes>
        </PageTransition>
      </main>
      {/* Cacher le footer sur la page Projects */}
      {!isProjectsPage && <Footer />}
      <FloatingChatButton
        onClick={toggleChatbot}
        isOpen={isChatbotOpen}
      />
      <ChatbotWindow
        isOpen={isChatbotOpen}
        onClose={closeChatbot}
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

