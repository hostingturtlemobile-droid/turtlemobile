import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/heroturtlemobile.png';
import passengerStats from '../assets/passenger-statistics.png';
import cloudTM from '../assets/cloudTM.png';
import parkingImg from '../assets/graphics/parking.png';
import kidsImg from '../assets/graphics/kids.png';
import elderlyImg from '../assets/graphics/elderly.png';
import airportImg from '../assets/graphics/airport.png';
import wheelchairAccessible from '../assets/wheelchair-accessible.png';
import kissFeaturesBg from '../assets/kiss_features_bg.png';

const Home: React.FC = () => {


  return (
    <div className="bg-turtle-light min-h-screen font-body text-turtle-dark overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen px-6 flex flex-col justify-between pt-32 pb-16 max-w-screen-xl mx-auto">
        {/* Top Header Text */}
        <div className="text-center z-10 flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-headline font-extrabold leading-[1.1] tracking-[-0.03em] max-w-[1000px] animate-fade-in-up delay-200 bg-clip-text text-transparent bg-gradient-to-b from-turtle-dark to-turtle-teal/80">
            World’s first <br /> one-hand-drive <br /> micro car!
          </h1>
        </div>

        <div className="relative flex-grow flex flex-col items-center justify-center w-full gap-2 md:gap-4 py-4">
          <p className="text-2xl md:text-4xl font-display font-medium italic text-turtle-teal animate-slide-in-right delay-1000 text-center">
            Zip through the traffic like never before!
          </p>
          
          <div className="relative flex items-center justify-center w-full overflow-hidden rounded-[2rem]">
            <img 
              src={heroImage} 
              alt="Turtle Mobility Car" 
              className="w-full max-w-4xl h-auto max-h-[48vh] object-contain animate-slide-in delay-600 z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-700 animate-ken-burns" 
            />
          </div>

          <p className="text-xl md:text-3xl font-display font-black text-turtle-dark uppercase tracking-[0.1em] animate-fade-in-up delay-1400 text-center max-w-4xl">
            2 seater remotely driven autonomous micro car
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-turtle-dark">
              Why go for a <span className="normal-case">KiSS</span>?
            </h2>
            <p className="text-xl md:text-2xl font-body text-turtle-dark/80 max-w-2xl mx-auto leading-relaxed">
              Over 85% of the cars in the cities travel with 2 or less passengers.
            </p>
          </div>

          <div className="w-full max-w-3xl py-2">
            <img 
              src={passengerStats} 
              alt="Passenger Occupancy Statistics" 
              className="w-full h-auto max-h-[40vh] object-contain drop-shadow-xl rounded-2xl mx-auto"
            />
          </div>

          <div className="space-y-8">
            <p className="text-xl md:text-2xl font-body font-semibold text-turtle-dark/90 leading-relaxed max-w-3xl">
              Still go for a century old outdated 5-seater car which suits less than 15% of the total commuting?
            </p>
            
            <div className="h-px w-24 bg-turtle-teal mx-auto opacity-30" />
            
            <p className="text-2xl md:text-3xl font-display font-bold text-turtle-teal leading-tight max-w-2xl">
              It's time to switch to cool micro cars – the true practical solution for the new gen urban mobility!
            </p>
          </div>
        </div>
      </section>

      {/* ClouDrive Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 md:py-16 bg-turtle-light">
        <div className="max-w-6xl mx-auto text-center flex flex-col items-center gap-6 md:gap-8">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-turtle-dark italic">
              ClouDrive <span className="text-2xl align-top">™</span> - Autonomy with Human Intelligence!
            </h2>
            <p className="text-2xl md:text-3xl font-display font-bold text-turtle-teal leading-tight italic">
              Switch to Autonomous mode with our remote drivers.
            </p>
          </div>

          <div className="w-full relative group max-w-5xl mx-auto overflow-hidden rounded-3xl">
            <img 
              src={cloudTM} 
              alt="ClouDrive Remote Driver Rig" 
              className="w-full h-auto max-h-[45vh] object-cover drop-shadow-2xl rounded-3xl mx-auto animate-ken-burns"
            />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/5 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Bento Grid Features Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-12 md:py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 mb-12 md:mb-16">
            {/* Parking - Big Card */}
            <div className="md:col-span-4 relative group rounded-[2rem] md:rounded-[2.5rem] overflow-hidden min-h-[300px] md:h-[35vh] shadow-2xl flex flex-col justify-end">
              <img src={parkingImg} alt="Remote Parking" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-turtle-dark/90 via-turtle-dark/20 to-transparent" />
              <div className="relative p-6 md:p-12 w-full">
                <div className="backdrop-blur-md bg-white/10 p-5 md:p-8 rounded-2xl md:rounded-3xl border border-white/20">
                  <p className="text-base md:text-xl font-body text-white leading-relaxed">
                    Not finding a parking spot in the middle of the city? Leave the car in the middle of the street. Our remote drivers would park safely for you and get you car back to your footstep on demand!
                  </p>
                </div>
              </div>
            </div>

            {/* Kids - Side Card */}
            <div className="md:col-span-2 relative group rounded-[2rem] md:rounded-[2.5rem] overflow-hidden min-h-[300px] md:h-[35vh] shadow-2xl flex flex-col justify-end">
              <img src={kidsImg} alt="Remote Kids Pickup" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-turtle-dark/90 via-turtle-dark/20 to-transparent" />
              <div className="relative p-6 w-full">
                <div className="backdrop-blur-md bg-white/10 p-5 rounded-2xl md:rounded-3xl border border-white/20">
                  <p className="text-sm md:text-lg font-body text-white leading-relaxed">
                    Worried about picking up your kids when you are out of town? Our remote drivers will pick them up and drop them safely!
                  </p>
                </div>
              </div>
            </div>

            {/* Aging Parents - Bottom Half */}
            <div className="md:col-span-3 relative group rounded-[2rem] md:rounded-[2.5rem] overflow-hidden min-h-[300px] md:h-[35vh] shadow-2xl flex flex-col justify-end">
              <img src={elderlyImg} alt="Remote Elderly Ferry" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-turtle-dark/90 via-turtle-dark/20 to-transparent" />
              <div className="relative p-6 md:p-8 w-full">
                <div className="backdrop-blur-md bg-white/10 p-5 rounded-2xl md:rounded-3xl border border-white/20">
                  <p className="text-sm md:text-lg font-body text-white leading-relaxed">
                    Worried about your ageing parents driving the car? Our remote drivers would ferry them or you ferry them with our remote driving setup!
                  </p>
                </div>
              </div>
            </div>

            {/* Airport - Bottom Half */}
            <div className="md:col-span-3 relative group rounded-[2rem] md:rounded-[2.5rem] overflow-hidden min-h-[300px] md:h-[35vh] shadow-2xl flex flex-col justify-end">
              <img src={airportImg} alt="Remote Airport Trip" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-turtle-dark/90 via-turtle-dark/20 to-transparent" />
              <div className="relative p-6 md:p-8 w-full">
                <div className="backdrop-blur-md bg-white/10 p-5 rounded-2xl md:rounded-3xl border border-white/20">
                  <p className="text-sm md:text-lg font-body text-white leading-relaxed">
                    Not finding a cab? Take your car to the airport. Our remote drivers drive your car safely home and park it for you!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Heading */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-headline font-black text-turtle-dark uppercase tracking-tight italic leading-tight">
              CLOUDRIVE ™ - YOUR PERSONAL <br /> REMOTE DRIVER ON YOUR WISH 24/7
            </h2>
            <div className="flex flex-col items-center gap-4">
              <p className="text-3xl md:text-5xl font-display font-extrabold text-turtle-teal italic">
                You live while we drive!
              </p>
              <div className="h-1.5 w-48 bg-turtle-teal rounded-full opacity-30 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 md:py-16 bg-turtle-light">
        <div className="max-w-6xl mx-auto text-center flex flex-col items-center gap-6 md:gap-8">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-6xl font-headline font-extrabold text-turtle-teal tracking-tight">
              Designed for all!
            </h2>
            <h3 className="text-xl md:text-3xl font-headline font-semibold text-turtle-dark/90 leading-relaxed max-w-4xl">
              Wheelchair friendly ergonomic egress ingress sliding ramp.
            </h3>
          </div>

          <div className="w-full relative group">
            <img 
              src={wheelchairAccessible} 
              alt="Wheelchair Accessible Features" 
              className="w-full h-auto max-h-[45vh] drop-shadow-2xl rounded-[2.5rem] object-cover mx-auto"
            />
          </div>

          <div className="space-y-2">
            <p className="text-3xl md:text-5xl font-display font-black text-turtle-teal uppercase tracking-tighter italic">
              Together, we are
            </p>
            <p className="text-4xl md:text-6xl font-display font-black text-turtle-teal uppercase tracking-tighter italic">
              free!
            </p>
          </div>
        </div>
      </section>

      {/* KiSS Features Section */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 py-32 text-turtle-light overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img src={kissFeaturesBg} alt="Turtle Mobility KiSS urban environment" className="w-full h-full object-cover object-center animate-ken-burns" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full h-full flex flex-col justify-between py-12 px-4 md:px-8">
          {/* Top Heading */}
          <div className="w-full text-center mb-24 md:mb-32">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-medium leading-tight max-w-4xl mx-auto text-white drop-shadow-xl">
              Convenience of an Autonomous car at the expense of conventional scooter!
            </h2>
          </div>

          {/* Bottom Area: Stats (Left) and Desc (Right) */}
          <div className="w-full flex flex-col md:flex-row justify-between items-end gap-12 mt-auto">
            {/* Stats vertically stacked on left side */}
            <div className="flex flex-col space-y-8 text-left border-l-2 border-white/30 pl-6 shrink-0">
              <div className="space-y-1">
                <p className="text-4xl md:text-5xl font-headline font-bold text-white drop-shadow-md">60 km/h</p>
                <p className="text-sm md:text-base font-body text-white/90 drop-shadow-md uppercase tracking-wider">Top Speed</p>
              </div>
              <div className="space-y-1">
                <p className="text-4xl md:text-5xl font-headline font-bold text-white drop-shadow-md">140 km</p>
                <p className="text-sm md:text-base font-body text-white/90 drop-shadow-md uppercase tracking-wider">WLTP Range</p>
              </div>
              <div className="space-y-1">
                <p className="text-4xl md:text-5xl font-headline font-bold text-white drop-shadow-md">30 km</p>
                <p className="text-sm md:text-base font-body text-white/90 drop-shadow-md uppercase tracking-wider">Charge in 10 min*</p>
              </div>
            </div>

            {/* Description aligned to bottom right */}
            <div className="max-w-lg md:text-right">
              <p className="text-lg md:text-xl font-display font-medium text-white drop-shadow-lg leading-relaxed">
                <span className="font-bold">KiSS</span> is a joystick-based control, electric, 2 seater microcar designed for modern urban mobility. It prioritizes simplicity, sustainability, and security with real human control.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Final Contact/Get in Touch Section */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-32 bg-white">
        <div className="max-w-4xl mx-auto w-full text-left space-y-12">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-turtle-dark/40 tracking-widest uppercase">
            GET IN TOUCH
          </h2>
          
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-3xl md:text-5xl font-display font-medium text-turtle-dark">
                Interested in a cooperation?
              </p>
              <p className="text-3xl md:text-5xl font-display font-medium text-turtle-dark">
                Contact TurtleMobility
              </p>
            </div>
            
            <Link 
              to="/investor" 
              className="inline-flex items-center gap-2 text-3xl md:text-5xl font-display font-bold text-turtle-teal hover:translate-x-2 transition-transform duration-300 border-b-4 border-turtle-teal/20 hover:border-turtle-teal pb-2"
            >
              Inquire Now <span className="text-4xl md:text-6xl">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
