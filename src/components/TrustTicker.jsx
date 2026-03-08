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
                    className="flex whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20
                    }}
                >
                    {[...items, ...items, ...items, ...items].map((item, index) => (
                        <div
                            key={index}
                            className="px-8 flex items-center gap-8 opacity-80 hover:opacity-100 transition-opacity"
                        >
                            <span className="text-xl font-bold font-display text-primary dark:text-white tracking-wider">
                                {item}
                            </span>
                            <span className="material-symbols-outlined text-primary dark:text-white text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default TrustTicker;
