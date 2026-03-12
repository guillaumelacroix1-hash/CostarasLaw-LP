import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ThankYou from './pages/ThankYou';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Footer from './components/Footer';
import DownloadModal from './components/DownloadModal';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const location = useLocation();

    // Trigger virtual pageview on route change for GTM / Adwords
    useEffect(() => {
        if (window.dataLayer) {
            window.dataLayer.push({
                event: 'virtual_pageview',
                page_path: location.pathname + location.search,
                page_title: document.title
            });
        }
    }, [location]);

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark font-body transition-colors duration-300">
            {location.pathname !== '/thank-you' && <Header onOpenModal={() => setIsModalOpen(true)} />}

            <Routes>
                <Route path="/" element={<Home onOpenModal={() => setIsModalOpen(true)} />} />
                <Route path="/thank-you" element={<ThankYou />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
            </Routes>

            {location.pathname !== '/thank-you' && <Footer />}

            <DownloadModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
}

export default App;
