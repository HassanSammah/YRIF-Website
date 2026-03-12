import { useState } from 'react';
import { Heart, CreditCard, ChevronRight, Lock, Gift, Building2 } from 'lucide-react';

const Donations = () => {
    const [amount, setAmount] = useState<number | null>(50);
    const [customAmount, setCustomAmount] = useState<string>('');
    const [isRecurring, setIsRecurring] = useState(false);

    const presetAmounts = [10, 25, 50, 100, 250];

    const handleAmountSelect = (val: number) => {
        setAmount(val);
        setCustomAmount('');
    };

    const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setCustomAmount(value);
            if (value !== '') {
                setAmount(null);
            } else {
                setAmount(50); // Default fallback
            }
        }
    };

    return (
        <div className="pt-32 pb-24 min-h-screen bg-brand-light relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
                 style={{backgroundImage: 'radial-gradient(#093344 1px, transparent 1px)', backgroundSize: '32px 32px'}}>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-6xl mx-auto">
                    
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
                        <div className="inline-flex items-center justify-center p-3 bg-brand-gold/10 rounded-full mb-6">
                            <Heart className="w-8 h-8 text-brand-gold fill-brand-gold/20" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-brand-navy mb-6">Empower the Future</h1>
                        <p className="text-text-secondary text-lg">
                            Your support directly funds youth-led research projects, mentorship programs, and innovation hubs across Tanzania. Together, we can build a knowledge-driven economy.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        
                        {/* Left: Donation Form */}
                        <div className="lg:col-span-7 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
                                <h3 className="text-2xl font-bold text-brand-navy mb-6">Make a Secure Donation</h3>
                                
                                {/* Frequency Toggle */}
                                <div className="flex bg-gray-100 rounded-xl p-1 mb-8">
                                    <button 
                                        className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${!isRecurring ? 'bg-white text-brand-navy shadow-sm' : 'text-text-secondary hover:text-brand-navy'}`}
                                        onClick={() => setIsRecurring(false)}
                                    >
                                        Give Once
                                    </button>
                                    <button 
                                        className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${isRecurring ? 'bg-white text-brand-navy shadow-sm' : 'text-text-secondary hover:text-brand-navy'}`}
                                        onClick={() => setIsRecurring(true)}
                                    >
                                        Monthly
                                    </button>
                                </div>

                                {/* Amount Selection */}
                                <div className="mb-6">
                                    <label className="block text-sm font-bold text-text-primary mb-3">Select Amount (USD)</label>
                                    <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
                                        {presetAmounts.map((val) => (
                                            <button
                                                key={val}
                                                onClick={() => handleAmountSelect(val)}
                                                className={`py-4 rounded-xl font-bold text-lg transition-all border-2 ${
                                                    amount === val 
                                                    ? 'border-brand-blue bg-brand-blue/5 text-brand-blue' 
                                                    : 'border-gray-200 text-text-secondary hover:border-brand-blue/40'
                                                }`}
                                            >
                                                ${val}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">$</span>
                                        <input 
                                            type="text" 
                                            placeholder="Custom Amount"
                                            value={customAmount}
                                            onChange={handleCustomAmount}
                                            className={`w-full pl-8 pr-4 py-4 rounded-xl border-2 font-bold focus:outline-none transition-colors ${
                                                customAmount ? 'border-brand-blue bg-brand-blue/5 text-brand-blue' : 'border-gray-200 focus:border-brand-blue'
                                            }`}
                                        />
                                    </div>
                                </div>

                                {/* Payment Method (Visual Only) */}
                                <div className="mb-8">
                                    <label className="block text-sm font-bold text-text-primary mb-3">Payment Method</label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <button className="flex items-center justify-center p-4 border-2 border-brand-blue bg-brand-blue/5 rounded-xl transition-all">
                                            <CreditCard className="w-5 h-5 mr-2 text-brand-blue" />
                                            <span className="font-bold text-brand-navy">Credit Card</span>
                                        </button>
                                        <button className="flex items-center justify-center p-4 border-2 border-gray-200 hover:border-brand-blue/40 rounded-xl transition-all grayscale hover:grayscale-0 opacity-70 hover:opacity-100">
                                            {/* Simulate PayPal Logo */}
                                            <span className="font-bold text-blue-800 italic">Pay</span><span className="font-bold text-blue-400 italic">Pal</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Submit */}
                                <button className="w-full py-5 bg-brand-navy hover:bg-brand-blue text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex flex-col items-center justify-center">
                                    <span className="flex items-center">
                                        Donate ${customAmount || amount || 0} {isRecurring ? 'Monthly' : ''}
                                        <ChevronRight className="ml-2 w-5 h-5" />
                                    </span>
                                </button>
                                
                                <div className="mt-4 flex items-center justify-center text-xs text-gray-500">
                                    <Lock size={12} className="mr-1" />
                                    Secure, encrypted payment powered by Stripe.
                                </div>
                            </div>
                        </div>

                        {/* Right: Impact & Info */}
                        <div className="lg:col-span-5 space-y-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                            <div className="bg-brand-navy text-white rounded-3xl p-8 shadow-xl">
                                <h3 className="text-2xl font-bold mb-6">Your Impact</h3>
                                <ul className="space-y-6">
                                    <li className="flex items-start">
                                        <div className="bg-brand-teal/20 p-3 rounded-xl mr-4 flex-shrink-0">
                                            <span className="font-bold text-brand-teal text-xl">$50</span>
                                        </div>
                                        <div>
                                            <p className="font-bold mb-1">Funds a Student Researcher</p>
                                            <p className="text-white/70 text-sm">Provides necessary materials and internet access for a student for one month.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-brand-gold/20 p-3 rounded-xl mr-4 flex-shrink-0">
                                            <span className="font-bold text-brand-gold text-xl">$150</span>
                                        </div>
                                        <div>
                                            <p className="font-bold mb-1">Sponsors a Mentorship Pair</p>
                                            <p className="text-white/70 text-sm">Covers the logistical costs of connecting a youth with an expert mentor for a semester.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-brand-blue/20 p-3 rounded-xl mr-4 flex-shrink-0">
                                            <span className="font-bold text-brand-blue text-xl">$500</span>
                                        </div>
                                        <div>
                                            <p className="font-bold mb-1">Seed Grant for a Project</p>
                                            <p className="text-white/70 text-sm">Provides immediate mini-grant funding to kickstart a promising community innovation.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                                <h4 className="font-bold text-brand-navy mb-4 flex items-center">
                                    <Building2 className="w-5 h-5 mr-2 text-text-secondary" />
                                    Corporate Partnerships
                                </h4>
                                <p className="text-text-secondary text-sm mb-4">
                                    Looking to align your company with youth empowerment? We offer tailored partnership packages.
                                </p>
                                <a href="mailto:partners@yrif.org" className="text-brand-blue font-bold text-sm hover:underline flex items-center">
                                    Contact our partnerships team <ChevronRight className="w-4 h-4 ml-1" />
                                </a>
                            </div>
                            
                            <div className="bg-gradient-cream rounded-3xl p-8 shadow-sm">
                                <h4 className="font-bold text-brand-navy mb-4 flex items-center">
                                    <Gift className="w-5 h-5 mr-2 text-brand-gold" />
                                    Other Ways to Give
                                </h4>
                                <p className="text-text-secondary text-sm">
                                    We also accept donations via bank transfer, mobile money (M-Pesa, Tigo Pesa), and in-kind equipment donations. <a href="#contact" className="text-brand-blue font-bold hover:underline">Get in touch</a> for details.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donations;
