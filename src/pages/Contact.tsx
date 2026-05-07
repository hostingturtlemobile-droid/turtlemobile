import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-turtle-light min-h-screen pt-32 px-6">
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
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">First Name</label>
                  <input className="w-full bg-transparent border-b border-turtle-dark/20 py-3 focus:border-turtle-teal outline-none transition-all" type="text" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">Last Name</label>
                  <input className="w-full bg-transparent border-b border-turtle-dark/20 py-3 focus:border-turtle-teal outline-none transition-all" type="text" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">Email Address</label>
                <input className="w-full bg-transparent border-b border-turtle-dark/20 py-3 focus:border-turtle-teal outline-none transition-all" type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">Message</label>
                <textarea className="w-full bg-transparent border-b border-turtle-dark/20 py-3 focus:border-turtle-teal outline-none transition-all h-32 resize-none" placeholder="Tell us more..."></textarea>
              </div>
              <button className="w-full bg-turtle-dark text-turtle-light py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-turtle-teal hover:-translate-y-1 transition-all shadow-md mt-6">
                Send Transmission
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
