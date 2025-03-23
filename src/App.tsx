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
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-2">Who We Are</h2>
            <h3 className="text-2xl font-bold mb-8 font-arabic">من نحن</h3>
            <p className="text-gray-600 max-w-3xl mx-auto mb-4">
              We are a charitable organization dedicated to providing healthcare services to neurology patients free of charge. Our mission extends to training medical staff in research and clinical skills.
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto font-arabic text-right">
              نحن منظمة خيرية تهدف إلى تقديم الخدمات الصحية لمرضى المخ و الاعصاب مجانا و درجت أيضا على تأهيل الكوادر الطبية في مجال البحث العلم و المهارات السريرية
            </p>
          </div>
        </div>
      </section>

      {/* Foundation Section */}
      <section id="foundation" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-2">Foundation</h2>
            <h3 className="text-2xl font-bold mb-8 font-arabic">تأسيس المجموعة</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-4">
                  Founded in 1995 by Professor Anshar Hussain, the group was named in honor of Professor Daoud Mustafa, a pioneering consultant in internal medicine and humanitarian care.
                </p>
              </div>
              <div>
                <p className="text-gray-600 font-arabic text-right">
                  أسست المجموعة عام ١٩٩٥ على يد البروفيسور أنشر حسين استشاري المخ و الاعصاب و سميت تيمنا بالبروفيسور داؤود مصطفى استشاري الباطنية الإنساني باعتبارها منظمة خيرية
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission-vision" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2">Our Mission</h2>
              <h3 className="text-2xl font-bold mb-8 font-arabic">الرسالة</h3>
              <p className="text-gray-600 mb-4">
                To build a healthy community with adequate healthcare needs, strong awareness, and trained medical staff.
              </p>
              <p className="text-gray-600 font-arabic text-center md:text-right">
                مجتمع صحي تتوفر به كافة الاحتياجات الصحية و يتمتع بقدر كبير من الوعي مع كوادر مؤهلة أكاديميا و ثقافيا و اداريا
              </p>
            </div>
            
            {/* Vision */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2">Our Vision</h2>
              <h3 className="text-2xl font-bold mb-8 font-arabic">الرؤية</h3>
              <p className="text-gray-600 mb-4">
                To inspire research among students and raise awareness about neurological diseases in society while eliminating misconceptions.
              </p>
              <p className="text-gray-600 font-arabic text-center md:text-right">
                اعلاء لروح البحث العلمي لدى الطلاب، وزيادة وعي الاهالي بماهية المرض العصبي ازالة كل المفاهيم الخاطئة التي تتعلق بها
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Epilepsy Day */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-purple-600 text-white p-4">
                <Calendar className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">Epilepsy Awareness Day</h3>
                <p className="text-sm opacity-90">March 26, 2024</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Join us for a comprehensive day of education, support, and community building for epilepsy patients and their families. Features expert talks and support group sessions.</p>
                <a href="#" className="inline-flex items-center text-purple-600 hover:text-purple-700">
                  Find out more <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>

            {/* Parkinson's Day */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-600 text-white p-4">
                <Calendar className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">Parkinson's Disease Day</h3>
                <p className="text-sm opacity-90">April 11, 2024</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Discover the latest treatments, therapies, and support systems for Parkinson's disease. Includes physical therapy demonstrations and medication management workshops.</p>
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                  Find out more <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>

            {/* PHEOCs Event */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-green-600 text-white p-4">
                <Calendar className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">PHEOCs & COVID-19</h3>
                <p className="text-sm opacity-90">May 15, 2024</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Join our comprehensive session on Public Health Emergency Operations Centres and COVID-19 Management strategies. Learn about emergency response protocols and community health measures.</p>
                <a href="#" className="inline-flex items-center text-green-600 hover:text-green-700">
                  Find out more <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Providing comprehensive healthcare services through our mobile clinics, specialized care programs, and educational initiatives.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Mobile Clinics */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="bg-blue-100 rounded-full p-6 inline-block mb-4">
                <Stethoscope className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Mobile Clinics</h3>
              <p className="text-gray-600 mb-4">Free medical services through our mobile charity clinics across Sudan, reaching remote areas and underserved communities.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• General health checkups</li>
                <li>• Neurological assessments</li>
                <li>• Medication distribution</li>
                <li>• Follow-up care planning</li>
              </ul>
            </div>

            {/* Neurological Care */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="bg-purple-100 rounded-full p-6 inline-block mb-4">
                <Brain className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Neurological Care</h3>
              <p className="text-gray-600 mb-4">Specialized care and treatment for various neurological conditions, provided by experienced specialists.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Epilepsy management</li>
                <li>• Parkinson's treatment</li>
                <li>• Stroke rehabilitation</li>
                <li>• Headache clinics</li>
              </ul>
            </div>

            {/* Health Education */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="bg-green-100 rounded-full p-6 inline-block mb-4">
                <Presentation className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Health Education</h3>
              <p className="text-gray-600 mb-4">Comprehensive community awareness programs and health education initiatives.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Public health workshops</li>
                <li>• Disease prevention</li>
                <li>• Lifestyle counseling</li>
                <li>• Family health education</li>
              </ul>
            </div>

            {/* Medical Research */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="bg-red-100 rounded-full p-6 inline-block mb-4">
                <Activity className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Medical Research</h3>
              <p className="text-gray-600 mb-4">Advancing medical knowledge through research and clinical studies in neurology.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Clinical trials</li>
                <li>• Research publications</li>
                <li>• Student mentorship</li>
                <li>• International collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Training Programs</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Developing the next generation of medical professionals through comprehensive training programs.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <GraduationCap className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Medical Students</h3>
              <p className="text-gray-600">Hands-on clinical experience and research opportunities for medical students.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Healthcare Staff</h3>
              <p className="text-gray-600">Professional development programs for practicing healthcare workers.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <BookOpen className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Research Fellows</h3>
              <p className="text-gray-600">Advanced research training and mentorship opportunities.</p>
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
                <li><a href="#" className="hover:text-[#00B7FF] transition-colors">EVENTS</a></li>
                <li><a href="#" className="hover:text-[#00B7FF] transition-colors">TRAINING</a></li>
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