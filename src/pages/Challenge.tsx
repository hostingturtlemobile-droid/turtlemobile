import React from 'react';

const Challenge: React.FC = () => {
  return (
    <>
      {/* Hero Section: Cinematic Background */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img 
            alt="Congested city traffic at dusk" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida/ADBb0uhb56Cck_0S05LCvjn0oI3PiSgxFq3ViHFSAHaEbdOzs61Z3y7N40xomWNamJ1UGxo4NzD_0CvEL-WicOhP6Q0Kftu1zMZZf-ONuzXUuS9GGroFIXtw5FzWkhhfwDcwqrTO67RgqkUL96bagJMdCUIAqvXmq6ervK4F_Xpglhzavowlb1_DxhcqEchv6yUeWr6T4qrDsD7fAH1bBn-dY2hZP41QoPap6JZV90Hj8ZTV3wYaoYup01hDkWWCZGkJv9alWa6v2_rQEfo" 
          />
        </div>
        <div className="relative z-20 text-center max-w-4xl px-6">
          <h1 className="font-headline text-5xl md:text-9xl text-white font-extrabold tracking-[-0.02em] mb-6 leading-[1.1]">
            Motion, <br/>
            <span className="italic text-turtle-lime">Stalled.</span>
          </h1>
          <div className="w-24 h-1 bg-turtle-lime mx-auto mb-10"></div>
          <p className="font-body font-semibold text-white/75 uppercase tracking-[0.12em] text-xs">A Scholarly Review of the Urban Crisis</p>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 text-white/60">
          <span className="font-label text-xs uppercase tracking-widest">Discover The Cost</span>
          <span className="material-symbols-outlined animate-bounce">expand_more</span>
        </div>
      </section>

      {/* Editorial Content: High Impact Whitespace */}
      <section className="py-32 px-12 bg-surface">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Editorial Column */}
            <div className="lg:col-span-5">
              <span className="font-label text-tertiary text-sm font-semibold tracking-widest uppercase mb-6 block">The Baseline</span>
              <h2 className="font-display text-5xl text-on-surface leading-tight mb-10">
                Our cities were built for movement, yet they have become the world’s largest <span className="italic text-primary">waiting rooms.</span>
              </h2>
              <div className="space-y-8 text-on-surface-variant leading-relaxed font-body text-lg">
                <p>
                  The average urban commuter now spends over 150 hours per year stationary in traffic. What was once the pinnacle of freedom - the private automobile - has evolved into a localized constraint, suffocating the very arteries of commerce and connection it was intended to serve.
                </p>
                <p>
                  At Turtle Mobility, we analyze the architectural failure of traditional transit through a lens of archival precision and modern telemetry.
                </p>
              </div>
            </div>
            {/* Right Stats Column (Bento-lite) */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-surface-container-low p-10 rounded-xl flex flex-col justify-between aspect-square">
                <span className="material-symbols-outlined text-4xl text-primary">cloud_off</span>
                <div>
                  <h3 className="text-6xl font-display font-bold text-on-surface mb-2">28%</h3>
                  <p className="font-label uppercase tracking-wider text-xs text-secondary">Global carbon emissions derived from urban transport.</p>
                </div>
              </div>
              <div className="bg-surface-container-highest p-10 rounded-xl flex flex-col justify-between aspect-square">
                <span className="material-symbols-outlined text-4xl text-tertiary">timer</span>
                <div>
                  <h3 className="text-6xl font-display font-bold text-on-surface mb-2">156h</h3>
                  <p className="font-label uppercase tracking-wider text-xs text-secondary">Average time lost per driver in major metropolitan hubs annually.</p>
                </div>
              </div>
              <div className="md:col-span-2 relative h-[400px] rounded-xl overflow-hidden group">
                <img 
                  alt="Abstract architectural view of city lights" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida/ADBb0uiK4FdqZqvBrlFjsMhEHj5zDxwz6BNE3eF_piNG4m-watgh9F8oR2V_lh1GBKxzGpqIF7-cWFxcyAI7zfc3YuoE0b_QZfxRhcI0jNll9Jq61lHGdBimTVWebB4thgD4r6_FHdI1KXcefmCY65MpoxXbTdaEOTWUHaoAsXxeAp9vJspPC7WqP-4OweEF42lTBplj2d3VCaLYHG30NRhff46FHbqzY_8WA3MDvS6z2KckM26pworvOXmR9gI4StOKMWPSE84tXbgMBg" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-10">
                  <p className="text-white font-serif italic text-2xl max-w-md">"Efficiency is not just speed; it is the curation of time."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Archive Section (Asymmetric Layout) */}
      <section className="bg-surface-container-lowest py-32 border-t border-outline-variant/15">
        <div className="max-w-screen-2xl mx-auto px-12">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="w-full lg:w-1/3 order-2 lg:order-1">
              <div className="sticky top-32 space-y-12">
                <div>
                  <h4 className="font-label text-primary font-bold uppercase tracking-widest text-xs mb-4">Infrastructure Legacy</h4>
                  <p className="font-body text-on-surface-variant">We study the historical provenance of urban design to predict the mobility patterns of the next century. Our fleet serves as a dynamic map of these shifting realities.</p>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'ARCHIVE NO.', value: '882-TM-X' },
                    { label: 'LOCALITY', value: 'Global Metropolis' },
                    { label: 'STATUS', value: 'In Crisis', color: 'text-tertiary' },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between border-b border-outline-variant/30 pb-4">
                      <span className="font-label text-secondary text-sm">{item.label}</span>
                      <span className={`font-label font-semibold text-sm ${item.color || 'text-on-surface'}`}>{item.value}</span>
                    </div>
                  ))}
                </div>
                <button className="flex items-center gap-4 text-primary font-label font-bold uppercase tracking-widest text-xs group">
                  View Full Archive
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-2/3 order-1 lg:order-2">
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-12 md:col-span-7">
                  <img 
                    alt="Urban structural detail" 
                    className="w-full aspect-[4/5] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-1000" 
                    src="https://lh3.googleusercontent.com/aida/ADBb0uiJ9zUzvb-wmGF6eAfYs7fVtArJI5rH78NZVN6rm8dETvh4miCjpG4YyPNOWCwDIn7dcMB-FVbBhXRmFAuxn8HQJN4WUJpj8chkz6GL6JB7mtDIGH7y0OcDsfC2YlTbuHxOU9iucK2qTPtiZjLnetfxMzKyL4U_DG2-D5FTlbceDIeRTZkBQPyHzA5QMgE5knL4-wg7bUd0x7dF920f78pP7IYorC-qev1wqJxasE2zSO5CgRFT7MyVL2aB" 
                  />
                </div>
                <div className="col-span-12 md:col-span-5 mt-12 md:mt-24">
                  <img 
                    alt="Close up of mobility telemetry data visualization" 
                    className="w-full aspect-square object-cover rounded-sm" 
                    src="https://lh3.googleusercontent.com/aida/ADBb0uhSlVa1aYImo3TvhhJ-wSm3f47JxkZlUw-8y07O1drIZ2_2EkYj2SJMTwhMT_2WX56Pt4SIF_AQHWQnzUZebHtUUjyTRUwitPXXgD6bx1wUqVk4aSc9EwJlHD8wzMugJr5HZ7PtGpA2iE7q7rBLOgIkQu_tRkUjnFcX1sE5H2b7qw8m-Z-DgYuVSZ1yJrpecik_GMgu4kTYdRyhD7_7LvNKqNq6aOIkO6Ye7ECOCQqL10KicC8QB0KZkfA" 
                  />
                  <div className="mt-8">
                    <p className="font-serif italic text-xl text-on-surface">The digital shadow of physical movement reveals the inefficiency of static systems.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Callout */}
      <section className="py-40 bg-primary-container text-on-primary-container text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-6xl mb-12">Transcend the Stagnation.</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a className="w-full md:w-auto bg-surface text-primary px-12 py-5 font-label font-bold uppercase tracking-widest text-sm hover:bg-surface-bright hover:-translate-y-1 transition-all rounded-lg shadow-sm hover:shadow-md" href="#">
              Explore the Fleet
            </a>
            <a className="w-full md:w-auto border border-on-primary-container/30 px-12 py-5 font-label font-bold uppercase tracking-widest text-sm hover:bg-on-primary-container/10 hover:-translate-y-1 transition-all rounded-lg" href="#">
              Contact Concierge
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Challenge;
