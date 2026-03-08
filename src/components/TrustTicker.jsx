import React from 'react';
import { motion } from 'framer-motion';

const TrustTicker = () => {
    const items = [
        "Trusted by Ohio business owners for over 20 years",
        "Thousands of clients protected",
        "Ohio licensed attorneys",
    ];

    return (
        <div className="border-y border-gray-100 dark:border-gray-800 bg-white dark:bg-black/20 py-8 overflow-hidden">
            <div className="flex w-full">
                {/* Infinite Scroll Container */}
                <motion.div
                    className="flex whitespace-nowrap items-center gap-12"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30
                    }}
                >
                    {[...items, ...items, ...items, ...items].map((item, index) => (
                        <React.Fragment key={index}>
                            <span className="text-xl font-bold font-display text-primary dark:text-white tracking-wider">
                                {item}
                            </span>
                            <span className="material-symbols-outlined text-primary dark:text-white text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        </React.Fragment>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default TrustTicker;
