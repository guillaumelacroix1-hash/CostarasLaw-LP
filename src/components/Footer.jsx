import React from 'react';

const Footer = () => {
    return (
        <footer className="relative bg-surface-light dark:bg-black py-24 border-t border-gray-200 dark:border-gray-800 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-primary/70 dark:bg-background-dark/80 z-10 transition-colors duration-300"></div>
                <img
                    src={`${import.meta.env.BASE_URL}footer.jpg`}
                    alt="Abstract Architecture Background"
                    className="w-full h-full object-cover grayscale opacity-40 mix-blend-overlay"
                />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Logo and Name */}
                <div className="flex flex-col items-center justify-center mb-10">
                    <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Costaras Law Shield" className="h-16 w-auto mb-6 object-contain drop-shadow-lg" />
                    <span className="font-display font-bold text-3xl text-white tracking-wide">Costaras Law</span>
                    <div className="h-1 w-12 bg-secondary mt-6 rounded-full"></div>
                </div>

                <p className="text-xl text-gray-300 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                    Protecting legacies through strategic planning and business foresight.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <a
                        href="#booking"
                        className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-lg text-primary bg-secondary hover:bg-yellow-600 hover:text-white transition-all shadow-lg transform hover:-translate-y-1"
                    >
                        Book Consultation
                    </a>
                    <a
                        href="#guide"
                        className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-base font-semibold rounded-lg text-white bg-transparent hover:bg-white/10 transition-all backdrop-blur-sm transform hover:-translate-y-1"
                    >
                        Download Free Guide
                    </a>
                </div>

                <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} Costaras Law. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
                        <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
