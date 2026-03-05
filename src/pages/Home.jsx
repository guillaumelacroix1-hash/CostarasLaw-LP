import React from 'react';
import Hero from '../components/Hero';
import TrustTicker from '../components/TrustTicker';
import RealityCheck from '../components/RealityCheck';
import AuthoritySection from '../components/AuthoritySection';
import GuideSection from '../components/GuideSection';
import ProcessTimeline from '../components/ProcessTimeline';
import BookingSection from '../components/BookingSection';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const Home = () => {
    return (
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
    );
};

export default Home;
