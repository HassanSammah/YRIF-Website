import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import researchImage from '../../assets/images/research_meeting.png';

const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="absolute -left-12 -bottom-12 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl"></div>
                        <div className="absolute -right-12 -top-12 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl"></div>

                        <img
                            src={researchImage}
                            alt="Research Team Meeting"
                            className="relative rounded-2xl shadow-xl w-full object-cover z-10"
                        />

                        {/* Float Card */}
                        <div className="absolute -bottom-6 -right-6 z-20 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs hidden md:block">
                            <p className="text-gray-600 italic text-sm">&quot;The platform has transformed how we collaborate on national research projects.&quot;</p>
                            <div className="mt-4 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-brand-navy flex items-center justify-center text-white text-xs font-bold">DK</div>
                                <div>
                                    <div className="text-xs font-bold text-brand-navy">Dr. K. Katho</div>
                                    <div className="text-[10px] text-gray-400">Project Lead</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-sm font-bold text-brand-teal uppercase tracking-wide mb-2">It is Our Mission</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6 leading-tight">To Bridge the Gap Between <br /> Youth & National Development</h3>
                        <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                            YRIF is more than just a platform; it&apos;s a movement. We are dedicated to creating an ecosystem where young researchers can thrive, innovate, and contribute directly to Tanzania&apos;s growth.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {[
                                "Access to national research databases",
                                "Mentorship from industry veterans",
                                "Funding opportunities for innovative projects",
                                "Collaborative workspace for cross-institutional teams"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle className="text-brand-teal shrink-0 mt-1" size={20} />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Link to="/about" className="inline-flex items-center justify-center px-6 py-3 border border-brand-navy text-brand-navy font-semibold rounded-lg hover:bg-brand-navy hover:text-white transition-all duration-300">
                            Read Our Full Mission
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
