import React, { useEffect } from 'react';

const Privacy: React.FC = () => {
  useEffect(() => {
    document.title = "Privacy Policy - Turtle Mobility";
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-screen-xl mx-auto min-h-[70vh]">
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-12 text-turtle-dark">Privacy Policy</h1>
      <div className="font-body text-lg text-turtle-dark/80 space-y-8 max-w-4xl">
        <p className="opacity-70 text-base">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section>
          <h2 className="text-2xl font-bold text-turtle-dark mb-4">1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you create or modify your account, request services, contact customer support, or otherwise communicate with us. This information may include: name, email, phone number, postal address, profile picture, payment method, financial and credit card information, and other information you choose to provide.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-turtle-dark mb-4">2. Use of Information</h2>
          <p>We may use the information we collect about you to provide, maintain, and improve our services, including, for example, to facilitate payments, send receipts, provide products and services you request (and send related information), develop new features, provide customer support to Users, develop safety features, authenticate users, and send product updates and administrative messages.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-turtle-dark mb-4">3. Sharing of Information</h2>
          <p>We may share the information we collect about you as described in this Statement or as described at the time of collection or sharing, including as follows: With our affiliates and subsidiaries; With vendors, consultants, marketing partners, and other service providers who need access to such information to carry out work on our behalf.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-turtle-dark mb-4">4. Data Security</h2>
          <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-turtle-dark mb-4">5. Contact Us</h2>
          <p>If you have any questions about this Privacy Statement, please contact us at privacy@turtlemobility.com.</p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
