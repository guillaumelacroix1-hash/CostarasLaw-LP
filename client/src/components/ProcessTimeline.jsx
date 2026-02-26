import React from 'react';
import { motion } from 'framer-motion';
import { FileSearch, Compass, ShieldCheck } from 'lucide-react';

const ProcessTimeline = () => {
    const steps = [
        {
            num: '1',
            title: 'Audit',
            desc: 'We review your current holdings and identify specific liability exposure points.',
            Icon: FileSearch
        },
        {
            num: '2',
            title: 'Strategy',
            desc: 'We design a custom entity structure tailored to your portfolio size and goals.',
            Icon: Compass
        },
        {
            num: '3',
            title: 'Protection',
            desc: 'We execute the formation filings and deliver your comprehensive operating agreements.',
            Icon: ShieldCheck
        }
    ];

    return (
        <section className="py-32 bg-white dark:bg-background-dark relative overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-24"
                >
                    <h2 className="font-display text-4xl lg:text-5xl font-medium text-primary dark:text-white mb-6">Our Protection Process</h2>
                    <p className="text-lg text-text-muted-light dark:text-text-muted-dark">From vulnerability to fortress in three steps.</p>
                </motion.div>

                <div className="relative">
                    {/* Horizontal Line connecting steps */}
                    <div className="absolute top-14 left-[15%] right-[15%] h-[2px] bg-gray-200 dark:bg-gray-700 hidden md:block"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="h-28 w-28 rounded-full bg-secondary flex items-center justify-center mb-8 relative z-10 shadow-lg"
                                >
                                    <step.Icon className="w-12 h-12 text-white" strokeWidth={1.5} />
                                </motion.div>
                                <h3 className="font-display text-2xl font-semibold text-primary dark:text-white mb-4">{step.num}. {step.title}</h3>
                                <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed max-w-xs">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessTimeline;
