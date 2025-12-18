import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, BookOpen, FileText, Calendar, Briefcase, ChevronRight, Award, Users, Activity, Zap } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import ImageSlider from '../components/ImageSlider';
import NewsTicker from '../components/NewsTicker';
import SEO from '../components/SEO';
import QuickAccessBar from '../components/QuickAccessBar';
import HomePopup from '../components/HomePopup';
import TestimonialCarousel from '../components/TestimonialCarousel';
import CountUp from '../components/CountUp';
import { useScrollAnimation } from '../lib/useScrollAnimation';
import { ServiceItem, SlideItem, NewsItem, Testimonial } from '../types';

const IMAGES = {
  slider1: "https://images.unsplash.com/photo-1668198991378-59ee7fdd264a?auto=format&fit=crop&q=80",
  slider2: "https://images.unsplash.com/photo-1717386255773-1e3037c81788?auto=format&fit=crop&q=80",
  slider3: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80",
  feature: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80",
  serviceCalibration: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80",
  serviceTesting: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80",
  serviceToolRoom: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&q=80",
  service3D: "https://images.unsplash.com/photo-1597739239353-50270a473397?auto=format&fit=crop&q=80",
};

const INITIAL_SLIDES: SlideItem[] = [
  { 
    id: 's1', 
    image: IMAGES.slider1, 
    title: 'Excellence in Calibration & Testing', 
    subtitle: 'Empowering Indian Industry with world-class technical services and precision measurement.', 
    ctaText: 'Explore Services', 
    ctaLink: '/services' 
  },
  { 
    id: 's2', 
    image: IMAGES.slider2, 
    title: 'Advanced Manufacturing Hub', 
    subtitle: 'State-of-the-art Tool Room, CNC Machining, and 3D Printing facilities.', 
    ctaText: 'View Capabilities', 
    ctaLink: '/services/tool-room' 
  },
  { 
    id: 's3', 
    image: IMAGES.slider3, 
    title: 'Skill Development Programs', 
    subtitle: 'Job-oriented training in Automation, CAD/CAM, and ESDM for future-ready careers.', 
    ctaText: 'Find Courses', 
    ctaLink: '/training' 
  }
];

const INITIAL_NEWS: NewsItem[] = [
  { id: 'n1', date: 'New', title: 'BARC RT2- 97th Batch Announcement', summary: '', link: '/downloads/notifications' },
  { id: 'n2', date: 'Oct 2024', title: 'AICTE 2025 - Third Merit List - Tool & Die Making', summary: '', link: `/view-document?url=https://idemi.org/assets/downloads/EC%20Blr%20Newspaper%20Ad%20A5%20Size.pdf&title=AICTE 2025 - Third Merit List` }
];

const INITIAL_STATS = [
  { value: 56, suffix: '+', label: "Years of Excellence" },
  { value: 15000, suffix: '+', label: "Students Trained/Yr" },
  { value: 25000, suffix: '+', label: "Instruments Calibrated" },
  { value: 50, suffix: '+', label: "R&D Projects" }
];

const STAT_ICONS = [
  <Award key="i1" size={32} className="text-secondary dark:text-amber-500 mb-3 mx-auto" />,
  <Users key="i2" size={32} className="text-primary dark:text-blue-400 mb-3 mx-auto" />,
  <Activity key="i3" size={32} className="text-green-600 dark:text-green-400 mb-3 mx-auto" />,
  <Zap key="i4" size={32} className="text-purple-600 dark:text-purple-400 mb-3 mx-auto" />
];

const TESTIMONIALS: Testimonial[] = [
  { id: 't1', name: 'Rahul Sharma', role: 'Alumni, Tool & Die Making', content: 'The practical exposure at IDEMI is unmatched. The training helped me secure a job immediately.' },
  { id: 't2', name: 'Mr. R. K. Gupta', role: 'Quality Manager', content: 'We rely on IDEMI for our instrument calibration needs. Their NABL lab ensures high precision standards.' }
];

