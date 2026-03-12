import { ExternalLink, GraduationCap, Microscope, BookOpen, Building2 } from 'lucide-react';

const links = [
    {
        name: 'Ministry of Education, Science and Technology',
        abbr: 'MoEST',
        url: 'https://www.moe.go.tz/',
        description: 'Tanzania\'s formal body for educational policies and technological advancement.',
        icon: <Building2 className="w-8 h-8 text-brand-gold" />
    },
    {
        name: 'Tanzania Commission for Science and Technology',
        abbr: 'COSTECH',
        url: 'https://www.costech.or.tz/',
        description: 'The principal advisory organ to the Government on matters relating to scientific research and technology.',
        icon: <Microscope className="w-8 h-8 text-brand-teal" />
    },
    {
        name: 'Tanzania Commission for Universities',
        abbr: 'TCU',
        url: 'https://www.tcu.go.tz/',
        description: 'Regulating and ensuring the quality of university education in Tanzania.',
        icon: <GraduationCap className="w-8 h-8 text-brand-blue" />
    },
    {
        name: 'University of Dar es Salaam',
        abbr: 'UDSM',
        url: 'https://www.udsm.ac.tz/',
        description: 'The oldest and premier public university in Tanzania, fostering research and innovation.',
        icon: <BookOpen className="w-8 h-8 text-text-secondary" />
    }
];

const UsefulLinks = () => {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-bold text-brand-teal uppercase tracking-wide mb-2">Ecosystem</h2>
                    <h3 className="text-3xl md:text-5xl font-display font-bold text-brand-navy mb-6">Educational Resources</h3>
                    <p className="text-text-secondary text-lg">
                        Explore other organizations and institutions driving education, research, and innovation across Tanzania.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {links.map((link, index) => (
                        <a 
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:border-brand-blue/20 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
                        >
                            {/* Hover Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 border border-gray-100 group-hover:scale-110 transition-transform duration-300">
                                    {link.icon}
                                </div>
                                
                                <h4 className="text-xl font-bold text-brand-navy mb-1 pr-8 group-hover:text-brand-blue transition-colors">
                                    {link.abbr}
                                </h4>
                                <h5 className="text-sm font-semibold text-text-primary mb-3">
                                    {link.name}
                                </h5>
                                
                                <p className="text-text-secondary text-sm mb-6 flex-grow">
                                    {link.description}
                                </p>
                                
                                <div className="flex items-center text-brand-blue font-semibold text-sm mt-auto group/link">
                                    <span>Visit Website</span>
                                    <ExternalLink size={16} className="ml-2 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UsefulLinks;
