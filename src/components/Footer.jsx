import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
    const tickerItems = [
        "Trusted by Ohio business owners for over 20 years",
        "Thousands of clients protected",
        "Ohio licensed attorneys",
        "Your legacy, protected",
    ];

    return (
        <footer className="relative bg-primary border-t border-gray-200 dark:border-gray-800 overflow-hidden">
            {/* Golden Belt Ticker */}
            <div className="bg-secondary py-4 overflow-hidden relative z-30 shadow-lg">
                <div className="flex w-full">
                    <motion.div
                        className="flex whitespace-nowrap gap-16"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30
                        }}
                    >
                        {[...tickerItems, ...tickerItems].map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="font-display font-extrabold text-primary uppercase tracking-widest text-sm">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <div className="py-24 relative">
                {/* Background Image */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-0 bg-primary/80 dark:bg-background-dark/90 z-10 transition-colors duration-300"></div>
                    <img
                        src={`${import.meta.env.BASE_URL}footer.jpg`}
                        alt="Abstract Architecture Background"
                        className="w-full h-full object-cover grayscale opacity-60 mix-blend-overlay"
                    />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                    {/* Logo and Name */}
                    <Link to="/" className="flex flex-col items-center justify-center mb-10 cursor-pointer group">
                        <img src="https://assets.cdn.filesafe.space/7ddkjb0m1qKwq9PPcv33/media/696fb4cd84438db17a0d2450.png" alt="Costaras Law Shield" className="h-16 w-auto mb-6 object-contain drop-shadow-lg group-hover:scale-105 transition-transform" />
                        <span className="font-display font-bold text-3xl text-white tracking-wide group-hover:text-secondary transition-colors">Costaras Law</span>
                        <div className="h-1 w-12 bg-secondary mt-6 rounded-full"></div>
                    </Link>

                    <p className="text-xl text-gray-300 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                        Protecting legacies through strategic planning and business foresight.
                    </p>

                    {/* CTAs */}
                    <div className="flex justify-center items-center">
                        <a
                            href="/#guide"
                            className="inline-flex px-10 py-4 bg-secondary text-white rounded-full font-semibold shadow-xl hover:bg-yellow-600 transition-all items-center justify-center gap-3 select-none touch-manipulation relative z-50 cursor-pointer"
                        >
                            <span className="material-symbols-outlined">download</span>
                            <span>Download Free Guide</span>
                        </a>
                    </div>

                    <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                        <p>© {new Date().getFullYear()} Costaras Law. All rights reserved.</p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a className="hover:text-white transition-colors" href="https://costaraslaw.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                            <a className="hover:text-white transition-colors" href="https://costaraslaw.com/terms-of-service" target="_blank" rel="noopener noreferrer">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
