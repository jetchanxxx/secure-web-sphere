
import { Shield, Lock, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-vpn-gray">
          <div className="vpn-container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vpn-blue/5 text-vpn-blue text-sm font-medium">
                <Shield size={16} className="text-vpn-green" />
                <span>About 2discus.cc</span>
              </div>
              <h1 className="heading-xl mb-6 text-vpn-blue fade-in">
                Defending Your <span className="text-vpn-green">Digital Freedom</span>
              </h1>
              <p className="paragraph max-w-2xl mx-auto mb-8 fade-in-up">
                Learn about our mission to protect your online privacy and provide secure internet access anywhere in the world.
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="section-padding">
          <div className="vpn-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="fade-in-up">
                <h2 className="heading-lg text-vpn-blue mb-6">Our Mission & Vision</h2>
                <p className="paragraph mb-6">
                  Founded in 2022, 2discus.cc was created with a clear mission: to protect digital freedom and ensure secure internet access for users around the globe.
                </p>
                <p className="paragraph mb-6">
                  We believe that privacy is a fundamental right, not a privilege. In an era of increasing surveillance and data collection, our team is committed to providing tools that empower users to take control of their online presence.
                </p>
                <p className="paragraph">
                  Our vision is a world where everyone can access information freely and securely, without fear of monitoring, censorship, or data exploitation.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-vpn-green/10 rounded-full z-0"></div>
                <div className="relative z-10 bg-white rounded-xl shadow-card overflow-hidden fade-in-up">
                  <div className="bg-vpn-blue p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Core Values</h3>
                    <p className="text-blue-200 text-sm">What drives everything we do</p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-5">
                      <div className="flex items-start">
                        <div className="w-10 h-10 flex-shrink-0 rounded-full bg-vpn-blue/10 flex items-center justify-center mr-4">
                          <Shield className="h-5 w-5 text-vpn-blue" />
                        </div>
                        <div>
                          <h4 className="font-bold text-vpn-blue mb-1">Privacy First</h4>
                          <p className="text-gray-600 text-sm">We never track, store, or share your activities online.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-10 h-10 flex-shrink-0 rounded-full bg-vpn-blue/10 flex items-center justify-center mr-4">
                          <Lock className="h-5 w-5 text-vpn-blue" />
                        </div>
                        <div>
                          <h4 className="font-bold text-vpn-blue mb-1">Transparency</h4>
                          <p className="text-gray-600 text-sm">We're clear about how our service works and what data we use.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-10 h-10 flex-shrink-0 rounded-full bg-vpn-blue/10 flex items-center justify-center mr-4">
                          <Globe className="h-5 w-5 text-vpn-blue" />
                        </div>
                        <div>
                          <h4 className="font-bold text-vpn-blue mb-1">Fighting Censorship</h4>
                          <p className="text-gray-600 text-sm">We believe in an open internet without restrictions.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Server Coverage */}
        <section className="section-padding bg-vpn-gray">
          <div className="vpn-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg text-vpn-blue mb-4 fade-in">Global Server Coverage</h2>
              <p className="paragraph fade-in-up">
                Our network spans the globe with over 100 servers across more than 10 countries, ensuring fast and reliable connections wherever you are.
              </p>
            </div>
            
            <div className="relative rounded-xl overflow-hidden bg-white shadow-card fade-in-up">
              <div className="aspect-[16/9] bg-vpn-blue p-8 relative">
                {/* World map visualization - simplified for this example */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="640" height="320" viewBox="0 0 640 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-20">
                    <path d="M68.8 192L0 224V192L32 176L64 128L112 112L128 128L144 112H176L192 96L240 80L272 96L288 80L320 64H352L384 80L400 64L432 80L448 64L480 80L496 64L528 80L544 64L576 80V112L608 128L640 176V240L608 272L576 288L544 272L528 288L496 272L480 288L448 272L432 288L400 272L384 288L352 272L336 288L304 272L288 256L256 272L224 256L192 272L160 256L128 272L96 256L80 272L48 256L16 272L0 256V224L32 208L48 192H68.8Z" fill="#fff"/>
                    <circle cx="400" cy="150" r="5" fill="#00FF88" />
                    <circle cx="350" cy="180" r="5" fill="#00FF88" />
                    <circle cx="300" cy="140" r="5" fill="#00FF88" />
                    <circle cx="250" cy="160" r="5" fill="#00FF88" />
                    <circle cx="450" cy="170" r="5" fill="#00FF88" />
                    <circle cx="150" cy="150" r="5" fill="#00FF88" />
                    <circle cx="500" cy="140" r="5" fill="#00FF88" />
                    <circle cx="200" cy="170" r="5" fill="#00FF88" />
                    <circle cx="550" cy="180" r="5" fill="#00FF88" />
                    <circle cx="100" cy="160" r="5" fill="#00FF88" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.1)_0%,rgba(15,26,61,0)_70%)]"></div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-vpn-blue">100+</div>
                  <p className="text-gray-600">Servers</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-vpn-blue">10+</div>
                  <p className="text-gray-600">Countries</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-vpn-blue">99.9%</div>
                  <p className="text-gray-600">Uptime</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-vpn-blue">24/7</div>
                  <p className="text-gray-600">Support</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-vpn-green">0</div>
                  <p className="text-gray-600">Logs Kept</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* How We're Different */}
        <section className="section-padding">
          <div className="vpn-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg text-vpn-blue mb-4 fade-in">What Makes Us Different</h2>
              <p className="paragraph fade-in-up">
                At 2discus.cc, we stand out from other VPN providers through our unwavering commitment to privacy, performance, and user experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-card fade-in-up" style={{ animationDelay: "0ms" }}>
                <div className="w-12 h-12 flex items-center justify-center bg-vpn-blue/10 rounded-full mb-6">
                  <Shield className="h-6 w-6 text-vpn-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-vpn-blue">Strict No-Logs Policy</h3>
                <p className="text-gray-600">
                  We don't just say we don't keep logs—we've engineered our system so it's technically impossible for us to track your online activities. Your privacy is guaranteed by design.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-card fade-in-up" style={{ animationDelay: "150ms" }}>
                <div className="w-12 h-12 flex items-center justify-center bg-vpn-blue/10 rounded-full mb-6">
                  <Lock className="h-6 w-6 text-vpn-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-vpn-blue">Advanced Protocols</h3>
                <p className="text-gray-600">
                  Our support for modern protocols like Vless and Trojan ensures your connection remains secure even in restrictive environments, without sacrificing speed.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-card fade-in-up" style={{ animationDelay: "300ms" }}>
                <div className="w-12 h-12 flex items-center justify-center bg-vpn-blue/10 rounded-full mb-6">
                  <Globe className="h-6 w-6 text-vpn-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-vpn-blue">China-Optimized Servers</h3>
                <p className="text-gray-600">
                  Our specialized server infrastructure is specifically designed to work reliably in regions with heavy internet restrictions, including China.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="section-padding bg-vpn-blue text-white">
          <div className="vpn-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-lg mb-6 fade-in">Join Our Mission Today</h2>
              <p className="text-blue-200 mb-8 max-w-2xl mx-auto fade-in-up">
                Experience 2discus VPN and join thousands of users worldwide who value their privacy and digital freedom. With our 30-day money-back guarantee, you can try our service risk-free.
              </p>
              <div className="inline-block">
                <a 
                  href="https://top.2discus.cc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-vpn-green hover:bg-vpn-green/90 text-vpn-blue px-8 py-4 rounded-lg font-medium shadow-lg transition-all inline-block"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
