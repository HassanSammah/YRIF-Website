import { useState } from 'react';
import { Briefcase, MapPin, Clock, Search } from 'lucide-react';

const vacancies = [
    {
        id: 1,
        title: 'Research Fellow - Climate Science',
        department: 'Environmental Research',
        location: 'Dar es Salaam, Tanzania (Hybrid)',
        type: 'Full-time',
        deadline: 'Oct 30, 2026',
        description: 'Lead research initiatives focusing on climate change adaptation strategies for coastal communities in Tanzania.'
    },
    {
        id: 2,
        title: 'Community Outreach Coordinator',
        department: 'Programs Team',
        location: 'Dodoma, Tanzania',
        type: 'Contract',
        deadline: 'Nov 15, 2026',
        description: 'Coordinate YRIF mentorship and outreach programs across secondary schools and local universities.'
    },
    {
        id: 3,
        title: 'Data Analyst Intern',
        department: 'Research & Data',
        location: 'Remote',
        type: 'Internship',
        deadline: 'Nov 05, 2026',
        description: 'Assist in cleaning, analyzing, and visualizing data collected from various YRIF socio-economic studies.'
    },
    {
        id: 4,
        title: 'Grant Writer Specialist',
        department: 'Fundraising',
        location: 'Dar es Salaam, Tanzania',
        type: 'Part-time',
        deadline: 'Nov 20, 2026',
        description: 'Research and write compelling grant proposals to secure funding for innovative youth-led projects.'
    }
];

const Vacancies = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('All');

    const filteredVacancies = vacancies.filter(vacancy => {
        const matchesSearch = vacancy.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              vacancy.department.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filter === 'All' || vacancy.type === filter;
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="pt-32 pb-24 min-h-screen bg-brand-light">
            <div className="container mx-auto px-6 md:px-12">
                
                {/* Header Page */}
                <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-navy mb-6">Join Our Team</h1>
                    <p className="text-text-secondary text-lg">
                        At YRIF, we are always looking for passionate youth and experienced professionals to help us drive research and innovation in Tanzania. Discover opportunities below.
                    </p>
                </div>

                {/* Filters and Search */}
                <div className="max-w-5xl mx-auto mb-10 flex flex-col md:flex-row gap-4 justify-between items-center animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input 
                            type="text" 
                            placeholder="Search globally..." 
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue bg-white shadow-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    
                    <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
                        {['All', 'Full-time', 'Part-time', 'Contract', 'Internship'].map(type => (
                            <button
                                key={type}
                                onClick={() => setFilter(type)}
                                className={`px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                                    filter === type 
                                    ? 'bg-brand-navy text-white shadow-md' 
                                    : 'bg-white text-text-secondary border border-gray-200 hover:border-brand-blue hover:text-brand-blue'
                                }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Vacancies List */}
                <div className="max-w-5xl mx-auto space-y-6">
                    {filteredVacancies.length > 0 ? (
                        filteredVacancies.map((vacancy, index) => (
                            <div 
                                key={vacancy.id} 
                                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 group animate-fade-in-up"
                                style={{animationDelay: `${0.1 * (index + 2)}s`}}
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                    <div className="flex-grow">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-sm font-bold text-brand-teal uppercase tracking-wide">{vacancy.department}</span>
                                            <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-bold">{vacancy.type}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-brand-navy mb-3 group-hover:text-brand-blue transition-colors">
                                            {vacancy.title}
                                        </h3>
                                        <p className="text-text-secondary mb-4 line-clamp-2">{vacancy.description}</p>
                                        
                                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-medium">
                                            <div className="flex items-center">
                                                <MapPin size={16} className="mr-1.5" />
                                                {vacancy.location}
                                            </div>
                                            <div className="flex items-center">
                                                <Clock size={16} className="mr-1.5" />
                                                Deadline: {vacancy.deadline}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex-shrink-0 md:pl-6 md:border-l border-gray-100 flex flex-col items-start md:items-center justify-center">
                                        <button className="flex items-center px-6 py-3 bg-white border-2 border-brand-navy text-brand-navy rounded-xl font-bold hover:bg-brand-navy hover:text-white transition-all group/btn w-full md:w-auto justify-center">
                                            View Details
                                            <Briefcase size={18} className="ml-2 group-hover/btn:scale-110 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
                            <Briefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-brand-navy mb-2">No Vacancies Found</h3>
                            <p className="text-text-secondary">Try adjusting your search or filters to find what you're looking for.</p>
                            <button 
                                onClick={() => {setSearchTerm(''); setFilter('All');}}
                                className="mt-6 text-brand-blue font-bold hover:underline"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
                
                <div className="mt-16 text-center">
                    <p className="text-text-secondary">Don't see a role that fits? Send your resume to <a href="mailto:careers@yrif.org" className="text-brand-blue font-bold hover:underline">careers@yrif.org</a></p>
                </div>
            </div>
        </div>
    );
};

export default Vacancies;
