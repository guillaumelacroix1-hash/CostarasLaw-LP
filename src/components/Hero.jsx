import React, { useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import InlineLeadForm from './InlineLeadForm';

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        setMousePosition({ x, y });
    };

    return (
        <section id="hero" onMouseMove={handleMouseMove} className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center lg:text-left z-20"
                    >
                        <h1 className="font-display text-4xl lg:text-6xl font-medium tracking-tight text-primary dark:text-white mb-6 leading-tight">
                            Real Estate Investors: <br />
                            <span className="serif-italic text-secondary">Is Your LLC Actually Protecting You?</span>
                        </h1>
                        <p className="mt-4 text-xl text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto lg:mx-0 font-light">
                            Don't let a generic LLC wipe out your legacy. Get the comprehensive 10-Point Asset Protection Checklist today.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <InlineLeadForm />
                        </div>

                        <div className="mt-6 flex items-center gap-2 text-sm text-text-muted-light dark:text-text-muted-dark justify-center lg:justify-start">
                            <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                            <span>Trusted by 500+ Ohio Investors</span>
                        </div>
                    </motion.div>

                    {/* Right Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative h-[400px] sm:h-[500px] lg:h-[650px] mt-12 lg:mt-0 flex items-center justify-center"
                    >
                        <div className="relative w-full h-full group">
                            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                                <img
                                    alt="Successful real estate investor"
                                    className="w-full h-full object-cover"
                                    src={`${import.meta.env.BASE_URL}hero-men-composition.jpg`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/10 mix-blend-overlay"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"></div>
                            </div>

                            {/* Floating badges animated wrapper */}
                            <div className="absolute inset-0 z-10 pointer-events-none">
                                {/* Corporate Veil */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1, x: mousePosition.x * 0.5, y: mousePosition.y * 0.5 }}
                                    transition={{ opacity: { duration: 0.5, delay: 0.8 }, scale: { duration: 0.5, delay: 0.8, type: "spring" }, x: { type: "spring", stiffness: 75, damping: 15 }, y: { type: "spring", stiffness: 75, damping: 15 } }}
                                    className="absolute top-[5%] lg:top-[12%] -right-[2%] lg:-right-[10%] z-20 pointer-events-auto origin-right scale-[0.85] sm:scale-100"
                                >
                                    <motion.div
                                        animate={{ y: [0, -12, 0] }}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0 } }}
                                        className="p-4 rounded-xl flex items-center gap-3 bg-white/10 backdrop-blur-md shadow-2xl border border-white/20 hover:shadow-3xl cursor-pointer"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-secondary/80 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-white text-xl font-bold">shield</span>
                                        </div>
                                        <div>
                                            <p className="text-[0.65rem] text-white/90 uppercase tracking-widest font-bold">Corporate Veil</p>
                                            <p className="text-sm text-white font-extrabold tracking-tight">UNBROKEN</p>
                                        </div>
                                    </motion.div>
                                </motion.div>

                                {/* Google Review 5 Stars */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1, x: mousePosition.x * -0.8, y: mousePosition.y * -0.8 }}
                                    transition={{ opacity: { duration: 0.5, delay: 1.1 }, scale: { duration: 0.5, delay: 1.1, type: "spring" }, x: { type: "spring", stiffness: 75, damping: 15 }, y: { type: "spring", stiffness: 75, damping: 15 } }}
                                    className="absolute top-[40%] -left-[4%] lg:-left-[12%] z-20 pointer-events-auto origin-left scale-[0.85] sm:scale-100"
                                >
                                    <motion.div
                                        animate={{ y: [0, -18, 0] }}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ y: { repeat: Infinity, duration: 6.5, ease: "easeInOut", delay: 1 } }}
                                        className="p-3 rounded-xl flex flex-col items-center justify-center bg-white shadow-2xl border border-gray-100 cursor-pointer"
                                    >
                                        <div className="flex items-center gap-2 mb-1">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Logo" className="w-5 h-5 bg-white rounded-full p-0.5" />
                                            <span className="font-bold text-gray-900 text-base">5.0</span>
                                            <div className="flex text-secondary">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <span key={star} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-[0.65rem] text-gray-600 uppercase tracking-widest font-bold">150+ Reviews</p>
                                    </motion.div>
                                </motion.div>

                                {/* American House Image Card */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
                                    className="absolute -bottom-[5%] -right-[3%] lg:-bottom-[8%] lg:-right-[8%] z-20 pointer-events-auto w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="w-full h-full shadow-2xl rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 cursor-pointer"
                                    >
                                        <img src={`${import.meta.env.BASE_URL}american-house.png`} alt="American House" className="w-full h-full object-cover" />
                                    </motion.div>
                                </motion.div>

                                {/* Portfolio Assets */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1, x: mousePosition.x * -0.5, y: mousePosition.y * 0.9 }}
                                    transition={{ opacity: { duration: 0.5, delay: 1.4 }, scale: { duration: 0.5, delay: 1.4, type: "spring" }, x: { type: "spring", stiffness: 75, damping: 15 }, y: { type: "spring", stiffness: 75, damping: 15 } }}
                                    className="absolute bottom-[2%] lg:bottom-[5%] left-[2%] lg:left-[10%] z-20 pointer-events-auto origin-left scale-[0.85] sm:scale-100"
                                >
                                    <motion.div
                                        animate={{ y: [0, -14, 0] }}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ y: { repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.5 } }}
                                        className="p-4 rounded-xl flex items-center gap-3 bg-white/10 backdrop-blur-md shadow-2xl border border-white/20 cursor-pointer"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-secondary/80 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-white text-xl font-bold">home</span>
                                        </div>
                                        <div>
                                            <p className="text-[0.65rem] text-white/90 uppercase tracking-widest font-bold">Portfolio Assets</p>
                                            <p className="text-sm text-white font-extrabold tracking-tight">SECURED</p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Glow effect behind image */}
                        <div className="absolute -z-10 -top-10 -right-10 w-80 h-80 bg-secondary/20 rounded-full blur-[100px]"></div>
                    </motion.div>

                </div>
            </div>

            {/* Background texture */}
            <div className="absolute inset-0 z-0 opacity-40 dark:opacity-10 pointer-events-none">
                <img
                    alt="Abstract office background"
                    className="w-full h-full object-cover grayscale opacity-20"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDME5TZHtKvdpm9qjWtSnuDQTL0gxIrupAgPekxQU2zXB3BFLAzHPB43r2BT4_0FjsTbbD42ADSIsTsPAgdqExaBa3SVnTf-EdQuseIvp1EtgJmJekjpwhk-UDRkEx4PP9XkzvD-4XEnPNZrpviydqPh1X_SYlHPP9J2AqLzqsD-3tYOOgsI9nLMopQogi6OkOS22q0lQMITntFYfY9NR9wxwPo2nR1eepZKzXBOZ-IrxHmcWmsWdWzaFlcZgBJHZg5BXoSaH0H9BpH"
                />
            </div>
        </section>
    );
};

export default Hero;
