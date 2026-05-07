import React from 'react';

const Contact: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-12 max-w-screen-2xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
          <div className="lg:col-span-7">
            <span className="font-label text-tertiary text-xs uppercase tracking-[0.3em] mb-6 block">Contact & Headquarters</span>
            <h1 className="font-display text-6xl md:text-8xl leading-[1.1] mb-8 text-on-surface">
              The Art of <br/><span className="italic text-primary font-light">Connection</span>.
            </h1>
            <p className="font-body text-xl text-on-surface-variant max-w-xl leading-relaxed">
              Inquiry is the beginning of bespoke design. Reach out to our Gothenburg studio for fleet inquiries, technical telemetry support, or lifestyle concierge services.
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[0.69] bg-surface-container overflow-hidden rounded-xl">
              <img 
                className="w-full h-full object-cover grayscale contrast-125 opacity-90 transition-all duration-700 hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida/ADBb0uhb56Cck_0S05LCvjn0oI3PiSgxFq3ViHFSAHaEbdOzs61Z3y7N40xomWNamJ1UGxo4NzD_0CvEL-WicOhP6Q0Kftu1zMZZf-ONuzXUuS9GGroFIXtw5FzWkhhfwDcwqrTO67RgqkUL96bagJMdCUIAqvXmq6ervK4F_Xpglhzavowlb1_DxhcqEchv6yUeWr6T4qrDsD7fAH1bBn-dY2hZP41QoPap6JZV90Hj8ZTV3wYaoYup01hDkWWCZGkJv9alWa6v2_rQEfo" 
                alt="Architecture in Gothenburg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Form Section */}
      <section className="py-24 px-12 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Contact Information Details */}
          <div className="flex flex-col justify-between py-8">
            <div>
              <h2 className="font-display text-4xl mb-12">Direct Reach</h2>
              <div className="space-y-12">
                {[
                  { label: 'Concierge Services', email: 'concierge@turtlemobility.com' },
                  { label: 'Technical Telemetry', email: 'systems@turtlemobility.com' },
                  { label: 'Press & Archive', email: 'press@turtlemobility.com' },
                ].map((item) => (
                  <div key={item.label} className="group">
                    <label className="font-label text-xs uppercase tracking-widest text-tertiary block mb-2">{item.label}</label>
                    <a className="font-display text-2xl text-on-surface hover:text-primary transition-colors border-b border-outline-variant pb-2 block" href={`mailto:${item.email}`}>{item.email}</a>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-20 flex gap-12">
              <div>
                <label className="font-label text-[10px] uppercase tracking-[0.2em] text-outline mb-4 block">Follow Our Journey</label>
                <div className="flex gap-6">
                  {['Instagram', 'LinkedIn', 'Journal'].map((item) => (
                    <a key={item} className="text-on-surface-variant hover:text-primary transition-colors font-label text-sm" href="#">{item}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Minimalist Contact Form */}
          <div className="bg-surface-container-lowest p-12 md:p-16 rounded-xl shadow-sm">
            <form action="#" className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Full Name</label>
                  <input className="w-full bg-surface-container-low border-0 border-b border-outline-variant focus:border-primary focus:ring-0 transition-all font-body text-sm py-4" placeholder="Elias Lindholm" type="text"/>
                </div>
                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Email Address</label>
                  <input className="w-full bg-surface-container-low border-0 border-b border-outline-variant focus:border-primary focus:ring-0 transition-all font-body text-sm py-4" placeholder="elias@example.com" type="email"/>
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Inquiry Type</label>
                <select className="w-full bg-surface-container-low border-0 border-b border-outline-variant focus:border-primary focus:ring-0 transition-all font-body text-sm py-4 appearance-none">
                  <option>Fleet Acquisition</option>
                  <option>Telemetry Partnership</option>
                  <option>Lifestyle Concierge</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Message</label>
                <textarea className="w-full bg-surface-container-low border-0 border-b border-outline-variant focus:border-primary focus:ring-0 transition-all font-body text-sm py-4 resize-none" placeholder="How may we assist your arrival?" rows={4}></textarea>
              </div>
              <button className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-label text-xs uppercase tracking-[0.2em] py-5 rounded hover:opacity-95 transition-opacity" type="submit">
                Send Transmission
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* HQ & Map Section */}
      <section className="py-32 px-12 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="space-y-12">
              <div className="border-l-2 border-tertiary-container pl-8 py-2">
                <h3 className="font-display text-3xl mb-4 text-on-surface">Gothenburg HQ</h3>
                <address className="not-italic font-body text-on-surface-variant leading-relaxed text-lg">
                  Lindholmspiren 5<br/>
                  417 56 Göteborg<br/>
                  Sweden
                </address>
              </div>
              <div className="pt-8 space-y-4">
                <p className="font-body text-sm text-on-surface-variant italic">
                  "Our studio is situated in the heart of Swedish innovation, overlooking the harbor where legacy meets the future of movement."
                </p>
                <div className="flex items-center gap-4 text-primary font-label text-xs uppercase tracking-widest">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  <a className="hover:underline" href="#">View on Digital Atlas</a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="relative rounded-xl overflow-hidden bg-surface-container h-[500px] flex items-center justify-center">
              <img 
                className="w-full h-full object-cover opacity-80" 
                src="https://lh3.googleusercontent.com/aida/ADBb0uiJ9zUzvb-wmGF6eAfYs7fVtArJI5rH78NZVN6rm8dETvh4miCjpG4YyPNOWCwDIn7dcMB-FVbBhXRmFAuxn8HQJN4WUJpj8chkz6GL6JB7mtDIGH7y0OcDsfC2YlTbuHxOU9iucK2qTPtiZjLnetfxMzKyL4U_DG2-D5FTlbceDIeRTZkBQPyHzA5QMgE5knL4-wg7bUd0x7dF920f78pP7IYorC-qev1wqJxasE2zSO5CgRFT7MyVL2aB" 
                alt="Map of Gothenburg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 bg-primary rounded-full animate-pulse flex items-center justify-center">
                  <div className="w-12 h-12 border border-primary/30 rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Anchor Section */}
      <section className="px-12 pb-32">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="aspect-square rounded-xl overflow-hidden group">
              <img 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida/ADBb0uiK4FdqZqvBrlFjsMhEHj5zDxwz6BNE3eF_piNG4m-watgh9F8oR2V_lh1GBKxzGpqIF7-cWFxcyAI7zfc3YuoE0b_QZfxRhcI0jNll9Jq61lHGdBimTVWebB4thgD4r6_FHdI1KXcefmCY65MpoxXbTdaEOTWUHaoAsXxeAp9vJspPC7WqP-4OweEF42lTBplj2d3VCaLYHG30NRhff46FHbqzY_8WA3MDvS6z2KckM26pworvOXmR9gI4StOKMWPSE84tXbgMBg" 
                alt="Interior materials"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden group flex items-center justify-center bg-surface-dim">
              <div className="p-12 text-center">
                <span className="material-symbols-outlined text-tertiary text-4xl mb-6">workspace_premium</span>
                <h4 className="font-display text-xl mb-4">Provenance Verified</h4>
                <p className="font-body text-xs text-on-surface-variant leading-relaxed tracking-wide">Every interaction is logged within our secure telemetry archive, ensuring a seamless continuity of service for our patrons.</p>
              </div>
            </div>
            <div className="aspect-square rounded-xl overflow-hidden group">
              <img 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida/ADBb0uhSlVa1aYImo3TvhhJ-wSm3f47JxkZlUw-8y07O1drIZ2_2EkYj2SJMTwhMT_2WX56Pt4SIF_AQHWQnzUZebHtUUjyTRUwitPXXgD6bx1wUqVk4aSc9EwJlHD8wzMugJr5HZ7PtGpA2iE7q7rBLOgIkQu_tRkUjnFcX1sE5H2b7qw8m-Z-DgYuVSZ1yJrpecik_GMgu4kTYdRyhD7_7LvNKqNq6aOIkO6Ye7ECOCQqL10KicC8QB0KZkfA" 
                alt="HQ Entrance"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
