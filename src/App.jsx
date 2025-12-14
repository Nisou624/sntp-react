import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
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

function AppContent() {
  const location = useLocation();
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  
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

