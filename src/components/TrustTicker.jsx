import React from 'react';
import { motion } from 'framer-motion';

const TrustTicker = () => {
    const items = [
        "★ 500+ Investors Protected",
        "★ Ohio Expert",
        "★ $100M+ Secured",
        "★ 500+ Investors Protected",
        "★ Ohio Expert",
        "★ $100M+ Secured",
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
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="px-12 flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
                        >
                            <span className="text-xl font-bold font-display text-primary dark:text-white tracking-wider">
                                {item}
                            </span>
                        </div>
                    ))}
                    {/* Duplicate for seamless looping */}
                    {items.map((item, index) => (
                        <div
                            key={`dup-${index}`}
                            className="px-12 flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
                        >
                            <span className="text-xl font-bold font-display text-primary dark:text-white tracking-wider">
                                {item}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default TrustTicker;
