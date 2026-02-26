import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InlineLeadForm = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success

    const [showForm, setShowForm] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');

        // Simulate API call and force PDF download
        setTimeout(() => {
            fetch('/10-questions-guide.pdf')
                .then(response => response.blob())
                .then(blob => {
                    const url = window.URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = 'Costaras_Law_Asset_Protection_Checklist.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    window.URL.revokeObjectURL(url);
                    setStatus('success');
                })
                .catch(err => {
                    console.error("Download failed", err);
                    setStatus('idle');
                });

            // Reset after a while
            setTimeout(() => {
                setStatus('idle');
                setShowForm(false);
                setEmail('');
            }, 3000);
        }, 1500);
    };

    if (!showForm) {
        return (
            <div className="flex flex-col sm:flex-row gap-4 w-full">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowForm(true)}
                    className="whitespace-nowrap py-3 px-6 border border-transparent rounded-lg shadow-md text-base font-semibold text-white bg-secondary hover:bg-yellow-600 transition-colors"
                >
                    Download the checklist ebook
                </motion.button>
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#booking"
                    className="whitespace-nowrap py-3 px-6 border border-transparent rounded-lg shadow-md text-base font-semibold text-white bg-primary hover:bg-opacity-90 transition-colors text-center"
                >
                    Book Consultation
                </motion.a>
            </div>
        );
    }

    return (
        <motion.form
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row w-full max-w-md gap-3"
            onSubmit={handleSubmit}
        >
            <input
                className="flex-grow px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-text-main-light dark:text-text-main-dark focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all shadow-sm"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading' || status === 'success'}
                required
                autoFocus
            />
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="whitespace-nowrap py-3 px-6 border border-transparent rounded-lg shadow-sm text-base font-semibold text-white bg-secondary hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-colors disabled:opacity-75 disabled:cursor-not-allowed"
                type="submit"
                disabled={status === 'loading' || status === 'success'}
            >
                {status === 'idle' && 'Get Checklist'}
                {status === 'loading' && 'Loading...'}
                {status === 'success' && 'Downloading...'}
            </motion.button>
        </motion.form>
    );
};

export default InlineLeadForm;
