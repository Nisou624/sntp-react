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
import TravauxRoutiers from './pages/TravauxRoutiers';
import LocationMateriel from './pages/LocationMateriel';
import TravauxFerroviaires from './pages/TravauxFerroviaires';
import GenieCivil from './pages/GenieCivil';
import Hydrauliques from './pages/Hydrauliques';
import MaintenanceRehabilitation from './pages/MaintenanceRehabilitation';
import NosDirections from './pages/NosDirections';
import MotDuPDG from './pages/MotDuPDG';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import './App.css';
import FloatingChatButton from './components/Chatbot/FloatingChatButton';
import ChatbotWindow from './components/Chatbot/ChatbotWindow';

function AppContent() {
  const location = useLocation();
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

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
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/implantations" element={<Implantations />} />
            <Route path="/sntp-engineering" element={<SNTPEngineering />} />
            <Route path="/sntp-anabibe" element={<SNTPAnabibe />} />
            <Route path="/travaux-routiers" element={<TravauxRoutiers />} />
            <Route path="/location-materiel" element={<LocationMateriel />} />
            <Route path="/travaux-ferroviaires" element={<TravauxFerroviaires />} />
            <Route path="/Hydrauliques" element={<Hydrauliques />} />
            <Route path="/genie-civil" element={<GenieCivil />} />
            <Route path="/maintenance-rehabilitation" element={<MaintenanceRehabilitation />} />
            <Route path="/nos-directions" element={<NosDirections />} />
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

