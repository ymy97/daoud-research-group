import React from 'react';
import { 
  Microscope, Users, BookOpen, HeartPulse, ChevronDown, Facebook, 
  Twitter, Instagram, Youtube, Send, Phone, Mail, MapPin, Calendar, 
  ArrowRight, Stethoscope, Brain, Heart, Activity, GraduationCap,
  Presentation, UserPlus, Clock, Building2, HandHeart
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Microscope className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-semibold">Daoud Research Group</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#join" className="hover:text-blue-600 transition">Join Us</a>
              <a href="#services" className="hover:text-blue-600 transition">Services</a>
              <a href="#about" className="hover:text-blue-600 transition">About Us</a>
              <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen pt-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&auto=format&fit=crop&w=2091&q=80"
            alt="Medical Research Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-center py-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Daoud Mobile Charity Clinic
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 font-arabic">
              عيادة داؤود المتنقلة الخيرية
            </h2>
            <p className="text-xl text-gray-200 mb-4">
              Madani - February 23, 2018
            </p>
            <p className="text-xl text-gray-200 mb-8 font-arabic">
              مدني - ٢٣ فبراير ٢٠١٨
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
                Join Us
              </button>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition">
                Donate Now
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <ChevronDown className="h-8 w-8 text-white animate-bounce" />
        </div>
      </header>

      {/* Statistics Section */}
      <section className="py-12 bg-blue-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            <div>
              <UserPlus className="h-8 w-8 mx-auto mb-2" />
              <div className="text-3xl font-bold mb-1">15,000+</div>
              <div className="text-sm opacity-80">Patients Served</div>
            </div>
            <div>
              <Building2 className="h-8 w-8 mx-auto mb-2" />
              <div className="text-3xl font-bold mb-1">25+</div>
              <div className="text-sm opacity-80">Mobile Clinics</div>
            </div>
            <div>
              <GraduationCap className="h-8 w-8 mx-auto mb-2" />
              <div className="text-3xl font-bold mb-1">500+</div>
              <div className="text-sm opacity-80">Medical Staff Trained</div>
            </div>
            <div>
              <HandHeart className="h-8 w-8 mx-auto mb-2" />
              <div className="text-3xl font-bold mb-1">28</div>
              <div className="text-sm opacity-80">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of your App component code */}
      {/* ... */}
      
      {/* Footer */}
      <footer className="bg-[#020B2D] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-8">
            {/* Logo Section - 3 columns */}
            <div className="md:col-span-3 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <Microscope className="h-16 w-16 text-[#00B7FF]" />
              </div>
              <h2 className="text-2xl font-bold text-[#00B7FF]">DAOUD</h2>
              <p className="text-white">RESEARCH GROUP</p>
            </div>

            {/* Social Media Icons - 3 columns */}
            <div className="md:col-span-3 text-center md:text-left">
              <h3 className="text-xl font-bold mb-6">Follow Us</h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a href="#" className="bg-white p-3 rounded-full hover:bg-[#00B7FF] transition-colors">
                  <Facebook className="h-6 w-6 text-[#020B2D]" />
                </a>
                <a href="#" className="bg-white p-3 rounded-full hover:bg-[#00B7FF] transition-colors">
                  <Twitter className="h-6 w-6 text-[#020B2D]" />
                </a>
                <a href="#" className="bg-white p-3 rounded-full hover:bg-[#00B7FF] transition-colors">
                  <Youtube className="h-6 w-6 text-[#020B2D]" />
                </a>
                <a href="#" className="bg-white p-3 rounded-full hover:bg-[#00B7FF] transition-colors">
                  <Instagram className="h-6 w-6 text-[#020B2D]" />
                </a>
                <a href="#" className="bg-white p-3 rounded-full hover:bg-[#00B7FF] transition-colors">
                  <Send className="h-6 w-6 text-[#020B2D]" />
                </a>
              </div>
            </div>

            {/* Useful Links - 3 columns */}
            <div className="md:col-span-3 text-center md:text-left">
              <h3 className="text-xl font-bold mb-6">Useful Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-[#00B7FF] transition-colors">HOME</a></li>
                <li><a href="#" className="hover:text-[#00B7FF] transition-colors">SERVICES</a></li>
                <li><a href="#" className="hover:text-[#00B7FF] transition-colors">CONTACT</a></li>
                <li><a href="#" className="hover:text-[#00B7FF] transition-colors">ABOUT US</a></li>
              </ul>
            </div>

            {/* Contact - 3 columns */}
            <div className="md:col-span-3 text-center md:text-left">
              <h3 className="text-xl font-bold mb-6">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-center md:justify-start space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>Banat Gharb, Omdurman, Sudan</span>
                </li>
                <li className="flex items-center justify-center md:justify-start space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>+249 110105944</span>
                </li>
                <li className="flex items-center justify-center md:justify-start space-x-2">
                  <Mail className="h-5 w-5" />
                  <span>DaoudRG@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App; 