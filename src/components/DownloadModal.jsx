import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const DownloadModal = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            // Re-inject the script when the modal opens to ensure the iframe/form initializes correctly
            const script = document.createElement('script');
            script.src = "https://link.marketingfirepower.app/js/form_embed.js";
            script.async = true;
            document.body.appendChild(script);

            // Prevent scrolling when modal is open
            document.body.style.overflow = 'hidden';

            return () => {
                document.body.removeChild(script);
                document.body.style.overflow = 'unset';
            };
        }
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-primary/40 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-5xl bg-white dark:bg-card-dark rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 z-10 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-primary transition-colors"
                        >
                            <X size={24} />
                        </button>

                        {/* Left: Form Area */}
                        <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col">
                            <h2 className="font-display text-3xl md:text-4xl font-medium text-primary dark:text-white mb-4">
                                Get Your Free <span className="serif-italic text-secondary">Asset Protection Checklist</span>
                            </h2>
                            <p className="text-text-muted-light dark:text-text-muted-dark mb-8">
                                Enter your details below to receive the 10-point blueprint for securing your legacy and protecting your investments.
                            </p>

                            {/* Iframe Container */}
                            <div className="flex-grow relative min-h-[400px]">
                                <iframe
                                    src="https://link.marketingfirepower.app/widget/form/Rdcs5tu1rttGjH00JOtQ"
                                    style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                                    id="inline-Rdcs5tu1rttGjH00JOtQ"
                                    data-layout="{'id':'INLINE'}"
                                    data-trigger-type="alwaysShow"
                                    data-trigger-value=""
                                    data-activation-type="alwaysActivated"
                                    data-activation-value=""
                                    data-deactivation-type="neverDeactivate"
                                    data-deactivation-value=""
                                    data-form-name="LLC Lead Magnet - Guillaume"
                                    data-height="auto"
                                    data-layout-iframe-id="inline-Rdcs5tu1rttGjH00JOtQ"
                                    data-form-id="Rdcs5tu1rttGjH00JOtQ"
                                    title="LLC Lead Magnet - Guillaume"
                                ></iframe>
                            </div>
                        </div>

                        {/* Right: Book Visual Area */}
                        <div className="hidden md:flex md:w-[40%] bg-gray-50 dark:bg-surface-dark items-center justify-center p-12 border-l border-gray-100 dark:border-gray-800">
                            <div className="relative group">
                                <motion.div
                                    animate={{
                                        y: [0, -10, 0],
                                        rotate: [1, -1, 1]
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <img
                                        src="https://assets.cdn.filesafe.space/7ddkjb0m1qKwq9PPcv33/media/6998907908245e0752062524.png"
                                        alt="eBook Cover"
                                        className="w-full h-auto drop-shadow-2xl"
                                    />
                                </motion.div>

                                {/* Decorative elements */}
                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-black/10 blur-xl rounded-full"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default DownloadModal;
