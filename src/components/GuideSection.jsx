import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DownloadModal from './DownloadModal';

const GuideSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const features = [
        {
            title: "Tie-Breakers",
            description: "What happens when 50/50 partners disagree? Avoid deadlock.",
            icon: "gavel"
        },
        {
            title: "Exit Strategies",
            description: "Pre-planned buyouts and valuation methods to save friendships.",
            icon: "logout"
        },
        {
            title: "10 Critical Questions",
            description: "Questions your current attorney probably didn't ask you.",
            icon: "quiz"
        }
    ];

    const handleScrollToHero = (e) => {
        // Obsolete function since button spawns a form directly now. Let's keep empty or delete it.
    };

    return (
        <section id="guide" className="py-24 bg-white dark:bg-background-dark border-y border-gray-100 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="space-y-10 relative z-20"
                    >
                        <div>
                            <h2 className="font-display text-4xl lg:text-5xl font-medium text-primary dark:text-white mb-6">
                                Inside the 10-Point <br /> Asset Protection Checklist
                            </h2>
                            <p className="text-xl text-text-muted-light dark:text-text-muted-dark font-light">
                                This isn't just a list; it's a blueprint for security. We break down the legal jargon into actionable steps.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 * idx }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined text-secondary">{feature.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-primary dark:text-white mb-1">{feature.title}</h3>
                                        <p className="text-text-muted-light dark:text-text-muted-dark">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="pt-4 min-h-[60px] flex items-center relative z-10">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsModalOpen(true)}
                                className="whitespace-nowrap py-4 px-10 border border-transparent rounded-full shadow-lg font-semibold text-white bg-secondary hover:bg-yellow-600 focus:outline-none transition-all flex items-center gap-3 w-full sm:w-auto justify-center select-none touch-manipulation relative z-50 cursor-pointer"
                            >
                                <span className="material-symbols-outlined">download</span>
                                Download Free Guide
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Right: Book Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative flex justify-center lg:justify-start pointer-events-none"
                    >
                        <div className="relative w-full max-w-[300px] lg:ml-[50px]">
                            <img
                                src="https://assets.cdn.filesafe.space/7ddkjb0m1qKwq9PPcv33/media/6998907908245e0752062524.png"
                                alt="10-Point Asset Protection Checklist Guide"
                                className="relative w-full h-auto object-contain transform rotate-1 hover:rotate-0 transition-transform duration-500"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>

            <DownloadModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};

export default GuideSection;
