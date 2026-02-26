import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustTicker from './components/TrustTicker';
import RealityCheck from './components/RealityCheck';
import AuthoritySection from './components/AuthoritySection';
import GuideSection from './components/GuideSection';
import ProcessTimeline from './components/ProcessTimeline';
import BookingSection from './components/BookingSection';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark font-body transition-colors duration-300">
            <Header />
            <main>
                <Hero />
                <TrustTicker />
                <RealityCheck />
                <AuthoritySection />
                <GuideSection />
                <ProcessTimeline />
                <BookingSection />
                <Testimonials />
                <FAQ />
            </main>
            <Footer />
        </div>
    );
}

export default App;
