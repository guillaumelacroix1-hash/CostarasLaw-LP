import React, { useEffect } from 'react';

const BookingSection = () => {
    useEffect(() => {
        // HighLevel/msgsndr dynamically resizes and handles logic if we include the script
        const script = document.createElement('script');
        script.src = "https://link.marketingfirepower.app/js/form_embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section id="booking" className="py-24 bg-surface-light dark:bg-surface-dark transition-colors duration-300">
            <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="font-display text-4xl lg:text-5xl font-medium text-primary dark:text-white mb-6">
                        Secure Your Investments <span className="text-secondary">Today</span>
                    </h2>
                    <p className="text-lg text-text-main-light dark:text-text-main-dark max-w-2xl mx-auto">
                        Select a time for a 20-minute Business Intro Call to discuss your portfolio structure with our legal team.
                    </p>
                </div>

                <div className="w-full min-h-[700px]">
                    <iframe
                        src="https://link.marketingfirepower.app/widget/booking/UQ1Y94OgOCHZZIbw4XCO"
                        style={{ width: '100%', border: 'none', overflow: 'hidden' }}
                        scrolling="no"
                        id="msgsndr-calendar"
                        className="w-full h-[700px]"
                        title="Booking Calendar"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default BookingSection;
