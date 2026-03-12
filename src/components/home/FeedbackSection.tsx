import React, { useState } from 'react';
import { Send, MessageSquareHeart } from 'lucide-react';

const FeedbackSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setTimeout(() => setIsSuccess(false), 5000);
        }, 1500);
    };

    return (
        <section id="feedback" className="py-24 bg-brand-light relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
                    
                    {/* Left Column: Context / Info */}
                    <div className="w-full md:w-5/12 bg-brand-navy text-white p-10 flex flex-col justify-between relative overflow-hidden">
                        <div className="relative z-10">
                            <MessageSquareHeart className="w-12 h-12 text-brand-gold mb-6" />
                            <h2 className="text-3xl font-display font-bold mb-4">We Want to Hear From You</h2>
                            <p className="text-brand-light/80 text-lg mb-8 leading-relaxed">
                                Your voice matters. Whether you have ideas for new programs, feedback on our current initiatives, or thoughts on youth development in Tanzania—share them with us.
                            </p>
                            
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3 text-sm">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">💡</div>
                                    <span>Shape future programs</span>
                                </div>
                                <div className="flex items-center space-x-3 text-sm">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">🤝</div>
                                    <span>Connect with leadership</span>
                                </div>
                                <div className="flex items-center space-x-3 text-sm">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">🚀</div>
                                    <span>Drive real impact</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Decorative circles in background */}
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 border-4 border-white/5 rounded-full"></div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 border-4 border-white/10 rounded-full"></div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="w-full md:w-7/12 p-10 bg-white">
                        {isSuccess ? (
                            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12 animate-fade-in-up">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-4">
                                    <Send size={40} className="ml-1" />
                                </div>
                                <h3 className="text-2xl font-bold text-brand-navy">Thank You!</h3>
                                <p className="text-text-secondary">Your feedback has been received. We appreciate your input in shaping YRIF.</p>
                                <button 
                                    onClick={() => window.location.reload()}
                                    className="mt-6 text-brand-blue font-semibold hover:underline"
                                >
                                    Submit another response
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-semibold text-text-primary">Full Name</label>
                                        <input 
                                            type="text" 
                                            id="name" 
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-colors bg-gray-50/50"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-semibold text-text-primary">Email Address</label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-colors bg-gray-50/50"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="role" className="text-sm font-semibold text-text-primary">I am a...</label>
                                    <select 
                                        id="role" 
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-colors bg-gray-50/50 appearance-none cursor-pointer"
                                    >
                                        <option value="student">Student/Youth Participant</option>
                                        <option value="researcher">Young Researcher</option>
                                        <option value="professional">Professional/Mentor</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-text-primary">Your Feedback</label>
                                    <textarea 
                                        id="message" 
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-colors bg-gray-50/50 resize-none"
                                        placeholder="Tell us what's on your mind..."
                                    ></textarea>
                                </div>

                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg flex items-center justify-center space-x-2 ${
                                        isSubmitting ? 'bg-brand-navy/70 cursor-not-allowed' : 'bg-brand-blue hover:bg-brand-navy hover:shadow-xl hover:-translate-y-0.5'
                                    }`}
                                >
                                    <span>{isSubmitting ? 'Sending...' : 'Send Feedback'}</span>
                                    {!isSubmitting && <Send size={18} className="ml-2" />}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeedbackSection;