const SERVICES_PREVIEW: ServiceItem[] = [
  { id: '1', title: 'Calibration Services', slug: 'calibration', description: 'NABL accredited calibration for Electrical, Thermal, and Mechanical parameters.', iconName: 'Scale', image: IMAGES.serviceCalibration, tags: ['NABL', 'ISO 17025'] },
  { id: '2', title: 'Testing Services', slug: 'testing', description: 'High-quality testing for electrical and electronic instruments.', iconName: 'Activity', image: IMAGES.serviceTesting, tags: ['EMI/EMC', 'Safety'] },
  { id: '3', title: 'Tool Room Services', slug: 'tool-room', description: 'Design and manufacturing of Press Tools, Moulds, and Dies.', iconName: 'Wrench', image: IMAGES.serviceToolRoom, tags: ['5-Axis CNC', 'EDM'] },
  { id: '4', title: '3D Printing', slug: 'eos-formiga', description: 'Rapid prototyping using advanced SLS technology.', iconName: 'Printer', image: IMAGES.service3D, tags: ['SLS', 'PA12'] }
];

const Home: React.FC = () => {
  const { refreshObserver } = useScrollAnimation();
  
  useEffect(() => {
    refreshObserver();
  }, [refreshObserver]);

  return (
    <>
      <SEO 
        seo={{ 
          title: 'IDEMI Mumbai | MSME Technology Centre | Government of India Society', 
          description: 'Premier MSME Technology Centre offering Calibration, Testing, Tool Room Services, and AICTE Technical Training.',
          schemaType: 'Organization'
        }} 
        path="/" 
      />
      
      <div className="shadow-2xl relative z-20">
        <ImageSlider slides={INITIAL_SLIDES} />
      </div>

      <NewsTicker news={INITIAL_NEWS} />
      <QuickAccessBar />
      <HomePopup />

      {/* Key Statistics */}
      <section className="py-20 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 relative z-10 mesh-gradient">
        <div className="container mx-auto px-4">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700 overflow-hidden reveal-on-scroll">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100 dark:divide-gray-700">
              {INITIAL_STATS.map((stat, index) => (
                <div key={index} className="p-10 flex flex-col items-center justify-center hover:bg-white/50 dark:hover:bg-white/5 transition-colors group">
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {STAT_ICONS[index]}
                  </div>
                  <div className="text-5xl font-black text-gray-900 dark:text-white mb-2 tracking-tighter">
                    <CountUp end={stat.value} suffix={stat.suffix} duration={2000} />
                  </div>
                  <div className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-[0.2em]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 bg-gray-50 dark:bg-gray-950 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 reveal-on-scroll">
            <span className="inline-block text-secondary font-bold uppercase tracking-widest text-xs mb-3 bg-secondary/10 px-3 py-1 rounded-full">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">Core Technical Services</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Global-standard solutions for measurement, testing, and advanced manufacturing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES_PREVIEW.map((service, index) => (
                <div key={service.id} className={`reveal-on-scroll stagger-${(index % 4) + 1}`}>
                    <Link to={`/services/${service.slug}`} className="h-full block transition-transform duration-300 hover:-translate-y-2">
                        <ServiceCard service={service} />
                    </Link>
                </div>
            ))}
          </div>

          <div className="text-center mt-16 reveal-on-scroll">
            <Link 
              to="/services" 
              className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-white font-bold rounded-full hover:bg-blue-800 transition-all shadow-xl hover:shadow-primary/20 transform hover:scale-105 active:scale-95"
            >
              View Full Service Catalog <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contributors/Projects */}
      <section className="py-24 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-20">
          <div className="md:w-1/2 reveal-on-scroll">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src={IMAGES.feature}
                alt="ISRO Chandrayaan Contribution" 
                className="relative rounded-2xl shadow-2xl object-cover h-[500px] w-full"
              />
            </div>
          </div>
          <div className="md:w-1/2 reveal-on-scroll stagger-1">
            <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 block">National Significance</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 leading-tight tracking-tight">Contributing to India's Moon Mission</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed text-lg">
              IDEMI takes immense pride in contributing critical components for the CE20 cryogenic engine used in ISRO's GSLV Mk III launch vehicles for Chandrayaan missions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Aerospace Design', 'Precision Machining', 'R&D Innovation', 'Quality Assurance'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700">
                        <CheckCircle className="text-green-500" size={20} />
                        <span className="font-bold text-gray-800 dark:text-gray-200 text-sm">{item}</span>
                    </div>
                ))}
            </div>
            <div className="mt-10">
                <Link to="/past_performance" className="text-primary dark:text-blue-400 font-bold hover:underline flex items-center gap-2">
                    Learn about more national projects <ArrowRight size={18} />
                </Link>
            </div>
          </div>
        </div>
      </section>

      <TestimonialCarousel testimonials={TESTIMONIALS} />
    </>
  );
};

export default Home;
