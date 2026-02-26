import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        text: "With Costaras Law, we got clear, concise guidance and efficient legal support, making what was once a complex process, surprisingly straightforward.",
        name: "Sarah Jenkins",
        role: "Real Estate Developer",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhBnu111OLM4SdBOpGMa5PGZkpEJIeXLEFFu3PQQj3QJ7dQ8Wp9Wuo2rJ2IKK0LFHK6yahnVQP6ZG6KAJKna6qVZZiBdw6aMp5RgW6W3CFQUzD4QqKnIfJ6oLOlBR5t-C2grXCb6wI42B9IWruQyaIz71KEMMiCuMS1pahllZmbAdpJr15nvT86Gk-zlXzGDIuUI6rfSq3tuTF8Xz5gnurge_ZHvUrSBIb5ZLZXcGQHsPuZj4SgMxoIIwEuFcYsz3jTAohdlqDZfLq"
    },
    {
        text: "The peace of mind is priceless. Nicholas identified risks in our structure that our previous attorney completely missed.",
        name: "Marcus Thorne",
        role: "Portfolio Manager",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcP2UcA7PKyrAX1hwSgqxJzBnVTghTsREnyX-tzhbGklRkvPI7rTC_lcwWmVTj5cUxGg_7bNEHJu_n3UhNEKX_ygy3Z0ciojA0A34BgRY8J75C0JM0T72Xf02dqzyNVjJ7zh1DBbxL-YJU0ZlmucbAh1To8aEtqETCeeNm4uZ6F1kLiOrSdqovKNYJG5B14hg4ggxgAp4NjUvVjXb0SeWWopznhTTnW2hwkpn07er_bFDwK8USVI-fvCrTcvV_xeho515Jn8J-39rn"
    },
    {
        text: "Finally, an attorney who speaks plain English. The checklist was an eye-opener for our partnership.",
        name: "Elena Rodriguez",
        role: "Small Business Owner",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbLAmj_CeaX-35Imvj7RBBL29qh3qc0Lfk0Ug7TX_GCwtDlnDZm5EP-zXstrbimsNnvbW4t5kJq8Q9jXCYFR0Dw-yKE10jdvWe1PN44ljoIouU95_zDH2xU6j79SyLt4UDi883GIi2wKEWdm0ooTdlfbs9DMsuzjx9pg6tqXaxnYYb7b49XrFzOLGSSUqanfMmjnh7O302gdlYDsAVBUyUH-taU6e1kwv6xJHlyG9J5qkx7hzz_tHvi2tQGizUFBTmKfOH5p6YE2JK"
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

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

                <div className="relative max-w-4xl mx-auto">
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
                            <span className="text-[0.7rem] text-text-muted-light dark:text-text-muted-dark font-medium uppercase tracking-wider">Based on 150+ reviews</span>
                        </div>
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default Testimonials;
