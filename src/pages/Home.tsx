import React from 'react';
import heroImage from '../assets/heroturtlemobile.png';

const Home: React.FC = () => {
  const [hasScrolled, setHasScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      }
    };
    
    // Auto-reveal after 2 seconds for better mobile UX
    const timer = setTimeout(() => {
      setHasScrolled(true);
    }, 2000);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="bg-turtle-light min-h-screen font-body text-turtle-dark overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] px-6 flex flex-col justify-between pt-32 pb-10 max-w-screen-xl mx-auto">
        {/* Top Header Text */}
        <div className="text-center z-10 flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-headline font-extrabold leading-[1.1] tracking-[-0.02em] max-w-[900px] animate-fade-in-up delay-1000 bg-clip-text text-transparent bg-gradient-to-b from-turtle-dark to-turtle-teal/80">
            World’s first <br /> one-hand-drive car!
          </h1>
          <h2 className="text-sm md:text-base font-body font-semibold text-turtle-dark uppercase tracking-[0.12em] opacity-75 mt-4 animate-fade-in-up delay-[1200ms]">
            NO STEERING WHEEL • NO BRAKE PEDAL • NO ACCELERATOR PEDAL
          </h2>
        </div>

        {/* Hero Image - Centered and Cinematic */}
        <div className="relative flex-grow flex items-center justify-center pb-8">
          <img 
            src={heroImage} 
            alt="Turtle Mobility Car" 
            className="w-auto h-full max-h-[55vh] object-contain animate-slide-in delay-[1400ms] z-10 drop-shadow-sm" 
          />
        </div>

        {/* Bottom Hero Message Blocks - Only revealed after scroll */}
        <div className={`w-full flex flex-col md:flex-row justify-between items-end gap-12 mt-4 transition-all duration-1000 ${
          hasScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-stretch gap-6 max-w-md">
            <div className="w-1.5 bg-turtle-teal rounded-full" />
            <p className="font-display text-2xl leading-tight text-turtle-dark font-bold">
              We are redefining the urban mobility with our remotely driven micro cars!
            </p>
          </div>
          <div className="max-w-md text-right ml-auto">
            <p className="font-body text-lg text-turtle-teal font-semibold leading-relaxed">
              Fully autonomous car with safety of a human driver! You live your life while we drive you!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
