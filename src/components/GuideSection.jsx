import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GuideSection = () => {
    const [showForm, setShowForm] = useState(false);
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');
        setTimeout(() => {
            // Force PDF download using fetch
            fetch(`${import.meta.env.BASE_URL}10-questions-guide.pdf`)
                .then(response => response.blob())
                .then(blob => {
                    const url = window.URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = 'Costaras_Law_Asset_Protection_Checklist.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    window.URL.revokeObjectURL(url);
                    setStatus('success');
                })
                .catch(err => {
                    console.error("Download failed", err);
                    setStatus('idle');
                });

            setTimeout(() => {
                setStatus('idle');
                setShowForm(false);
                setEmail('');
            }, 3000);
        }, 1500);
    };
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
                        className="space-y-10"
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

                        <div className="pt-4 min-h-[60px] flex items-center">
                            <form
                                className="flex flex-col sm:flex-row w-full max-w-sm gap-3"
                                onSubmit={handleFormSubmit}
                            >
                                <input
                                    className="flex-grow px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-text-main-light dark:text-text-main-dark focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all shadow-sm"
                                    placeholder="Enter your email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={status === 'loading' || status === 'success'}
                                    required
                                />
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="whitespace-nowrap py-2 px-6 border border-transparent rounded-lg shadow-md font-semibold text-white bg-secondary hover:bg-yellow-600 focus:outline-none transition-colors disabled:opacity-75"
                                    type="submit"
                                    disabled={status === 'loading' || status === 'success'}
                                >
                                    {status === 'idle' && 'Get Checklist'}
                                    {status === 'loading' && 'Loading...'}
                                    {status === 'success' && 'Downloading...'}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Right: Book Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="relative w-full max-w-md">
                            {/* Decorative background blur */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-secondary/30 to-primary/10 rounded-[2rem] blur-2xl opacity-50"></div>

                            <img
                                src={`${import.meta.env.BASE_URL}ebook-visual.jpg`}
                                alt="10-Point Asset Protection Checklist Guide"
                                className="relative rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 w-full object-cover transform rotate-1 hover:rotate-0 transition-transform duration-500"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default GuideSection;
