import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert } from 'lucide-react'; // Or any other shield icon, code.html used a material symbol

const Header = () => {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="sticky top-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-300"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    <div className="flex-shrink-0 flex items-center gap-2 md:gap-3">
                        <div className="h-8 w-8 md:h-11 md:w-11 flex items-center justify-center">
                            <img src="/logo.png" alt="Costaras Law Logo" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-display font-bold text-xl md:text-2xl tracking-tight text-primary dark:text-white leading-none">Costaras Law</span>
                            <span className="hidden md:block text-[0.65rem] uppercase tracking-widest text-text-muted-light dark:text-text-muted-dark font-medium mt-1">Business & Estate Planning</span>
                        </div>
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        <a className="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors" href="#problem">The Problem</a>
                        <a className="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors" href="#authority">Meet the Founder</a>
                        <a className="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors" href="#guide">Free Guide</a>
                        <a className="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors" href="#faq">FAQ</a>
                    </nav>

                    <div className="flex items-center">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-2 border border-transparent text-xs md:text-sm font-medium rounded-lg text-white bg-primary hover:bg-opacity-90 transition shadow-sm cursor-pointer"
                            href="#booking"
                        >
                            Book Consultation
                        </motion.a>
                    </div>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;
