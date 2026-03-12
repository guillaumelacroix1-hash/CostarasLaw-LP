import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
    return (
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-heading font-bold text-primary-light dark:text-primary-dark mb-8 text-center pt-8">
                    Privacy Policy
                </h1>
                <div className="prose prose-lg dark:prose-invert max-w-none text-text-muted-light dark:text-text-muted-dark space-y-6">
                    <p className="font-semibold">Last Updated: March 2026</p>

                    <p>
                        At Costaras Law, your privacy is a top priority. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website or engage our legal services.
                    </p>

                    <h2 className="text-2xl font-bold text-text-main-light dark:text-text-main-dark mt-8 mb-4">1. Information We Collect</h2>
                    <p>
                        We may collect personal information that you voluntarily provide to us, including but not limited to your name, email address, phone number, and any details regarding your legal inquiry when you fill out forms on our website or contact us directly.
                    </p>

                    <h2 className="text-2xl font-bold text-text-main-light dark:text-text-main-dark mt-8 mb-4">2. How We Use Your Information</h2>
                    <p>
                        The information we collect is used to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Respond to your inquiries and communicate with you effectively;</li>
                        <li>Schedule and manage consultations and client support services;</li>
                        <li>Provide requested legal services and advice;</li>
                        <li>Send you relevant updates, newsletters, or marketing communications (which you may opt out of at any time);</li>
                        <li>Improve our website functionality and user experience.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-text-main-light dark:text-text-main-dark mt-8 mb-4">3. Information Sharing and Disclosure</h2>
                    <p>
                        Costaras Law strictly maintains attorney-client confidentiality. We do not sell, trade, or rent your personal information to third parties. We may share information only when necessary to provide our services, comply with legal obligations, or protect our rights and safety.
                    </p>

                    <h2 className="text-2xl font-bold text-text-main-light dark:text-text-main-dark mt-8 mb-4">4. Data Security</h2>
                    <p>
                        We implement reasonable security measures, including secure digital and cloud-based systems, to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please be aware that no transmission of data over the internet is completely secure.
                    </p>

                    <h2 className="text-2xl font-bold text-text-main-light dark:text-text-main-dark mt-8 mb-4">5. Use of Cookies</h2>
                    <p>
                        Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our audience is coming from.
                    </p>

                    <h2 className="text-2xl font-bold text-text-main-light dark:text-text-main-dark mt-8 mb-4">6. Your Rights</h2>
                    <p>
                        Depending on your jurisdiction, you may have the right to access, correct, or delete your personal information. If you wish to exercise these rights or opt out of our communications, please contact us.
                    </p>

                    <h2 className="text-2xl font-bold text-text-main-light dark:text-text-main-dark mt-8 mb-4">7. Contact Us</h2>
                    <p>
                        If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                    </p>
                    <p className="mt-4">
                        <strong>Costaras Law</strong><br />
                        Email: info@costaraslaw.com<br />
                        Website: www.costaraslaw.com
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default PrivacyPolicy;
