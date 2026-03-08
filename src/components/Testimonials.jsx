import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        text: "I had the absolute pleasure of collaborating with the Costaras Law team (specifically Anne and Nicholas), and I am incredibly impressed by their professionalism. Having seen their process from the inside, their level of expertise in real estate asset protection and LLC structuring in Ohio is unmatched. They don't just file paperwork; they build true legal fortresses for investors.",
        name: "Guillaume Lacroix",
        role: "Real Estate Investor",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
    },
    {
        text: "Costaras Law is without a doubt the best in the business!!! Helped us with our new acquisition and made it so seamless!!! Highly recommended.",
        name: "Joshua Rust",
        role: "Real Estate Investor",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
    },
    {
        text: "Mr. Costaras has always been a pleasure to work with. His level of professionalism is top notch, BAR none. You can rest assured that your trust and estate planning needs will be met with a caring heart and a sharp mind.",
        name: "Manda Mance Wilkinson",
        role: "Estate Planning Client",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    },
    {
        text: "Nicholas is great to deal with. He is very knowledgeable, dealing with every request promptly and professionally. Truly caring about the end result for the client in every case. Highly recommend!",
        name: "Matthew Kretschmer",
        role: "Business Owner",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
    },
    {
        text: "Nicholas has been incredibly helpful to me as I launch a small business. He's helped me build my LLC and accompanying paperwork on solid legal footing and has stepped in several times as needed to assist with additional steps.",
        name: "Laura Babka",
        role: "Small Business Owner",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80"
    },
    {
        text: "Nick is exactly what you want in an attorney. He is always professional and gives clients all the time they need to understand the situation. His flat fee model worked great for me. Highly recommend.",
        name: "Natalie Thomas",
        role: "Client",
        image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80"
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 12000);
        return () => clearInterval(timer);
    }, [isPaused]);

    return (
        <section id="testimonials" className="relative py-24 bg-background-light dark:bg-surface-dark transition-colors duration-300 overflow-hidden">
            {/* Watermark office background */}
            <div className="absolute inset-0 z-0 opacity-[0.05] dark:opacity-[0.03] pointer-events-none">
                <img
                    alt="Modern American Office"
                    className="w-full h-full object-cover grayscale"
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-center font-display text-4xl lg:text-5xl font-medium text-primary dark:text-white mb-16">Client Success Stories</h2>

                <div
                    className="relative max-w-4xl mx-auto"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onClick={() => setIsPaused(true)}
                >
                    {/* Carousel Buttons */}
                    <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-10">
                        <button
                            onClick={prevTestimonial}
                            className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-primary dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>
                    </div>

                    <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-10">
                        <button
                            onClick={nextTestimonial}
                            className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-primary dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>

                    <div className="overflow-hidden px-4 py-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="bg-white dark:bg-background-dark p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800"
                            >
                                <div className="flex text-secondary mb-6 justify-center md:justify-start">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span key={star} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    ))}
                                </div>
                                <p className="text-xl md:text-2xl text-text-muted-light dark:text-text-muted-dark italic mb-8 leading-relaxed font-display text-center md:text-left">
                                    "{testimonials[currentIndex].text}"
                                </p>
                                <div className="flex items-center justify-center md:justify-start">
                                    <div className="h-14 w-14 bg-gray-200 rounded-full flex-shrink-0 overflow-hidden">
                                        <img alt={testimonials[currentIndex].name} className="h-full w-full object-cover" src={testimonials[currentIndex].image} />
                                    </div>
                                    <div className="ml-4 text-left">
                                        <p className="text-base font-bold text-primary dark:text-white">{testimonials[currentIndex].name}</p>
                                        <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-6">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-secondary' : 'w-2 bg-gray-300 dark:bg-gray-700'}`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Google My Business Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 flex justify-center"
                >
                    <a
                        href="https://share.google/wBFuIass6AF0yYXmd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white dark:bg-surface-dark shadow-sm rounded-full py-2 px-6 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer inline-flex border border-gray-100 dark:border-gray-800"
                    >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Logo" className="w-8 h-8" />
                        <div className="flex flex-col justify-center">
                            <div className="flex items-center gap-2 -mb-0.5">
                                <span className="font-bold text-gray-900 dark:text-white text-xl leading-none">5.0</span>
                                <div className="flex text-secondary items-center">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span key={star} className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    ))}
                                </div>
                            </div>
                            <span className="text-[0.7rem] text-text-muted-light dark:text-text-muted-dark font-medium uppercase tracking-wider">Based on 20 reviews on Google</span>
                        </div>
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default Testimonials;
