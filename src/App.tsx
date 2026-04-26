import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Zap, 
  Shield, 
  BarChart3, 
  ArrowRight, 
  CheckCircle2, 
  Github, 
  Twitter, 
  Linkedin,
  Mail,
  Smartphone,
  Globe,
  Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-primary-600 p-1.5 rounded-lg">
              <Zap className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-indigo-600">
              NovaFlow
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-600 hover:text-primary-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-primary-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-primary-700 transition-all shadow-lg shadow-primary-200">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full mt-4 bg-primary-600 text-white px-6 py-4 rounded-xl font-bold">
                Get Started Free
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-100 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-100 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-primary-600 uppercase bg-primary-50 rounded-full border border-primary-100">
            Now in public beta →
          </span>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
            Streamline your workflow <br className="hidden lg:block" /> 
            <span className="text-primary-600">with precision.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg lg:text-xl text-slate-600 mb-10 leading-relaxed">
            The all-in-one platform to manage your team, track performance, and automate repetitive tasks. Spend more time growing, less time managing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-primary-600 text-white rounded-xl font-bold text-lg hover:bg-primary-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-primary-200">
              Start Your Free Trial <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
              Watch Demo
            </button>
          </div>
          
          <div className="mt-16 relative">
             <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
             <img 
               src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" 
               alt="Dashboard Preview" 
               className="rounded-2xl shadow-2xl border border-slate-200 w-full max-w-5xl mx-auto transform hover:scale-[1.02] transition-transform duration-500"
             />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: "Real-time Analytics",
      desc: "Get insights into your performance as they happen. Make data-driven decisions instantly.",
      icon: <BarChart3 className="w-8 h-8 text-primary-600" />
    },
    {
      title: "Secure by Design",
      desc: "Enterprise-grade security with end-to-end encryption and compliance certifications.",
      icon: <Shield className="w-8 h-8 text-primary-600" />
    },
    {
      title: "Global Infrastructure",
      desc: "Lightning fast performance worldwide with our distributed edge network.",
      icon: <Globe className="w-8 h-8 text-primary-600" />
    },
    {
      title: "Mobile First",
      desc: "Fully responsive dashboard that works perfectly on any device, anywhere.",
      icon: <Smartphone className="w-8 h-8 text-primary-600" />
    },
    {
      title: "Advanced Integrations",
      desc: "Connect with all the tools you already use. Seamless synchronization guaranteed.",
      icon: <Layers className="w-8 h-8 text-primary-600" />
    },
    {
      title: "Auto-Scaling",
      desc: "Our platform grows with you. Never worry about capacity or downtime again.",
      icon: <Zap className="w-8 h-8 text-primary-600" />
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">Everything you need to scale</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Powerful tools designed to help teams of all sizes build and ship faster.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-6 p-3 bg-primary-50 rounded-xl w-fit">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      features: ["Up to 5 team members", "Core analytics suite", "Standard support", "1GB Storage"],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      features: ["Up to 25 team members", "Advanced analytics", "Priority support", "10GB Storage", "Custom integrations"],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Unlimited members", "Full control & security", "Dedicated manager", "Unlimited Storage", "SLA Support"],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">Simple, transparent pricing</h2>
          <p className="text-lg text-slate-600">Choose the plan that fits your growth stage.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <div 
              key={i}
              className={`relative flex flex-col p-8 rounded-3xl border ${plan.popular ? 'border-primary-600 ring-4 ring-primary-50' : 'border-slate-200'} bg-white`}
            >
              {plan.popular && (
                <span className="absolute top-0 right-8 transform -translate-y-1/2 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-slate-500">/mo</span>}
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 className="text-primary-600 w-5 h-5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-200' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="text-primary-500 w-8 h-8" />
              <span className="text-2xl font-bold text-white">NovaFlow</span>
            </div>
            <p className="max-w-xs mb-6 text-slate-400">
              Modern workflow management for forward-thinking teams. Scale your business with confidence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-primary-500 transition-colors"><Github size={20} /></a>
              <a href="#" className="hover:text-primary-500 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2024 NovaFlow Technologies Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      
      {/* Social Proof Section */}
      <section className="py-12 border-y border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-400 font-medium uppercase tracking-widest text-sm mb-8">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-50 grayscale">
            <span className="text-2xl font-bold">TECHCORP</span>
            <span className="text-2xl font-bold">FINANCE.IO</span>
            <span className="text-2xl font-bold">STREAMLINE</span>
            <span className="text-2xl font-bold">CYBERNET</span>
            <span className="text-2xl font-bold">GLOBO</span>
          </div>
        </div>
      </section>

      <Pricing />

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-600 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary-200">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500 to-indigo-700 -z-0 opacity-50" />
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Ready to transform your workflow?</h2>
              <p className="text-primary-100 text-lg mb-10 max-w-2xl mx-auto">
                Join over 10,000+ teams who have already improved their productivity by 40% using NovaFlow.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-10 py-4 bg-white text-primary-600 rounded-xl font-bold text-lg hover:bg-primary-50 transition-all">
                  Get Started for Free
                </button>
                <button className="px-10 py-4 bg-primary-700 text-white border border-primary-500 rounded-xl font-bold text-lg hover:bg-primary-800 transition-all">
                  Talk to Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
