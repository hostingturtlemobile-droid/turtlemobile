import React, { useEffect } from 'react';

const Terms: React.FC = () => {
  useEffect(() => {
    document.title = "Terms of Service - Turtle Mobility";
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-screen-xl mx-auto min-h-[70vh]">
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-12 text-turtle-dark">Terms of Service</h1>
      <div className="font-body text-lg text-turtle-dark/80 space-y-8 max-w-4xl">
        <p className="opacity-70 text-base">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section>
          <h2 className="text-2xl font-bold text-turtle-dark mb-4">1. Acceptance of Terms</h2>
          <p>By accessing and using the services provided by Turtle Mobility, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-turtle-dark mb-4">2. Description of Service</h2>
          <p>Turtle Mobility provides users with access to a rich collection of resources, including various communications tools, forums, shopping services, and personalized content. You understand and agree that the service may include advertisements and that these advertisements are necessary for Turtle Mobility to provide the service.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-turtle-dark mb-4">3. User Conduct</h2>
          <p>You agree to not use the service to: upload, post, email, transmit or otherwise make available any content that is unlawful, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically or otherwise objectionable.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-turtle-dark mb-4">4. Modifications to Service</h2>
          <p>Turtle Mobility reserves the right at any time and from time to time to modify or discontinue, temporarily or permanently, the service (or any part thereof) with or without notice.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-turtle-dark mb-4">5. Governing Law</h2>
          <p>These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
