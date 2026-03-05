import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ThankYou from './pages/ThankYou';
import Footer from './components/Footer';
import DownloadModal from './components/DownloadModal';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const location = useLocation();

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark font-body transition-colors duration-300">
            {location.pathname !== '/thank-you' && <Header onOpenModal={() => setIsModalOpen(true)} />}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/thank-you" element={<ThankYou />} />
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
