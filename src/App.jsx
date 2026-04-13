import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Founder from './components/Founder'
import ScrollToTop from './components/ScrollToTop'
import PartnerWithUs from './components/PartnerWithUs'
import ATTConsultingModal from './components/ATTConsultingModal'

function App() {
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);
  const [isATTOpen, setIsATTOpen] = useState(false);

  useEffect(() => {
    const handleOpenPartner = () => setIsPartnerOpen(true);
    const handleOpenATT = () => setIsATTOpen(true);

    window.addEventListener('openPartnerModal', handleOpenPartner);
    window.addEventListener('openATTModal', handleOpenATT);

    return () => {
      window.removeEventListener('openPartnerModal', handleOpenPartner);
      window.removeEventListener('openATTModal', handleOpenATT);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-yadata-navy text-white selection:bg-yadata-blue selection:text-white relative">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/founder" element={<Founder />} />
          </Routes>
        </main>

        {/* Global Modals */}
        <PartnerWithUs isOpen={isPartnerOpen} onClose={() => setIsPartnerOpen(false)} />
        <ATTConsultingModal isOpen={isATTOpen} onClose={() => setIsATTOpen(false)} />
      </div>
    </Router>
  )
}

export default App
