import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Phone } from 'lucide-react';

const ThankYou = () => {
    useEffect(() => {
        // HighLevel/msgsndr dynamically resizes and handles logic if we include the script
        const script = document.createElement('script');
        script.src = "https://link.marketingfirepower.app/js/form_embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="relative min-h-screen bg-primary flex flex-col items-center pt-8 pb-4 px-4 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-primary/80 dark:bg-background-dark/90 z-10 transition-colors duration-300"></div>
                <img
                    src={`${import.meta.env.BASE_URL}footer.jpg`}
                    alt="Abstract Architecture Background"
                    className="w-full h-full object-cover grayscale opacity-60 mix-blend-overlay"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 max-w-6xl w-full text-center"
            >
                {/* Header/Success Message */}
                <div className="flex justify-center mb-8">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                        className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center shadow-lg shadow-secondary/20"
                    >
                        <CheckCircle size={48} className="text-white" />
                    </motion.div>
                </div>

                <h1 className="font-display text-4xl md:text-6xl font-medium text-white mb-6 leading-tight">
                    Success! Your 10-Point Checklist <br />
                    <span className="serif-italic text-secondary font-light">is on its way to your inbox.</span>
                </h1>

                <p className="text-xl text-white/70 max-w-2xl mx-auto font-light mb-12">
                    Don't leave your real estate portfolio exposed for another day. Secure your assets now by booking a Free 20-Minute Structural Review Call with our legal team.
                </p>

                {/* The Booking Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl overflow-hidden mb-12"
                >
                    <div className="w-full min-h-[700px]">
                        <iframe
                            src="https://link.marketingfirepower.app/widget/booking/UQ1Y94OgOCHZZIbw4XCO"
                            style={{ width: '100%', border: 'none', overflow: 'hidden' }}
                            scrolling="no"
                            id="msgsndr-calendar"
                            className="w-full h-[700px]"
                            title="Booking Calendar"
                        ></iframe>
                    </div>
                </motion.div>

                {/* Secondary Contact Option */}
                <div className="flex flex-col items-center gap-4">
                    <p className="text-white/60">Prefer to speak right now? Call us directly:</p>
                    <a
                        href="tel:+12163508123"
                        className="flex items-center gap-3 text-secondary text-2xl font-bold hover:text-yellow-400 transition-colors group"
                    >
                        <Phone size={24} className="group-hover:animate-bounce" />
                        +1 216-350-8123
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default ThankYou;
