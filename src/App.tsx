import React from 'react';
import { 
  Microscope, Users, BookOpen, HeartPulse, ChevronDown, Facebook, 
  Twitter, Instagram, Youtube, Send, Phone, Mail, MapPin, Calendar, 
  ArrowRight, Stethoscope, Brain, Heart, Activity, GraduationCap,
  Presentation, UserPlus, Clock, Building2, HandHeart, Globe, Bookmark
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
      <header className="relative min-h-screen pt-16 bg-gradient-to-b from-blue-900 to-blue-700">
        <div className="absolute inset-0">
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
      
      {/* Who We Are Section */}
      <section id="who-we-are" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who We Are</h2>
            <h3 className="text-xl font-bold text-gray-700 mb-8 font-arabic">من نحن</h3>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              We are a charitable organization dedicated to providing healthcare services to neurology patients free of
              charge. Our mission extends to training medical staff in research and clinical skills.
            </p>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-arabic">
              نحن منظمة خيرية تهدف إلى تقديم الخدمات الصحية لمرضى المخ و الاعصاب مجاناً و درجت أيضاً من أجل تأهيل الكوادر الطبية في مجال البحث العلمي و المهارات السريرية
            </p>
          </div>
        </div>
      </section>
      
      {/* Foundation Section */}
      <section id="foundation" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Foundation</h2>
            <h3 className="text-xl font-bold text-gray-700 mb-8 font-arabic">تأسيس المجموعة</h3>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Founded in 1995 by Professor Anshar Hussain, the group was named in honor of
              Professor Daoud Mustafa, a pioneering consultant in internal medicine and
              humanitarian care.
            </p>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-arabic">
              أُسست المجموعة عام ١٩٩٥ م علي يد البروفيسور أنشار حسين ، استشاري المخ و الاعصاب و سميت تيمناً بالبروفيسور
              داؤود مصطفى استشاري الباطنية الإنساني باعتباره منظمة خيرية
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The Daoud Mobile Charity Clinic provides essential healthcare services to underserved communities across Sudan.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Stethoscope className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Primary Care</h3>
              <p className="text-gray-600">
                Comprehensive primary care services including consultations, diagnostics, and treatments for common illnesses and injuries.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Preventive Care</h3>
              <p className="text-gray-600">
                Health screenings, vaccinations, and educational programs focused on disease prevention and health promotion.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Mental Health</h3>
              <p className="text-gray-600">
                Psychological support services, counseling, and therapy for individuals experiencing mental health challenges.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Events Section */}
      <section id="events" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join us at our upcoming events to learn more about our work and how you can get involved.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <Calendar className="h-10 w-10 text-blue-600 mr-4" />
                <div>
                  <h3 className="text-xl font-bold">Community Health Fair</h3>
                  <p className="text-gray-500">August 15, 2024 • Khartoum</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Join us for a day of free health screenings, educational workshops, and family activities focused on community wellness.
              </p>
              <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                Learn more <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <Calendar className="h-10 w-10 text-blue-600 mr-4" />
                <div>
                  <h3 className="text-xl font-bold">Medical Volunteer Training</h3>
                  <p className="text-gray-500">September 5, 2024 • Omdurman</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Comprehensive training for medical professionals interested in volunteering with our mobile clinic initiatives.
              </p>
              <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                Learn more <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Training Programs Section */}
      <section id="training" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Training Programs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer specialized training programs for healthcare professionals to enhance their skills and knowledge.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Presentation className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Clinical Skills Workshop</h3>
              <p className="text-gray-600">
                Intensive hands-on training focused on essential clinical skills for healthcare practitioners in resource-limited settings.
              </p>
              <div className="flex items-center mt-4 text-gray-500">
                <Clock className="h-4 w-4 mr-2" /> 
                <span>3-day program</span>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Community Health Education</h3>
              <p className="text-gray-600">
                Training program for community health workers focused on preventive care, health education, and community engagement.
              </p>
              <div className="flex items-center mt-4 text-gray-500">
                <Clock className="h-4 w-4 mr-2" /> 
                <span>2-week program</span>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Global Health Leadership</h3>
              <p className="text-gray-600">
                Advanced program for healthcare professionals focused on leadership, management, and innovation in global health contexts.
              </p>
              <div className="flex items-center mt-4 text-gray-500">
                <Clock className="h-4 w-4 mr-2" /> 
                <span>1-month program</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Us</h2>
              <p className="text-lg text-gray-600 mb-6">
                The Daoud Mobile Charity Clinic was established in 2018 with a mission to provide quality healthcare services to underserved communities across Sudan. Our mobile clinics bring essential medical care to areas with limited access to healthcare facilities.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team consists of dedicated medical professionals, volunteers, and support staff who are committed to improving health outcomes and enhancing quality of life for vulnerable populations.
              </p>
              <p className="text-lg text-gray-600">
                Through our services, training programs, and community engagement initiatives, we strive to build healthier communities and strengthen local healthcare capacity.
              </p>
            </div>
            <div className="bg-blue-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="mb-8">
                To provide accessible, quality healthcare services to underserved communities and to strengthen local healthcare capacity through education and training.
              </p>
              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              <p>
                A Sudan where all communities have access to quality healthcare services and where local healthcare systems are robust, sustainable, and responsive to community needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      
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
                <li><a href="#services" className="hover:text-[#00B7FF] transition-colors">SERVICES</a></li>
                <li><a href="#events" className="hover:text-[#00B7FF] transition-colors">EVENTS</a></li>
                <li><a href="#training" className="hover:text-[#00B7FF] transition-colors">TRAINING</a></li>
                <li><a href="#about" className="hover:text-[#00B7FF] transition-colors">ABOUT US</a></li>
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