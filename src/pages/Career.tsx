import React, { useState } from 'react';
import jobsData from '../data/jobs.json';

const Career: React.FC = () => {
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);
  const [expandedCultureId, setExpandedCultureId] = useState<string | null>(null);
  const [applyingJobId, setApplyingJobId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const toggleJob = (id: string) => {
    if (expandedJobId === id) {
      setExpandedJobId(null);
    } else {
      setExpandedJobId(id);
    }
  };

  const toggleCulture = (id: string) => {
    if (expandedCultureId === id) {
      setExpandedCultureId(null);
    } else {
      setExpandedCultureId(id);
    }
  };

  const handleApplyClick = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setApplyingJobId(id);
    setSubmitSuccess(false);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    // Web3Forms Access Key
    formData.append("access_key", "0702e477-3bf6-4391-808b-c8555ed4b201");
    
    const job = jobsData.find(j => j.id === applyingJobId);
    if (job) {
      formData.append("subject", `New Application: ${job.role}`);
      formData.append("Job Role", job.role);
      formData.append("Job ID", job.job_id);
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSubmitSuccess(true);
        setTimeout(() => {
          setApplyingJobId(null);
        }, 3000);
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
    <div className="bg-turtle-light min-h-screen pt-32 pb-20 md:pb-32 px-6 md:px-12 relative">
      <div className="max-w-screen-xl mx-auto">
        {/* Career Hero */}
        <div className="mb-24">
          <h1 className="text-4xl md:text-7xl font-headline font-extrabold text-turtle-dark mb-8 leading-tight">
            Build the <br/> Future of <span className="text-turtle-teal">Flow.</span>
          </h1>
          <p className="text-xl md:text-2xl font-body text-turtle-teal max-w-2xl leading-relaxed">
            We're looking for the thinkers, tinkers, and dreamers who refuse to accept the urban status quo.
          </p>
        </div>

        {/* Culture Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 items-center">
          <div className="bg-turtle-dark rounded-3xl min-h-[300px] md:aspect-video flex items-center justify-center p-8 md:p-12 text-turtle-light overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-turtle-teal/20 to-transparent pointer-events-none" />
            <h2 className="text-4xl md:text-6xl font-headline font-black uppercase tracking-tighter opacity-10 leading-none absolute top-6 left-6 md:top-10 md:left-10">CULTURE.</h2>
            <p className="text-xl md:text-2xl font-display font-medium relative z-10 leading-relaxed mt-8 md:mt-0">
              We work in small, highly-autonomous cells. We value speed, radical transparency, and the courage to fail fast.
            </p>
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl font-display font-bold">Why Turtle?</h2>
            <div className="space-y-8">
              {[
                { 
                  title: 'Remote work flexibility', 
                  desc: 'Work from anywhere, as long as you’re aligned with our mission and can sync with our heart. We value trust, ownership, and outcomes over fixed desks, locations, or time zones. Having said so, we expect you to come to office once the KiSS hits the production as the urban mobility is no more a challenge!' 
                },
                { 
                  title: 'Non-Traditional Work Environment', 
                  desc: 'We don’t believe in rigid 9-to-5, Monday-to-Friday work structures. Work at the time you’re most comfortable and productive. What matters to us is responsibility, accountability, and getting the work done - not clocking hours.' 
                },
                { 
                  title: 'Equity as Standard', 
                  desc: 'We believe builders should be owners. Every team member receives a meaningful equity stake, because Turtle Mobility is not just a company, it’s a shared movement we are building together.' 
                },
                { 
                  title: 'The Shell Lab Access', 
                  desc: 'Innovation thrives when curiosity is encouraged. Spend dedicated time in The Shell Lab, our space for experimenting with passion projects, bold ideas, and hands-on exploration related to mobility, design, and human-centric technology.' 
                },
                { 
                  title: 'No Degree Barriers. No Language Barriers.', 
                  desc: 'Don’t have an engineering degree? Don’t speak English, German, Japanese, Chinese? Neither our turtle does! At Turtle Mobility, we don’t believe in certificates, presentations, or fancy degrees. We value real, first-hand experience of building cars over traditional academic pedigrees. Our vehicle doesn’t understand languages or resumes - it understands automotive thinking. If you can think, build, test, break, fix, and clearly express your ideas, you belong here. We value outcomes over appearances, impact over titles, and real progress over polished slides or endless Jira tickets. If you’re passionate enough to solve hard problems and brave enough to challenge conventions, we want to hear from you.' 
                }
              ].map(item => (
                <div key={item.title} className="border-b border-turtle-dark/10 last:border-0 pb-4 last:pb-0">
                  <div 
                    onClick={() => toggleCulture(item.title)}
                    className="flex justify-between items-center cursor-pointer group"
                  >
                    <div className="flex gap-4 items-center">
                      <div className={`w-2 h-2 rounded-full transition-colors ${expandedCultureId === item.title ? 'bg-turtle-teal' : 'bg-turtle-dark/20 group-hover:bg-turtle-teal/50'}`} />
                      <h4 className={`font-bold text-lg transition-colors ${expandedCultureId === item.title ? 'text-turtle-teal' : 'text-turtle-dark group-hover:text-turtle-teal'}`}>
                        {item.title}
                      </h4>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-turtle-dark/20 flex items-center justify-center group-hover:border-turtle-teal group-hover:text-turtle-teal transition-colors shrink-0">
                      <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${expandedCultureId === item.title ? 'rotate-180' : ''}`} 
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedCultureId === item.title ? 'max-h-[1000px] opacity-100 mt-4 pl-6' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-base text-turtle-dark/70 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Roles List */}
        <div className="mb-32">
          <h2 className="text-3xl font-display font-bold mb-12">Open Opportunities</h2>
          <div className="flex flex-col border-t border-turtle-dark/10">
            {jobsData.map(job => (
              <div key={job.id} className="border-b border-turtle-dark/10">
                <div 
                  onClick={() => toggleJob(job.id)}
                  className="flex flex-col md:flex-row md:justify-between md:items-center p-8 hover:bg-white/40 transition-all cursor-pointer group gap-4 md:gap-0"
                >
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-turtle-teal transition-colors">{job.role}</h3>
                    <p className="text-[10px] uppercase tracking-widest opacity-40 mt-1">{job.dept} • {job.loc}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={(e) => handleApplyClick(e, job.id)}
                      className="bg-turtle-dark text-turtle-light px-8 py-3 rounded-full text-[10px] uppercase font-bold tracking-widest hover:bg-turtle-teal transition-all md:opacity-0 group-hover:opacity-100"
                    >
                      Apply Now
                    </button>
                    <div className="w-8 h-8 rounded-full border border-turtle-dark/20 flex items-center justify-center group-hover:border-turtle-teal group-hover:text-turtle-teal transition-colors">
                      <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${expandedJobId === job.id ? 'rotate-180' : ''}`} 
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Expandable Content */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedJobId === job.id ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-8 pt-0 bg-white/20">
                    {job.role_overview && job.role_overview.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-3 text-turtle-teal">Role Overview</h4>
                        {job.role_overview.map((para, idx) => (
                          <p key={idx} className="text-turtle-dark/80 text-sm leading-relaxed mb-2">{para}</p>
                        ))}
                      </div>
                    )}
                    
                    {job.responsibilities && job.responsibilities.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-3 text-turtle-teal">Key Responsibilities</h4>
                        <ul className="list-disc list-outside ml-4 space-y-1">
                          {job.responsibilities.map((item, idx) => (
                            <li key={idx} className="text-turtle-dark/80 text-sm leading-relaxed">{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {job.requirements && job.requirements.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-3 text-turtle-teal">Skill Requirements</h4>
                        <ul className="list-disc list-outside ml-4 space-y-1">
                          {job.requirements.map((item, idx) => (
                            <li key={idx} className="text-turtle-dark/80 text-sm leading-relaxed">{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {job.experience && job.experience.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-3 text-turtle-teal">Experience & Background</h4>
                        <ul className="list-disc list-outside ml-4 space-y-1">
                          {job.experience.map((item, idx) => (
                            <li key={idx} className="text-turtle-dark/80 text-sm leading-relaxed">{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="mt-8 pt-6 border-t border-turtle-dark/10 flex flex-wrap gap-4 items-center justify-between">
                      <div className="text-xs text-turtle-dark/50 uppercase tracking-widest">
                        Job ID: {job.job_id}
                      </div>
                      <button 
                        onClick={(e) => handleApplyClick(e, job.id)}
                        className="bg-turtle-teal text-white px-8 py-3 rounded-full text-xs uppercase font-bold tracking-widest hover:bg-turtle-dark transition-all inline-block"
                      >
                        Apply for this Role
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {applyingJobId && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-turtle-dark/80 backdrop-blur-sm p-4 md:p-8 flex justify-center items-start md:items-center">
          <div className="bg-turtle-light rounded-[2rem] w-full max-w-2xl p-6 md:p-12 relative my-auto shadow-2xl shrink-0 mt-8 md:mt-auto mb-8 md:mb-auto">
            <button 
              onClick={() => setApplyingJobId(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-turtle-dark/5 flex items-center justify-center hover:bg-turtle-teal hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-3xl font-display font-bold mb-2">Submit Application</h2>
            <p className="text-turtle-dark/60 mb-8">
              Applying for: <span className="font-bold text-turtle-teal">{jobsData.find(j => j.id === applyingJobId)?.role}</span>
            </p>

            {submitSuccess ? (
              <div className="py-12 text-center">
                <div className="w-20 h-20 bg-turtle-teal/10 text-turtle-teal rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Application Received!</h3>
                <p className="text-turtle-dark/60">We've sent your details to our team. We'll be in touch soon.</p>
              </div>
            ) : (
              <form 
                className="space-y-6" 
                onSubmit={handleFormSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-widest text-turtle-dark/70 mb-2">Full Name *</label>
                    <input required name="name" type="text" className="w-full bg-white border border-turtle-dark/10 rounded-xl px-4 py-3 focus:outline-none focus:border-turtle-teal" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-widest text-turtle-dark/70 mb-2">Email Address *</label>
                    <input required name="email" type="email" className="w-full bg-white border border-turtle-dark/10 rounded-xl px-4 py-3 focus:outline-none focus:border-turtle-teal" placeholder="jane@example.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-turtle-dark/70 mb-2">Cover Letter</label>
                  <textarea name="message" rows={4} className="w-full bg-white border border-turtle-dark/10 rounded-xl px-4 py-3 focus:outline-none focus:border-turtle-teal" placeholder="Tell us why you're a great fit for Turtle Mobility..." />
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-turtle-dark/70 mb-2">Link to LinkedIn / Portfolio / Resume *</label>
                  <input required name="LinkedIn / Portfolio / Resume Link" type="url" className="w-full bg-white border border-turtle-dark/10 rounded-xl px-4 py-3 focus:outline-none focus:border-turtle-teal" placeholder="e.g. LinkedIn profile, Google Drive link, or Portfolio URL" />
                  <p className="text-xs text-turtle-dark/50 mt-2">Please ensure the link is publicly accessible so we can view your work.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-widest text-turtle-dark/70 mb-2">Notice Period</label>
                    <input name="Notice Period" type="text" className="w-full bg-white border border-turtle-dark/10 rounded-xl px-4 py-3 focus:outline-none focus:border-turtle-teal" placeholder="e.g. 30 Days, Immediate" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-widest text-turtle-dark/70 mb-2">Expected Salary</label>
                    <input name="Expected Salary" type="text" className="w-full bg-white border border-turtle-dark/10 rounded-xl px-4 py-3 focus:outline-none focus:border-turtle-teal" placeholder="e.g. ₹15,00,000 LPA" />
                  </div>
                </div>

                <div className="pt-6">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-turtle-teal text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-turtle-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Career;
