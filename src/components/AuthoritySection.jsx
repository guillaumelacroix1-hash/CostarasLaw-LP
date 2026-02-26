import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const AuthoritySection = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <section id="authority" className="py-24 bg-background-light dark:bg-surface-dark border-y border-gray-100 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Video Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="relative group cursor-pointer"
                        onClick={() => setIsVideoOpen(true)}
                    >
                        <div className="absolute -inset-2 bg-gradient-to-r from-secondary to-primary rounded-2xl opacity-20 group-hover:opacity-30 blur-lg transition duration-500"></div>
                        <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl bg-gray-900 border border-gray-800">
                            {/* Replaced with actual video thumbnail */}
                            <img
                                alt="Nicholas Costaras Video"
                                className="w-full h-full object-cover opacity-80"
                                src="https://img.youtube.com/vi/oHKc8BBRM14/maxresdefault.jpg"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
                                <motion.div
                                    whileHover={{ scale: 1.15 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center pl-1 shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                                >
                                    <span className="material-symbols-outlined text-primary text-3xl">play_arrow</span>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary dark:bg-white/10 dark:text-white text-xs font-semibold tracking-wide uppercase">
                            Attorney Profile
                        </div>

                        <h2 className="font-display text-4xl lg:text-5xl font-medium text-primary dark:text-white">
                            Meet Nicholas Costaras <br />
                            <span className="text-secondary text-3xl lg:text-4xl block mt-2 font-normal serif-italic">Investor & Attorney</span>
                        </h2>

                        <div className="space-y-6 text-lg text-text-muted-light dark:text-text-muted-dark pb-6">
                            <p>
                                At Costaras Law, we bridge the gap between complex legal theory and practical business reality. We ensure your wealth passes to the next generation, not to a creditor.
                            </p>
                        </div>

                    </motion.div>
                </div>

                {/* Centered Modern Quote Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-12 md:mt-16 text-center max-w-4xl mx-auto flex flex-col items-center relative"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 text-[8rem] md:text-[12rem] font-serif text-secondary/10 dark:text-gray-700/20 leading-none select-none pointer-events-none -mr-4">
                        &ldquo;
                    </div>
                    <p className="relative z-10 font-display font-light text-xl md:text-2xl italic text-text-main-light dark:text-white/80 leading-relaxed tracking-wide px-4">
                        "I don't just draft documents; I build fortresses. As a real estate investor myself, I understand the sleepless nights worrying about liability."
                    </p>

                    <div className="mt-10 flex items-center justify-center gap-4">
                        <img
                            alt="Nicholas Costaras"
                            src={`${import.meta.env.BASE_URL}nicholas-costaras.jpg`}
                        />
                        <div className="text-left">
                            <p className="font-bold text-primary dark:text-white text-base">Nicholas Costaras</p>
                            <p className="text-sm text-secondary font-medium tracking-wide uppercase mt-0.5">Founder & Managing Partner</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {isVideoOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                        onClick={() => setIsVideoOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-md transition-colors"
                                onClick={() => setIsVideoOpen(false)}
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/oHKc8BBRM14?autoplay=1"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default AuthoritySection;
