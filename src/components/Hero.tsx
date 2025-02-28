
import { Button } from "@/components/ui/button";
import { Shield, Lock, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-vpn-gray/50 to-white z-[-1]" />
      
      <div className="vpn-container">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vpn-blue/5 text-vpn-blue text-sm font-medium">
            <Shield size={16} className="text-vpn-green" />
            <span>Secure & Private VPN Service</span>
          </div>
          
          <h1 className="heading-xl mb-6 text-vpn-blue fade-in">
            Secure Internet Access <br />
            <span className="text-vpn-green">Anywhere in the World</span>
          </h1>
          
          <p className="paragraph max-w-2xl mb-8 fade-in-up">
            Experience borderless internet with 2discus VPN—100+ servers in 10+ countries, military-grade encryption, and 24/7 support. Start your network freedom today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button asChild size="lg" className="bg-vpn-blue hover:bg-vpn-blue/90 text-white shadow-md">
              <a 
                href="https://top.2discus.cc" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Download Now
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-vpn-blue text-vpn-blue hover:bg-vpn-blue/5">
              <a href="#pricing">See All Plans</a>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl mx-auto" style={{ animationDelay: "0.4s" }}>
            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-card card-hover">
              <div className="w-12 h-12 flex items-center justify-center bg-vpn-blue/10 rounded-full mb-4">
                <Shield className="h-6 w-6 text-vpn-blue" />
              </div>
              <h3 className="font-bold mb-2">100% Secure</h3>
              <p className="text-sm text-gray-500 text-center">Military-grade encryption for complete security</p>
            </div>
            
            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-card card-hover">
              <div className="w-12 h-12 flex items-center justify-center bg-vpn-blue/10 rounded-full mb-4">
                <Lock className="h-6 w-6 text-vpn-blue" />
              </div>
              <h3 className="font-bold mb-2">No Logs Policy</h3>
              <p className="text-sm text-gray-500 text-center">Your activities are never tracked or stored</p>
            </div>
            
            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-card card-hover">
              <div className="w-12 h-12 flex items-center justify-center bg-vpn-blue/10 rounded-full mb-4">
                <Globe className="h-6 w-6 text-vpn-blue" />
              </div>
              <h3 className="font-bold mb-2">Global Access</h3>
              <p className="text-sm text-gray-500 text-center">100+ servers across 10+ countries worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
