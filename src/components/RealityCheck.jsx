import React from 'react';
import { motion } from 'framer-motion';

const RealityCheck = () => {
    // Removed container and item variants to fix layout clipping bugs. 
    // Cards will animate individually on scroll.

    return (
        <section id="problem" className="py-24 bg-white dark:bg-background-dark transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="font-display text-4xl lg:text-5xl font-medium text-primary dark:text-white mb-6">
                        One streamlined system for <span className="serif-italic text-secondary">all your protection requirements.</span>
                    </h2>
                    <p className="text-lg text-text-muted-light dark:text-text-muted-dark">
                        We replace confusion with clarity. Understand exactly where your vulnerabilities lie.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0 }}
                        className="bg-background-light dark:bg-surface-dark rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 group"
                    >
                        <div className="h-12 w-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-secondary text-2xl">warning</span>
                        </div>
                        <h3 className="font-display text-2xl font-semibold text-primary dark:text-white mb-3">The DIY Trap</h3>
                        <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                            Online filings often miss critical operating agreement clauses that courts look for to pierce the corporate veil.
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="bg-background-light dark:bg-surface-dark rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full -mr-4 -mt-4"></div>
                        <div className="h-12 w-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-secondary text-2xl">shield</span>
                        </div>
                        <h3 className="font-display text-2xl font-semibold text-primary dark:text-white mb-3">Inside vs. Outside Liability</h3>
                        <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                            Learn the difference between a lawsuit against the property and a lawsuit against you personally.
                        </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-background-light dark:bg-surface-dark rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 group"
                    >
                        <div className="h-12 w-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-secondary text-2xl">person_off</span>
                        </div>
                        <h3 className="font-display text-2xl font-semibold text-primary dark:text-white mb-3">Piercing the Veil</h3>
                        <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                            Single-member LLCs face higher scrutiny. Discover the "charging order" protection you might be missing.
                        </p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default RealityCheck;
