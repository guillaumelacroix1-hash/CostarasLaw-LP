import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
    return (
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-heading font-bold text-primary-light dark:text-primary-dark mb-8 text-center pt-8">
                    Client Terms and Conditions
                </h1>
                <div className="prose prose-lg dark:prose-invert max-w-none text-text-muted-light dark:text-text-muted-dark space-y-6">
                    <p className="font-bold text-xl uppercase text-center mb-8">
                        MASTER LEGAL SERVICES AGREEMENT (MLSA)<br />
                        <span className="text-lg font-normal capitalize">For Business, Estate Planning, and All Legacy Services</span>
                    </p>

                    <h2 className="text-2xl font-bold text-text-main-light dark:text-text-main-dark mt-8 mb-4">I. PURPOSE</h2>
                    <p><strong>A. Mutual Protection:</strong> This MLSA establishes the mutually protective terms that govern your attorney-client relationship with Costaras Law.</p>
                    <p><strong>B. Scopes of Engagement:</strong> Each Scope of Engagement (SOE) defines the specific services, deliverables, timeline, and fees for a particular matter.</p>
                    <p><strong>C. Representation:</strong> Legal representation begins only when an SOE is executed by both parties.</p>
                    <p><strong>D. Guarantee of Outcome:</strong> While the Firm will provide its best professional efforts, judgment, and skill, the Firm does not guarantee any particular outcome, result, or timeline for any Matter.</p>

                    <h2 className="text-2xl font-bold text-text-main-light dark:text-text-main-dark mt-8 mb-4">II. DEFINITIONS</h2>
                    <p><strong>A. "Firm" or "Costaras Law"</strong> - Costaras Law, LLC, including its attorneys, paralegals, staff, and any supervised agents acting within the scope of representation.</p>
                    <p><strong>B. "Client"</strong> - the individual or entity signing this Agreement, including any authorized representative acting on its behalf.</p>

                    <h2 className="text-2xl font-bold text-text-main-light dark:text-text-main-dark mt-8 mb-4">III. SCOPE OF SERVICES</h2>
                    <p>You agree to services specifically listed in an SOE. Anything outside of that SOE requires a new engagement. Costaras Law provides comprehensive legal services including:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Business Transactions (Formation, Contracts, Fractional General Counsel)</li>
                        <li>Estate Planning (Wills, Trusts, Powers of Attorney)</li>
                        <li>Mergers &amp; Acquisitions (LOIs, Purchase Agreements)</li>
                        <li>Real Estate Transactions</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-text-main-light dark:text-text-main-dark mt-8 mb-4">IV. FEES &amp; PAYMENT TERMS</h2>
                    <p>Fees are described in each SOE and may include Flat Fees, Earned-Upon-Receipt Fees, Deposit Retainers, or Subscription Fees. If any invoice or required payment is not made when due, the Firm may temporarily pause all work until payment is received.</p>

                    <h2 className="text-2xl font-bold text-text-main-light dark:text-text-main-dark mt-8 mb-4">V. COMMUNICATION STANDARDS</h2>
                    <p>We commit to providing proactive, timely communication and clear direction. In return, the Client agrees to provide accurate information, respond in a reasonable time, review documents promptly, and honor payment terms.</p>

                    <h2 className="text-2xl font-bold text-text-main-light dark:text-text-main-dark mt-8 mb-4">VI. CONFIDENTIALITY &amp; CYBERSECURITY</h2>
                    <p>All communications and information are confidential. You consent to our use of secure digital and cloud-based systems. We ask that clients use reasonable security practices when transmitting documents to the Firm and notify us of any potential data breaches.</p>

                    <h2 className="text-2xl font-bold text-text-main-light dark:text-text-main-dark mt-8 mb-4">VII. LIMITATION OF LIABILITY</h2>
                    <p>To the fullest extent permitted by law, the Firm's liability is limited to the total fees paid under the SOE associated with the claim, except in cases of gross negligence or intentional misconduct.</p>

                    <h2 className="text-2xl font-bold text-text-main-light dark:text-text-main-dark mt-8 mb-4">VIII. TERMINATION OF REPRESENTATION</h2>
                    <p>You may terminate representation at any time. The Firm may withdraw if continuing representation violates ethics rules, obligations remain unmet, fees are unpaid, or a conflict arises. Upon termination, work performed will be invoiced and unearned retainers refunded where applicable.</p>
                </div>
            </motion.div>
        </div>
    );
};

export default TermsOfService;
