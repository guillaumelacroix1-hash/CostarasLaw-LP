import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ArrowRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DownloadModal = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

    // 1. Mount script and listen to messages exactly ONCE on component mount.
    // This allows the iframe to load immediately in the background.
    useEffect(() => {
        // Inject script
        const script = document.createElement('script');
        script.src = "https://link.marketingfirepower.app/js/form_embed.js";
        script.async = true;
        document.body.appendChild(script);

        // Listen for iframe messages (common for lead forms to signal success)
        const handleMessage = (event) => {
            if (event.data === 'form-submitted' || (typeof event.data === 'string' && event.data.includes('submitted'))) {
                setTimeout(() => {
                    onClose();
                    navigate('/thank-you');
                }, 1500);
            }
        };

        window.addEventListener('message', handleMessage);

        return () => {
            // Keep the script in the head to avoid reloading/breaking the existing iframe
            window.removeEventListener('message', handleMessage);
        };
    }, [navigate, onClose]);

    // 2. Prevent body scrolling only when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = 'unset';
            };
        }
    }, [isOpen]);

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8 transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none delay-200'}`}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-primary/60 backdrop-blur-md"
                onClick={onClose}
            />

            {/* Modal Content - Always in the DOM to prevent iframe reloading/jumping */}
            <motion.div
                animate={{
                    opacity: isOpen ? 1 : 0,
                    scale: isOpen ? 1 : 0.95,
                    y: isOpen ? 0 : 20
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-5xl bg-white dark:bg-card-dark rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[95vh] lg:max-h-[90vh]"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 md:top-6 md:right-6 z-20 p-2 md:p-3 rounded-full bg-gray-100/80 dark:bg-gray-800/80 text-gray-500 hover:text-primary hover:bg-gray-200 backdrop-blur-sm transition-colors"
                >
                    <X size={24} />
                </button>

                {/* Left: Form Area (Scrollable to prevent modal stretching) */}
                <div className="flex-1 p-6 sm:p-8 md:p-12 flex flex-col overflow-y-auto w-full no-scrollbar">
                    <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-medium text-primary dark:text-white mb-3">
                        Get Your Free <span className="serif-italic text-secondary">Asset Protection Checklist</span>
                    </h2>
                    <p className="text-sm sm:text-base text-text-muted-light dark:text-text-muted-dark mb-6 max-w-lg">
                        Enter your details below to receive the 10-point blueprint for securing your legacy and protecting your investments.
                    </p>

                    {/* Target Audience Block */}
                    <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-4 sm:p-5 mb-6 border border-primary/10">
                        <h3 className="font-display text-lg font-semibold text-primary dark:text-white mb-3">
                            This guide is for you if:
                        </h3>
                        <ul className="space-y-2 text-sm text-text-muted-light dark:text-text-muted-dark font-medium">
                            <li className="flex items-start gap-2">
                                <CheckCircle size={18} className="text-secondary shrink-0 mt-0.5" />
                                <span>You own a business in Ohio</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle size={18} className="text-secondary shrink-0 mt-0.5" />
                                <span>You have rental properties or real estate investments</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle size={18} className="text-secondary shrink-0 mt-0.5" />
                                <span>You want to protect your assets from lawsuits</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle size={18} className="text-secondary shrink-0 mt-0.5" />
                                <span>You want to structure your LLC correctly</span>
                            </li>
                        </ul>
                    </div>

                    {/* Iframe Container */}
                    <div className="flex-grow relative w-full h-[450px] sm:h-[500px]">
                        <iframe
                            src="https://link.marketingfirepower.app/widget/form/Rdcs5tu1rttGjH00JOtQ"
                            style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
                            id="inline-Rdcs5tu1rttGjH00JOtQ"
                            data-layout="{'id':'INLINE'}"
                            data-trigger-type="alwaysShow"
                            data-trigger-value=""
                            data-activation-type="alwaysActivated"
                            data-activation-value=""
                            data-deactivation-type="neverDeactivate"
                            data-deactivation-value=""
                            data-form-name="LLC Lead Magnet - Guillaume"
                            data-height="auto" // Let the script adjust its internal height, but our container will scroll if necessary
                            data-layout-iframe-id="inline-Rdcs5tu1rttGjH00JOtQ"
                            data-form-id="Rdcs5tu1rttGjH00JOtQ"
                            title="LLC Lead Magnet - Guillaume"
                        ></iframe>
                    </div>

                    {/* Demo/Bypass Button for User Testing */}
                    <div className="mt-4 flex justify-end">
                        <button
                            onClick={() => { onClose(); navigate('/thank-you'); }}
                            className="text-xs sm:text-sm text-gray-400 hover:text-secondary flex items-center gap-1 transition-colors italic"
                        >
                            Simulation: Continue to Booking <ArrowRight size={14} />
                        </button>
                    </div>
                </div>

                {/* Right: Book Visual Area (Hidden on small screens, fixed non-scrolling) */}
                <div className="hidden md:flex md:w-[40%] lg:w-[45%] bg-gray-50 dark:bg-surface-dark items-center justify-center p-8 lg:p-12 border-l border-gray-100 dark:border-gray-800">
                    <div className="relative group w-full max-w-[320px]">
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
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] h-4 bg-black/10 blur-xl rounded-full"></div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default DownloadModal;
