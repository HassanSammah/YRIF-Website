import { Link } from 'react-router-dom';
import heroImage from '../../assets/images/hero_innovation_v2.png';


const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-teal/5 to-transparent -z-10" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start text-left fade-in-up">
                        {/* Decorative Asset Removed */}

                        <h1 className='text-xl'>Youth Research & Innovation Foundation</h1>
                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight text-brand-navy">
                            Empowering Youth Through
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-gold"> Research & Innovation</span>
                        </h1>

                        <p className="text-text-secondary text-lg md:text-xl mb-10 font-light max-w-lg leading-relaxed text-balance">
                            Join a community of young researchers and innovators solving global challenges through local insights and collaboration.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
                            <Link to="/register" className="bg-brand-navy text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-xl shadow-brand-navy/20 hover:shadow-brand-blue/30 hover:scale-105 hover:bg-brand-blue flex items-center justify-center gap-2">
                                Join YRIF
                            </Link>
                            <a href="#research" className="group px-8 py-4 rounded-full text-lg font-semibold border-2 border-brand-navy/10 hover:border-brand-navy/30 text-brand-navy transition-all flex items-center justify-center gap-2 bg-white/50 backdrop-blur-sm">
                                Explore Research
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0">
                        <div className="relative z-10 transform transition-transform duration-700 hover:scale-[1.02]">
                            <img
                                src={heroImage}
                                alt="Youth Innovation"
                                className="rounded-[2.5rem] shadow-2xl w-full object-cover h-[600px] mask-gradient"
                            />

                            {/* Modern Glass Badge */}
                            <div className="absolute bottom-8 left-8 right-8 glass-card p-6 rounded-3xl animate-in slide-in-from-bottom duration-1000 hidden md:block">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-brand-teal flex items-center justify-center text-white font-bold text-xl">
                                        85%
                                    </div>
                                    <div>
                                        <div className="font-bold text-brand-navy text-lg">Growth in Youth Research</div>
                                        <div className="text-sm text-text-secondary">Since YRIF Inception</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Abstract Shapes */}
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-gold/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
                        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
