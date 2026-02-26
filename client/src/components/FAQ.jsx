import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "What types of legal services does Costaras Law offer?",
        answer: "We specialize in real estate asset protection, business entity formation, estate planning, and comprehensive operational agreements tailored to high-net-worth investors and business owners."
    },
    {
        question: "Is Costaras Law suitable for small portfolios?",
        answer: "Absolutely. Setting up the right foundational structure early on is critical. We ensure that your protection scales as your portfolio grows."
    },
    {
        question: "What makes Costaras Law different from traditional firms?",
        answer: "Our founder, Nicholas Costaras, is an active real estate investor. We blend theoretical legal strategies with practical, boots-on-the-ground real estate experience to craft robust, bulletproof structures."
    },
    {
        question: "Can you handle out-of-state LLCs?",
        answer: "Yes. While based in Ohio, we regularly consult and coordinate the formation of out-of-state entities, including Wyoming and Delaware holding companies, depending on your tax and anonymity strategies."
    }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="bg-background-light dark:bg-surface-dark rounded-lg overflow-hidden transition-colors duration-300">
            <button
                onClick={onClick}
                className="flex justify-between items-center w-full text-left px-6 py-4 focus:outline-none group"
            >
                <span className="font-medium text-primary dark:text-white pr-4">{question}</span>
                <span className={`material-symbols-outlined text-gray-400 group-hover:text-primary transition-all duration-300 ${isOpen ? 'rotate-45 text-secondary' : ''}`}>
                    add
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-6 pb-4 text-text-muted-light dark:text-text-muted-dark text-sm leading-relaxed border-t border-gray-100 dark:border-gray-800 pt-3">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0); // Open the first one by default

    return (
        <section id="faq" className="py-24 bg-white dark:bg-background-dark transition-colors duration-300">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="font-display text-4xl font-medium text-center text-primary dark:text-white mb-4">Frequently Asked Questions</h2>
                    <p className="text-center text-text-muted-light dark:text-text-muted-dark">Do you still have questions about asset protection?</p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
