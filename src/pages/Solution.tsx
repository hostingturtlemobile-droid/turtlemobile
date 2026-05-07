import React from 'react';

const Solution: React.FC = () => {
  return (
    <>
      <main className="max-w-screen-2xl mx-auto px-6 md:px-12 py-12 lg:py-24">
        {/* Hero Section: The Remote Synthesis */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="font-label text-tertiary font-semibold tracking-widest uppercase text-xs mb-6">Archive Vol. 04 — Modern Solutions</div>
            <h1 className="text-5xl md:text-7xl leading-tight mb-8 font-headline">The Remote <br/><span className="italic font-normal">Synthesis.</span></h1>
            <p className="font-body text-xl text-on-surface-variant leading-relaxed mb-12 max-w-xl">
              Bridging the physical gap through digital fidelity. Turtle Mobility introduces a refined paradigm where human intuition meets high-bandwidth tele-operation, solving the urban logjam through sophisticated remote oversight.
            </p>
            <div className="space-y-8">
              {[
                { icon: 'verified_user', title: 'Human Oversight', desc: 'Professional pilots maintain continuous situational awareness through low-latency neural links.' },
                { icon: 'bolt', title: 'Unmatched Efficiency', desc: 'Optimized routing protocols reduce urban transit times by up to 42% via real-time swarm intelligence.' },
                { icon: 'security', title: 'Redundant Safety', desc: 'Triple-redundant communication arrays ensure fail-safe operation in the densest metropolitan cores.' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-5">
                  <div className="mt-1 bg-surface-container-high p-3 rounded-xl text-primary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-headline text-xl mb-1">{item.title}</h3>
                    <p className="font-body text-on-secondary-container">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-xl shadow-2xl">
              <img 
                alt="Sophisticated vehicle interior featuring remote piloting interfaces" 
                className="absolute inset-0 w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida/ADBb0uiK4FdqZqvBrlFjsMhEHj5zDxwz6BNE3eF_piNG4m-watgh9F8oR2V_lh1GBKxzGpqIF7-cWFxcyAI7zfc3YuoE0b_QZfxRhcI0jNll9Jq61lHGdBimTVWebB4thgD4r6_FHdI1KXcefmCY65MpoxXbTdaEOTWUHaoAsXxeAp9vJspPC7WqP-4OweEF42lTBplj2d3VCaLYHG30NRhff46FHbqzY_8WA3MDvS6z2KckM26pworvOXmR9gI4StOKMWPSE84tXbgMBg" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <div className="font-label text-[10px] uppercase tracking-[0.3em] opacity-80 mb-2">Internal Telemetry Feed</div>
                <div className="font-headline text-2xl italic">Vehicle 09-Alpha Connection Active</div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Bento Grid */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Large Feature Card */}
            <div className="md:col-span-2 bg-surface-container-low rounded-xl p-12 relative overflow-hidden group">
              <div className="relative z-10">
                <span className="font-label text-primary text-xs font-bold tracking-widest uppercase">The Pilot Interface</span>
                <h2 className="text-4xl font-headline mt-4 mb-6 max-w-md">Precision Control from the Command Horizon.</h2>
                <p className="font-body text-on-surface-variant max-w-sm mb-10">Our remote operators undergo rigorous certification to manage fleet dynamics with a level of attention unavailable to local drivers.</p>
                <button className="bg-surface-container-highest text-primary font-label text-xs font-bold py-3 px-6 rounded-lg uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-colors">
                  Explore Technicals
                </button>
              </div>
              <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10 group-hover:opacity-20 transition-opacity">
                <img 
                  alt="Close up of high-tech control interface with glowing blue light" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida/ADBb0uiJ9zUzvb-wmGF6eAfYs7fVtArJI5rH78NZVN6rm8dETvh4miCjpG4YyPNOWCwDIn7dcMB-FVbBhXRmFAuxn8HQJN4WUJpj8chkz6GL6JB7mtDIGH7y0OcDsfC2YlTbuHxOU9iucK2qTPtiZjLnetfxMzKyL4U_DG2-D5FTlbceDIeRTZkBQPyHzA5QMgE5knL4-wg7bUd0x7dF920f78pP7IYorC-qev1wqJxasE2zSO5CgRFT7MyVL2aB" 
                />
              </div>
            </div>
            {/* Vertical Card */}
            <div className="bg-surface-dim rounded-xl p-8 flex flex-col justify-between">
              <div>
                <div className="font-label text-tertiary-container text-xs font-bold tracking-widest uppercase mb-4">Metric Analysis</div>
                <div className="text-6xl font-headline text-primary">99.9%</div>
                <div className="font-headline text-xl mt-2 mb-6">Uptime Reliability</div>
              </div>
              <div className="p-6 bg-surface-container-lowest rounded-lg">
                <p className="font-body text-sm text-on-surface-variant italic">"The architecture of our network allows for instantaneous handover, ensuring zero interruption in fleet fluidity."</p>
              </div>
            </div>
            {/* Image Focused Card */}
            <div className="relative rounded-xl overflow-hidden aspect-video md:aspect-auto">
              <img 
                alt="Remote operations center with multiple screens and soft lighting" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida/ADBb0uhSlVa1aYImo3TvhhJ-wSm3f47JxkZlUw-8y07O1drIZ2_2EkYj2SJMTwhMT_2WX56Pt4SIF_AQHWQnzUZebHtUUjyTRUwitPXXgD6bx1wUqVk4aSc9EwJlHD8wzMugJr5HZ7PtGpA2iE7q7rBLOgIkQu_tRkUjnFcX1sE5H2b7qw8m-Z-DgYuVSZ1yJrpecik_GMgu4kTYdRyhD7_7LvNKqNq6aOIkO6Ye7ECOCQqL10KicC8QB0KZkfA" 
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h4 className="font-headline text-2xl text-white">Global Command</h4>
                <p className="font-label text-white/80 text-xs tracking-widest uppercase">Node: Zurich Hub</p>
              </div>
            </div>
            {/* Wide Statement Card */}
            <div className="md:col-span-2 bg-white rounded-xl p-12 shadow-sm border border-outline-variant/15 flex items-center gap-12">
              <div className="hidden lg:block w-32 h-32 shrink-0 bg-surface-container-high rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
              </div>
              <div>
                <h2 className="text-3xl font-headline mb-4 italic">Augmented Intelligence</h2>
                <p className="font-body text-on-surface-variant text-lg">We don't replace the human; we elevate them. Remote piloting synthesizes machine precision with the ethical nuance only a curator can provide.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-surface-container-high rounded-3xl p-12 md:p-24 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="font-label text-tertiary text-sm font-bold tracking-[0.4em] uppercase mb-8 block">The Future is Supervised</span>
            <h2 className="text-5xl md:text-6xl font-headline mb-10 leading-tight">Begin Your Curated <br/>Journey Today.</h2>
            <div className="flex flex-col sm:sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-5 rounded-xl font-label text-sm font-bold tracking-widest uppercase shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                Reserve Membership
              </button>
              <button className="bg-white text-on-surface border border-outline-variant/30 px-10 py-5 rounded-xl font-label text-sm font-bold tracking-widest uppercase hover:bg-surface-container-low transition-colors">
                View Fleet Archive
              </button>
            </div>
          </div>
          {/* Abstract design elements */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-tertiary/5 rounded-full blur-3xl"></div>
        </section>
      </main>
    </>
  );
};

export default Solution;
