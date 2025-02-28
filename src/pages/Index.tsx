
import { Shield, Globe, Lock, Key, Wifi, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import PricingCard from "@/components/PricingCard";

const features = [
  {
    icon: Shield,
    title: "Military-Grade Encryption",
    description: "Your data is protected with AES-256 encryption, the same standard used by security experts worldwide."
  },
  {
    icon: Lock,
    title: "Strict No-Logs Policy",
    description: "We never track, store, or share your online activities. Your privacy is our priority."
  },
  {
    icon: Globe,
    title: "Global Server Network",
    description: "Connect to any of our 100+ servers across 10+ countries for optimal performance."
  },
  {
    icon: Key,
    title: "Kill Switch & Split Tunneling",
    description: "Advanced features to protect your data in case of connection drops and route specific traffic through VPN."
  },
  {
    icon: Wifi,
    title: "Multiple Protocols",
    description: "Choose between Vless and Trojan protocols for the best balance of speed and security."
  },
  {
    icon: Shield,
    title: "DNS Leak Protection",
    description: "Ensures your DNS requests are always secure, preventing any potential data leaks."
  }
];

const pricingPlans = [
  {
    title: "Basic Plan",
    price: "$7.99",
    description: "Perfect for individual use",
    features: [
      "5 simultaneous devices",
      "10+ server locations",
      "24/7 customer support",
      "64GB data",
      "Vless protocol"
    ]
  },
  {
    title: "Premium Plan",
    price: "$9.99",
    description: "Ideal for small families",
    features: [
      "5 simultaneous devices",
      "10+ server locations",
      "24/7 priority support",
      "128GB data",
      "Vless & Trojan protocols",
      "Kill Switch & Split Tunneling"
    ],
    isPopular: true
  },
  {
    title: "Studio Pack",
    price: "$14.99",
    description: "Best for businesses & teams",
    features: [
      "20 simultaneous devices",
      "10+ server locations",
      "24/7 priority support",
      "1500GB data",
      "Vless & Trojan protocols",
      "Dedicated IP address",
      "Advanced security features"
    ]
  }
];

const testimonials = [
  {
    name: "Sarah L.",
    role: "Remote Worker",
    quote: "2discus VPN has been a game-changer for my remote work. The connection is stable, and I can access all my company resources securely.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "David M.",
    role: "Frequent Traveler",
    quote: "I travel internationally for work, and 2discus VPN has been essential for accessing content from home and keeping my data secure on public WiFi.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Alex T.",
    role: "Digital Nomad",
    quote: "The global server coverage is impressive. I can always find a fast connection no matter where I'm working from. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

const faqs = [
  {
    question: "Does a VPN slow down internet speed?",
    answer: "While VPNs can slightly reduce speed due to encryption, 2discus VPN uses optimized servers to minimize any noticeable slowdown, ensuring a smooth browsing experience."
  },
  {
    question: "Is torrenting allowed with 2discus VPN?",
    answer: "Yes, we allow P2P file sharing on designated servers. However, we encourage responsible use and compliance with copyright laws."
  },
  {
    question: "Can I use 2discus VPN in China?",
    answer: "Yes, 2discus VPN works in China and other countries with strict internet regulations. Our specialized servers are designed to bypass restrictions."
  },
  {
    question: "How many devices can I connect simultaneously?",
    answer: "Depending on your plan, you can connect 5-20 devices simultaneously. Our Basic and Premium plans allow 5 devices, while the Studio Pack supports up to 20 devices."
  }
];

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        
        {/* Features Section */}
        <section className="section-padding bg-vpn-gray">
          <div className="vpn-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg text-vpn-blue mb-4 fade-in">Advanced Security Features</h2>
              <p className="paragraph fade-in-up">
                Protect your online presence with our comprehensive suite of security and privacy features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Protocol Comparison */}
        <section className="section-padding">
          <div className="vpn-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg text-vpn-blue mb-4 fade-in">Supported Protocols</h2>
              <p className="paragraph fade-in-up">
                Choose the protocol that best suits your needs for the perfect balance of speed, security, and accessibility.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-card p-6 fade-in-up">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-vpn-blue/10 flex items-center justify-center mr-3">
                    <Lock className="h-5 w-5 text-vpn-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-vpn-blue">VLESS Protocol</h3>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-vpn-green mt-1 flex-shrink-0" />
                    <span className="ml-3 text-gray-600">Lightweight and fast connections</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-vpn-green mt-1 flex-shrink-0" />
                    <span className="ml-3 text-gray-600">Excellent for streaming and browsing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-vpn-green mt-1 flex-shrink-0" />
                    <span className="ml-3 text-gray-600">Difficult to detect and block</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-vpn-green mt-1 flex-shrink-0" />
                    <span className="ml-3 text-gray-600">Compatible with most devices</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-500">
                  Available on all 2discus VPN plans
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-card p-6 fade-in-up" style={{ animationDelay: "200ms" }}>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-vpn-blue/10 flex items-center justify-center mr-3">
                    <Shield className="h-5 w-5 text-vpn-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-vpn-blue">Trojan Protocol</h3>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-vpn-green mt-1 flex-shrink-0" />
                    <span className="ml-3 text-gray-600">Highly secure encryption</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-vpn-green mt-1 flex-shrink-0" />
                    <span className="ml-3 text-gray-600">Disguises traffic as regular HTTPS</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-vpn-green mt-1 flex-shrink-0" />
                    <span className="ml-3 text-gray-600">Bypasses sophisticated DPI systems</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-vpn-green mt-1 flex-shrink-0" />
                    <span className="ml-3 text-gray-600">Ideal for restricted networks</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-500">
                  Available on Premium and Studio plans
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Compatible Devices */}
        <section className="section-padding bg-vpn-blue text-white">
          <div className="vpn-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg mb-4 fade-in">Works on All Your Devices</h2>
              <p className="text-blue-200 fade-in-up">
                2discus VPN is compatible with all major platforms and devices. Protect your entire digital life with one subscription.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
              <div className="fade-in-up" style={{ animationDelay: "0ms" }}>
                <div className="bg-white/10 rounded-lg p-4 mb-3 aspect-square flex items-center justify-center">
                  <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 13V11C21 7.13401 21 5.20101 19.899 3.98999C18.799 2.77899 16.866 2.77899 13 2.77899H11C7.13401 2.77899 5.20101 2.77899 3.98999 3.87899C2.77899 4.97899 2.77899 6.91199 2.77899 10.778V13C2.77899 16.866 2.77899 18.799 3.87899 20.01C4.97899 21.221 6.91199 21.221 10.778 21.221H13" stroke="#00FF88" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M8 2.77899V4.77899M16 2.77899V4.77899M2.77899 8.77899H21.221M19 19L21 21M21 19L19 21" stroke="#00FF88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-medium text-lg">Windows</h3>
              </div>
              
              <div className="fade-in-up" style={{ animationDelay: "100ms" }}>
                <div className="bg-white/10 rounded-lg p-4 mb-3 aspect-square flex items-center justify-center">
                  <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 7.5C19.1569 7.5 20.5 6.15685 20.5 4.5C20.5 2.84315 19.1569 1.5 17.5 1.5C15.8431 1.5 14.5 2.84315 14.5 4.5C14.5 6.15685 15.8431 7.5 17.5 7.5Z" stroke="#00FF88" strokeWidth="1.5" />
                    <path d="M6.5 13.5C8.15685 13.5 9.5 12.1569 9.5 10.5C9.5 8.84315 8.15685 7.5 6.5 7.5C4.84315 7.5 3.5 8.84315 3.5 10.5C3.5 12.1569 4.84315 13.5 6.5 13.5Z" stroke="#00FF88" strokeWidth="1.5" />
                    <path d="M17.5 22.5C19.1569 22.5 20.5 21.1569 20.5 19.5C20.5 17.8431 19.1569 16.5 17.5 16.5C15.8431 16.5 14.5 17.8431 14.5 19.5C14.5 21.1569 15.8431 22.5 17.5 22.5Z" stroke="#00FF88" strokeWidth="1.5" />
                    <path d="M9.5 12L14.5 18M9.5 9L14.5 3" stroke="#00FF88" strokeWidth="1.5" />
                  </svg>
                </div>
                <h3 className="font-medium text-lg">macOS</h3>
              </div>
              
              <div className="fade-in-up" style={{ animationDelay: "200ms" }}>
                <div className="bg-white/10 rounded-lg p-4 mb-3 aspect-square flex items-center justify-center">
                  <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.1445 13.5776C19.9359 15.1208 19.467 16.4922 18.8231 17.6675C18.0402 19.1308 17.0321 20.0764 15.8344 20.0764C15.0514 20.0764 14.0837 19.7859 13.2605 19.4953C12.3962 19.2048 11.6133 19.2048 10.7089 19.4953C9.84562 19.7859 8.87804 20.0764 8.09511 20.0764C7.1275 20.0764 6.28467 19.4953 5.54224 18.3772C4.13405 16.2845 2.96748 12.604 2.96748 9.11608C2.96748 7.86791 3.22536 6.74977 3.74217 5.80422C4.61551 4.17798 6.12253 3.15946 7.79988 3.15946C8.6237 3.15946 9.6983 3.48771 10.565 3.79069C11.4327 4.0934 12.1751 4.09366 13.0422 3.79069C13.9095 3.4877 14.9835 3.15946 15.8073 3.15946C17.2156 3.15946 18.5046 3.91343 19.3779 5.13634C17.1761 6.20433 16.246 9.28096 18.1148 11.4201C18.8578 12.2497 19.6407 12.8308 20.5 13.0642" stroke="#00FF88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-medium text-lg">iOS</h3>
              </div>
              
              <div className="fade-in-up" style={{ animationDelay: "300ms" }}>
                <div className="bg-white/10 rounded-lg p-4 mb-3 aspect-square flex items-center justify-center">
                  <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 22V2M19.5 22V2M8 8.5V15.5C8 16.0523 8.44772 16.5 9 16.5H15C15.5523 16.5 16 16.0523 16 15.5V8.5C16 7.94772 15.5523 7.5 15 7.5H9C8.44772 7.5 8 7.94772 8 8.5Z" stroke="#00FF88" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="font-medium text-lg">Android</h3>
              </div>
              
              <div className="fade-in-up" style={{ animationDelay: "400ms" }}>
                <div className="bg-white/10 rounded-lg p-4 mb-3 aspect-square flex items-center justify-center">
                  <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 9V22M12 9C12 5.13401 12 3.2 13.1005 2.1C14.201 1 16.133 1 20 1M12 9C12 5.13401 12 3.2 10.8995 2.1C9.799 1 7.867 1 4 1M12 22C8.134 22 6.202 22 5.1005 20.9C4 19.8 4 17.866 4 14V11M12 22C15.866 22 17.798 22 18.8995 20.9C20 19.8 20 17.866 20 14V11M4 11H20M9 15H15" stroke="#00FF88" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="font-medium text-lg">Linux</h3>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-vpn-green hover:bg-vpn-green/90 text-vpn-blue font-medium">
                <a 
                  href="https://top.2discus.cc" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center"
                >
                  Download For Your Device
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section id="pricing" className="section-padding">
          <div className="vpn-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg text-vpn-blue mb-4 fade-in">Simple, Transparent Pricing</h2>
              <p className="paragraph fade-in-up">
                Choose the plan that works best for you. All plans come with a 30-day money-back guarantee.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <PricingCard
                  key={index}
                  title={plan.title}
                  price={plan.price}
                  description={plan.description}
                  features={plan.features}
                  isPopular={plan.isPopular}
                  delay={index * 150}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="section-padding bg-vpn-gray">
          <div className="vpn-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg text-vpn-blue mb-4 fade-in">What Our Users Say</h2>
              <p className="paragraph fade-in-up">
                Join thousands of satisfied customers who trust 2discus VPN for their security and privacy needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-card fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <h3 className="font-bold text-vpn-blue">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="section-padding">
          <div className="vpn-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg text-vpn-blue mb-4 fade-in">Frequently Asked Questions</h2>
              <p className="paragraph fade-in-up">
                Find answers to common questions about 2discus VPN service.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto divide-y divide-gray-200">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="py-6 fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-xl font-bold text-vpn-blue mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild variant="outline" className="border-vpn-blue text-vpn-blue hover:bg-vpn-blue/5">
                <a href="/faq">View All FAQs</a>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Featured In Section */}
        <section className="py-12 bg-white border-t border-gray-100">
          <div className="vpn-container">
            <p className="text-center text-gray-500 mb-8 fade-in">As Featured In</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
              <div className="fade-in-up" style={{ animationDelay: "0ms" }}>
                <svg className="h-6 md:h-8 w-auto" viewBox="0 0 112 28" fill="#0F1A3D" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.68 27.288V11.92h5.488v15.368H8.68zm2.752-17.472c-1.792 0-3.192-1.376-3.192-3.128C8.24 4.904 9.64 3.56 11.432 3.56c1.76 0 3.192 1.344 3.192 3.128 0 1.752-1.432 3.128-3.192 3.128zm15.53 17.808c-4.904 0-8.184-3.528-8.184-8.808s3.28-8.808 8.184-8.808c4.936 0 8.216 3.528 8.216 8.808s-3.28 8.808-8.216 8.808zm0-4.088c2.368 0 3.84-1.888 3.84-4.72s-1.472-4.72-3.84-4.72c-2.336 0-3.808 1.888-3.808 4.72s1.472 4.72 3.808 4.72zm17.65 4.088c-4.904 0-8.184-3.528-8.184-8.808s3.28-8.808 8.184-8.808c4.936 0 8.216 3.528 8.216 8.808s-3.28 8.808-8.216 8.808zm0-4.088c2.368 0 3.84-1.888 3.84-4.72s-1.472-4.72-3.84-4.72c-2.336 0-3.808 1.888-3.808 4.72s1.472 4.72 3.808 4.72zm12.096 3.752V.616h5.488v26.672h-5.488zM73.125 27.288V11.92h5.487v15.368h-5.487zm2.752-17.472c-1.792 0-3.192-1.376-3.192-3.128 0-1.784 1.4-3.128 3.192-3.128 1.76 0 3.192 1.344 3.192 3.128 0 1.752-1.432 3.128-3.192 3.128zm15.153 17.472l-6.24-15.368h5.8l3.064 9.624 3.064-9.624h5.8l-6.24 15.368h-5.248z" />
                </svg>
              </div>
              <div className="fade-in-up" style={{ animationDelay: "100ms" }}>
                <svg className="h-5 md:h-7 w-auto" viewBox="0 0 145 33" fill="#0F1A3D" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 32.5V.5h10.244c5.009 0 7.6 3.436 7.6 6.822 0 3.386-2.264 5.693-4.528 6.238 2.591.545 5.13 3.327 5.13 6.822 0 3.93-2.806 7.105-7.6 7.105L0 32.5zm7.055-19.27h1.661c1.601 0 2.732-.742 2.732-2.226 0-1.485-1.13-2.227-2.732-2.227H7.055v4.453zm0 13.094h2.022c1.966 0 3.217-.997 3.217-2.68 0-1.742-1.31-2.68-3.217-2.68H7.055v5.36zm20.022-8.888V32.5h-6.63V11.092h6.329v2.255c1.189-1.683 3.112-2.65 5.557-2.65 4.201 0 6.48 2.907 6.48 7.36V32.5h-6.631V19.5c0-2.108-.965-3.228-2.655-3.228-1.661 0-2.45 1.09-2.45 3.168zM45.704 32.5h-6.631V11.092h6.63V32.5zm-3.308-24.428c-2.054 0-3.651-1.514-3.651-3.465 0-1.95 1.597-3.436 3.651-3.436 2.024 0 3.622 1.485 3.622 3.436 0 1.951-1.598 3.465-3.622 3.465zM61.926 32.5h-6.631V11.092h6.329v2.255c1.189-1.683 3.112-2.65 5.558-2.65 4.2 0 6.48 2.907 6.48 7.36V32.5h-6.631V19.5c0-2.108-.966-3.228-2.655-3.228-1.662 0-2.45 1.09-2.45 3.168V32.5zm29.628-10.732c0 6.238-4.648 11.127-10.969 11.127-6.39 0-11.039-4.89-11.039-11.127 0-6.238 4.649-11.07 11.039-11.07 6.32 0 10.969 4.832 10.969 11.07zm-6.873 0c0-3.04-1.783-5.03-4.096-5.03-2.343 0-4.096 1.99-4.096 5.03 0 3.04 1.753 5.088 4.096 5.088 2.313 0 4.096-2.048 4.096-5.088zm8.42 3.524V.5h6.63v24.883c0 1.03.483 1.544 1.13 1.544.331 0 .634-.06.965-.182l1.46 4.98c-.844.515-2.082.94-3.853.94-4.05 0-6.333-2.256-6.333-7.373zm20.354 7.603c-6.238 0-10.76-4.89-10.76-11.127 0-6.238 4.583-11.07 10.91-11.07 5.043 0 9.152 2.82 10.043 8.068l-6.238 1.426c-.422-2.048-1.782-3.624-3.717-3.624-2.299 0-3.985 1.99-3.985 5.2 0 3.2 1.686 5.22 3.985 5.22 1.935 0 3.295-1.574 3.747-3.622l6.208 1.455c-.89 5.188-5.069 8.073-10.193 8.073zm20.352 0c-6.268 0-10.97-4.92-10.97-11.127 0-6.238 4.702-11.07 10.97-11.07 6.329 0 10.969 4.832 10.969 11.07 0 6.237-4.701 11.127-10.969 11.127zm0-6.039c2.313 0 4.096-2.048 4.096-5.088 0-3.04-1.783-5.03-4.096-5.03-2.344 0-4.097 1.99-4.097 5.03 0 3.04 1.753 5.088 4.097 5.088z" />
                </svg>
              </div>
              <div className="fade-in-up" style={{ animationDelay: "200ms" }}>
                <svg className="h-8 md:h-10 w-auto" viewBox="0 0 119 32" fill="#0F1A3D" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32.694 8.431h3.147l5.115 13.449h.066l5.115-13.45h3.147v16.24h-2.478v-13.118h-.066l-4.911 13.117h-1.713l-4.911-13.117h-.067v13.118h-2.445v-16.24zm21.412 0h2.512v9.64c0 1.887 1.17 4.48 3.649 4.48 2.478 0 3.648-2.593 3.648-4.48v-9.64h2.512v9.97c0 3.692-2.31 6.602-6.16 6.602-3.85 0-6.16-2.91-6.16-6.602v-9.97zm18.732 0h2.445v14.292h7.459v1.948h-9.904V8.43zm15.384 0h10.396v1.948H90.7v5.507h7.492v1.948H90.7v5.889h7.962v1.948h-10.44V8.43zm16.36 0h2.512v14.292h7.458v1.948h-9.97V8.43zM19.04 7.894v3.84h3.84v-3.84h-3.84zm-7.678 0v3.84h3.839v-3.84h-3.84zm0 7.678v3.84h3.839v-3.84h-3.84zm0 7.678v3.84h3.839v-3.84h-3.84zm7.677 0v3.84h3.84v-3.84h-3.84zm0-11.517v3.84h3.84v-3.84h-3.84zm7.678 0v3.84h3.839v-3.84h-3.84zm0 7.678v3.84h3.839v-3.84h-3.84z" fillRule="evenodd" clipRule="evenodd" />
                </svg>
              </div>
              <div className="fade-in-up" style={{ animationDelay: "300ms" }}>
                <svg className="h-7 md:h-9 w-auto" viewBox="0 0 95 30" fill="#0F1A3D" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.71 22.64h-4.903V11.237h4.904v11.404zm-2.46-12.97c-1.607 0-2.683-1.076-2.683-2.46 0-1.383 1.076-2.457 2.684-2.457s2.683 1.074 2.683 2.458c0 1.383-1.076 2.459-2.683 2.459zM30.135 22.64h-5.01V16.8c0-2.033-.777-2.54-1.775-2.54-1.076 0-2.15.708-2.15 2.54v5.842h-4.904V11.237H21.2v1.806c.628-.977 1.85-2.113 3.81-2.113 2.227 0 5.123 1.305 5.123 5.844v5.865zm26.5-11.403h5.21l-5.672 13.264c-1.155 2.685-2.383 3.592-5.22 3.592-.448 0-.87-.029-1.292-.082v-4.096c.243.024.485.054.727.054.898 0 1.26-.21 1.552-.788l.269-.591-5.346-11.354h5.253l2.488 6.325 2.03-6.324zm-12.55 4.56c0-1.108-.824-1.633-1.648-1.633-1.105 0-1.726.797-1.845 1.633h3.494zm-8.472 2.5c0-4.247 2.9-7.366 7.002-7.366 4.078 0 6.622 3.023 6.622 7.693 0 .684-.054 1.137-.132 1.494H34.023c.216 1.46 1.294 2.15 2.633 2.15 1.079 0 1.827-.53 2.15-1.259l4.576 1.93c-1.156 2.517-3.527 4.042-6.796 4.042-4.715 0-7.974-3.096-7.974-8.684zm-19.68-2.5c0-1.108-.824-1.633-1.648-1.633-1.105 0-1.726.797-1.845 1.633h3.494zm-8.471 2.5c0-4.247 2.9-7.366 7.002-7.366 4.078 0 6.621 3.023 6.621 7.693 0 .684-.052 1.137-.13 1.494H5.87c.215 1.46 1.293 2.15 2.633 2.15 1.078 0 1.826-.53 2.15-1.259l4.576 1.93c-1.156 2.517-3.527 4.042-6.796 4.042-4.716 0-7.974-3.096-7.974-8.684z" />
                </svg>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="section-padding bg-vpn-blue text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-vpn-blue via-vpn-blue to-vpn-dark z-0"></div>
          <div className="vpn-container relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="heading-lg mb-6 fade-in">Ready to Experience True Online Privacy?</h2>
                <p className="text-blue-200 mb-8 fade-in-up">
                  Join thousands of satisfied users who trust 2discus VPN for their online security and privacy needs. With our 30-day money-back guarantee, you have nothing to lose and everything to gain.
                </p>
                <Button asChild size="lg" className="bg-vpn-green hover:bg-vpn-green/90 text-vpn-blue font-medium">
                  <a 
                    href="https://top.2discus.cc" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center"
                  >
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
              <div className="lg:w-1/3">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 fade-in-up">
                  <div className="mb-6">
                    <div className="w-12 h-12 flex items-center justify-center bg-vpn-green/20 rounded-full mb-4">
                      <Shield className="h-6 w-6 text-vpn-green" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">30-Day Money-Back Guarantee</h3>
                    <p className="text-blue-200">
                      Try 2discus VPN risk-free. If you're not completely satisfied, we'll refund your payment.
                    </p>
                  </div>
                  <div className="pt-6 border-t border-white/10">
                    <div className="flex items-center mb-4">
                      <Check className="h-5 w-5 text-vpn-green flex-shrink-0" />
                      <span className="ml-3">No activity logs</span>
                    </div>
                    <div className="flex items-center mb-4">
                      <Check className="h-5 w-5 text-vpn-green flex-shrink-0" />
                      <span className="ml-3">Unrestricted access</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-vpn-green flex-shrink-0" />
                      <span className="ml-3">24/7 customer support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
