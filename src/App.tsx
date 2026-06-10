/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreditRepair from './pages/CreditRepair';
import Services from './pages/Services';
import Admin from './pages/Admin';
import AboutUs from './pages/AboutUs';
import ComplaintResolution from './pages/ComplaintResolution';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ConsumerRights from './pages/ConsumerRights';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-luxury-ivory text-luxury-charcoal font-sans overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/credit-repair" element={<CreditRepair />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/complaint-policy" element={<ComplaintResolution />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/consumer-rights" element={<ConsumerRights />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-center" />
      </div>
    </Router>
  );
}

