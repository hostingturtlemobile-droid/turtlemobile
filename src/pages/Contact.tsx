import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    // Web3Forms Access Key
    formData.append("access_key", "0702e477-3bf6-4391-808b-c8555ed4b201");
    formData.append("subject", "New Contact Form Submission");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSubmitSuccess(true);
        setTimeout(() => {
          setSubmitSuccess(false);
          (e.target as HTMLFormElement).reset();
        }, 5000);
      } else {
        alert("Submission failed: " + data.message);
      }
    } catch (error) {
      alert("Something went wrong. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-turtle-light min-h-screen pt-32 pb-20 md:pb-32 px-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Column: Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-8xl font-headline font-extrabold text-turtle-dark leading-[1.1] mb-8">
              Let's <br /> <span className="text-turtle-teal">Connect.</span>
            </h1>
            <p className="text-xl font-body text-turtle-dark/70 max-w-md leading-relaxed mb-12">
              Have questions about our technology or want to schedule a trial? Our team is here to assist you.
            </p>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-turtle-teal mb-2">Email Us</h4>
                <p className="text-2xl font-display font-medium">hello@turtlemobility.com</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-turtle-teal mb-2">Visit Us</h4>
                <p className="text-2xl font-display font-medium">Gothenburg, Sweden</p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white/40 backdrop-blur-md p-10 md:p-16 rounded-3xl border border-turtle-teal/10 shadow-xl">
            {submitSuccess ? (
              <div className="py-12 text-center h-full flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-turtle-teal/10 text-turtle-teal rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-turtle-dark/60">Thank you for reaching out. We will get back to you shortly.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">First Name</label>
                    <input required name="First Name" className="w-full bg-transparent border-b border-turtle-dark/20 py-3 focus:border-turtle-teal outline-none transition-all" type="text" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">Last Name</label>
                    <input required name="Last Name" className="w-full bg-transparent border-b border-turtle-dark/20 py-3 focus:border-turtle-teal outline-none transition-all" type="text" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">Email Address</label>
                  <input required name="email" className="w-full bg-transparent border-b border-turtle-dark/20 py-3 focus:border-turtle-teal outline-none transition-all" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">Message</label>
                  <textarea required name="message" className="w-full bg-transparent border-b border-turtle-dark/20 py-3 focus:border-turtle-teal outline-none transition-all h-32 resize-none" placeholder="Tell us more..."></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-turtle-dark text-turtle-light py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-turtle-teal hover:-translate-y-1 transition-all shadow-md mt-6 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? 'Sending...' : 'Send Transmission'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
