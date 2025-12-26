
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import InfoSidebar from '../components/InfoSidebar';
import { 
  Shield, 
  Lock, 
  Info, 
  Eye, 
  Database, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowLeft, 
  CheckCircle,
  FileText,
  User,
  UserCheck,
  Server,
  ShieldCheck,
  ChevronRight,
  Building2,
  Zap,
  ArrowUpRight,
  Share2,
  Trash2,
  AlertTriangle
} from 'lucide-react';
import { useScrollAnimation } from '../lib/useScrollAnimation';

const PrivacyPolicy: React.FC = () => {
  useScrollAnimation();
  const location = useLocation();

  const definitions = [
    { term: 'You', def: 'The individual accessing the Service, or the company/legal entity on whose behalf they act.', icon: <UserCheck size={18}/> },
    { term: 'Company', def: 'Institute for Design of Electrical Measuring Instruments, Swatantryaveer Tatya Tope Marg, Chunabhatti, Sion, Mumbai - 400 022 INDIA.', icon: <Building2 size={18}/> },
    { term: 'Website', def: 'IDEMI, accessible from official portal.', icon: <Globe size={18}/> },
    { term: 'Service', def: 'The IDEMI Website and digital platforms.', icon: <Zap size={18}/> },
    { term: 'Personal Data', def: 'Information relating to an identified or identifiable individual.', icon: <FileText size={18}/> },
    { term: 'Usage Data', def: 'Data collected automatically, such as page visit duration and technical logs.', icon: <Database size={18}/> }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO 
        seo={{ 
          title: 'Privacy Policy | IDEMI Mumbai', 
          description: 'Official Privacy Policy for IDEMI. Learn how we collect, use, and protect your personal data.',
          keywords: ['Privacy Policy', 'Data Protection', 'IDEMI Mumbai', 'Cookies Policy'],
          schemaType: 'Article'
        }} 
        path={location.pathname} 
      />
      
      {/* Reduced Height Hero Header */}
      <div className="bg-primary text-white py-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-md rounded-2xl mb-3 border border-white/20">
                <Shield size={28} className="text-blue-200" />
            </div>
            <h1 className="text-3xl md:text-5xl font-black mb-1 tracking-tight uppercase">Privacy Policy</h1>
            <p className="text-blue-100 text-xs font-bold uppercase tracking-widest opacity-80">Institutional Data Protection Standards</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Sticky Sidebar */}
        <aside className="lg:w-1/4">
            <div className="sticky top-40">
                <InfoSidebar />
            </div>
        </aside>

        {/* Main Content Area */}
        <div className="lg:w-3/4">
            <Link to="/" className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-secondary transition-colors mb-6 group">
                <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
            </Link>

            <div className="bg-white dark:bg-gray-800 p-6 md:p-10 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 reveal-on-scroll relative overflow-hidden">
                {/* Intro */}
                <div className="mb-8">
                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-200 font-medium border-l-4 border-secondary pl-6 leading-relaxed">
                        This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You. We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
                    </p>
                </div>

                {/* Section: Definitions */}
                <div id="interpretation" className="scroll-mt-32 mb-10">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-100 dark:border-blue-800">
                            <Info className="text-primary dark:text-blue-400" size={20} />
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white m-0 uppercase tracking-tight">Interpretation & Definitions</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {definitions.map((item, idx) => (
                            <div key={idx} className="p-5 bg-gray-50 dark:bg-gray-700/30 rounded-2xl border border-gray-100 dark:border-gray-600 hover:border-secondary hover:bg-secondary/5 hover:shadow-lg transition-all duration-300 group cursor-default">
                                <dt className="font-black text-primary dark:text-blue-400 text-[10px] uppercase tracking-[0.2em] mb-2 flex items-center gap-2 group-hover:text-secondary transition-colors">
                                    <span className="p-1.5 bg-white dark:bg-gray-800 rounded shadow-sm border border-gray-100 dark:border-gray-700 group-hover:border-secondary/30 transition-colors">{item.icon}</span>
                                    {item.term}
                                </dt>
                                <dd className="text-sm text-gray-700 dark:text-gray-300 font-medium leading-relaxed">{item.def}</dd>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section: Collecting and Using Data */}
                <div id="collection" className="scroll-mt-32 mb-10">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-100 dark:border-blue-800">
                            <Database className="text-primary dark:text-blue-400" size={20} />
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white m-0 uppercase tracking-tight">Collecting & Using Data</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <h3 className="text-sm font-black mb-4 flex items-center gap-3 text-gray-800 dark:text-white uppercase tracking-widest">
                                <UserCheck className="text-secondary" size={16} /> Personal Data
                            </h3>
                            <div className="space-y-2">
                                {[
                                    'Email address',
                                    'First name and last name',
                                    'Phone number',
                                    'Address, State, ZIP/Postal code, City'
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/40 rounded-xl border border-gray-100 dark:border-gray-600 hover:border-secondary/20 hover:translate-x-1 transition-all duration-300 group">
                                        <CheckCircle size={14} className="text-green-600 group-hover:text-secondary transition-colors" />
                                        <span className="text-xs font-bold text-gray-700 dark:text-gray-200">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-black mb-4 flex items-center gap-3 text-gray-800 dark:text-white uppercase tracking-widest">
                                <Server className="text-primary dark:text-blue-400" size={16} /> Usage Data
                            </h3>
                            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed font-bold bg-gray-50 dark:bg-gray-700/30 p-4 rounded-xl border border-gray-100 dark:border-gray-600">
                                Usage Data is collected automatically when using the Service. This may include Your Device's IP address, browser type, pages visited, time and date of Your visit, unique device identifiers and other diagnostic data.
                            </p>
                        </div>
                    </div>

                    {/* Cookie Policy Card */}
                    <div className="bg-gradient-to-br from-slate-900 to-primary text-white p-6 rounded-[2rem] shadow-xl relative overflow-hidden group border border-white/5">
                        <div className="absolute top-0 right-0 -mr-8 -mt-8 opacity-10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-1000"><ShieldCheck size={180} /></div>
                        <div className="relative z-10">
                            <h4 className="text-base md:text-lg font-black uppercase tracking-widest mb-4 flex items-center gap-3">
                                <Lock className="text-secondary" size={20} /> Tracking Technologies & Cookies
                            </h4>
                            <div className="grid md:grid-cols-3 gap-3">
                                {[
                                    { title: 'Necessary', desc: 'Authentication and security.' },
                                    { title: 'Notice Acceptance', desc: 'Tracking user consent.' },
                                    { title: 'Functionality', desc: 'Remembering user preferences.' }
                                ].map((cookie, idx) => (
                                    <div key={idx} className="bg-white/10 p-4 rounded-xl backdrop-blur-md border border-white/10 hover:bg-secondary/20 hover:border-secondary/40 transition-all duration-300">
                                        <p className="font-black text-[10px] uppercase tracking-widest mb-1 group-hover:text-secondary transition-colors">{cookie.title}</p>
                                        <p className="text-[10px] text-blue-100/70 font-medium leading-relaxed">{cookie.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section: Use of Your Data */}
                <div id="usage" className="scroll-mt-32 mb-10">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-100 dark:border-blue-800">
                            <Eye className="text-primary dark:text-blue-400" size={20} />
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white m-0 uppercase tracking-tight">Use of Your Personal Data</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { title: 'Service Maintenance', desc: 'To provide and maintain our Service, including monitoring usage.' },
                            { title: 'Account Management', desc: 'To manage Your registration and access to different functionalities.' },
                            { title: 'Contract Performance', desc: 'Execution of purchase contracts for products or services.' },
                            { title: 'Direct Contact', desc: 'Providing updates via email, calls, or SMS regarding functionalities.' },
                            { title: 'News & Offers', desc: 'General info about goods and events similar to those you purchased.' },
                            { title: 'Request Management', desc: 'To attend and manage Your specific requests to Us.' }
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-2xl transition-all border border-transparent hover:border-secondary/20 hover:shadow-md group">
                                <div className="w-1 h-auto bg-primary/20 dark:bg-blue-400/20 rounded-full group-hover:bg-secondary transition-all"></div>
                                <div>
                                    <h4 className="font-black text-gray-900 dark:text-white mb-1 text-xs uppercase tracking-wider group-hover:text-secondary transition-colors">{item.title}</h4>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 font-bold leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Data Sharing & Retention Grid */}
                <div className="grid lg:grid-cols-2 gap-6 mb-10">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-md hover:border-secondary/30 transition-colors group">
                         <h3 className="text-sm font-black text-gray-900 dark:text-white mb-4 flex items-center gap-2 uppercase tracking-widest group-hover:text-secondary transition-colors">
                            <Share2 className="text-primary group-hover:text-secondary transition-colors" size={18} /> Data Disclosure
                         </h3>
                         <ul className="space-y-3 text-[11px] font-black text-gray-600 dark:text-gray-300">
                            <li className="flex items-start gap-2 hover:text-secondary transition-colors cursor-default"><ArrowUpRight size={14} className="text-secondary shrink-0" /> Business Transactions (Mergers)</li>
                            <li className="flex items-start gap-2 hover:text-secondary transition-colors cursor-default"><ArrowUpRight size={14} className="text-secondary shrink-0" /> Law Enforcement (Statutory Requests)</li>
                            <li className="flex items-start gap-2 hover:text-secondary transition-colors cursor-default"><ArrowUpRight size={14} className="text-secondary shrink-0" /> Legal Liabilities and Safety Protections</li>
                         </ul>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-md hover:border-secondary/30 transition-colors group">
                         <h3 className="text-sm font-black text-gray-900 dark:text-white mb-4 flex items-center gap-2 uppercase tracking-widest group-hover:text-secondary transition-colors">
                            <Trash2 className="text-red-500 group-hover:text-secondary transition-colors" size={18} /> Data Retention
                         </h3>
                         <p className="text-[11px] text-gray-600 dark:text-gray-400 font-black leading-relaxed">
                            Personal Data is retained only for the duration required to fulfill original purposes or satisfy legal obligations. Usage Data is retained for shorter periods unless used for system security enhancement.
                         </p>
                    </div>
                </div>

                {/* Security Section */}
                <div id="retention" className="scroll-mt-32 mb-10">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-100 dark:border-blue-800">
                            <Lock className="text-primary dark:text-blue-400" size={20} />
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white m-0 uppercase tracking-tight">Security Protocols</h2>
                    </div>
                    
                    <div className="p-5 bg-amber-50 dark:bg-amber-900/10 border-l-4 border-secondary rounded-r-2xl shadow-sm hover:bg-amber-100 dark:hover:bg-amber-900/20 transition-colors cursor-default">
                        <div className="flex items-start gap-4">
                            <Shield className="text-secondary shrink-0 mt-0.5" size={18} />
                            <p className="text-[11px] text-amber-900 dark:text-amber-200 font-black uppercase tracking-wider leading-relaxed">
                                SECURITY ADVISORY: While We strive to use commercially acceptable means to protect Your Personal Data, remember that no method of transmission over the Internet is 100% secure. We maintain strict internal controls but cannot guarantee absolute security.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Hub */}
                <div id="contact" className="scroll-mt-32 bg-slate-950 text-white p-8 md:p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden group border border-white/5">
                    <div className="absolute bottom-0 right-0 opacity-10 -mb-20 -mr-20 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-1000"><Mail size={280} /></div>
                    
                    <div className="relative z-10">
                        <div className="mb-6">
                            <span className="text-secondary font-black uppercase tracking-[0.3em] text-[10px] mb-2 block">Compliance Office</span>
                            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight flex items-center gap-4">
                                <Mail className="text-white group-hover:text-secondary transition-colors" size={28} /> Get In Touch
                            </h2>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <a href="mailto:admin@idemi.org" className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-secondary/20 hover:border-secondary/40 transition-all duration-300 group/card">
                                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover/card:bg-secondary transition-colors">
                                    <Mail className="text-blue-400 group-hover/card:text-white" size={20} />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[9px] font-black uppercase tracking-widest text-gray-500 mb-0.5">Email Support</p>
                                    <p className="text-base font-bold truncate group-hover/card:text-secondary transition-colors">admin@idemi.org</p>
                                </div>
                            </a>
                            
                            <a href="tel:02224050301" className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-secondary/20 hover:border-secondary/40 transition-all duration-300 group/card">
                                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover/card:bg-secondary transition-colors">
                                    <Phone className="text-green-400 group-hover/card:text-white" size={20} />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[9px] font-black uppercase tracking-widest text-gray-500 mb-0.5">Direct Line</p>
                                    <p className="text-base font-bold truncate group-hover/card:text-secondary transition-colors">022 2405 0301</p>
                                </div>
                            </a>
                        </div>

                        <div className="mt-6 flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-secondary/5 hover:border-secondary/20 transition-all duration-300">
                            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors">
                                <MapPin className="text-red-400 group-hover:text-white" size={20} />
                            </div>
                            <div>
                                <p className="text-[9px] font-black uppercase tracking-widest text-gray-500 mb-1">Postal Address</p>
                                <p className="text-xs font-bold leading-loose text-gray-300">
                                    Institute for Design of Electrical Measuring Instruments,<br />
                                    Swatantryaveer Tatya Tope Marg, Chunabhatti, Sion, Mumbai - 400 022 INDIA
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 text-center">
                    <Link 
                        to="/contact" 
                        className="inline-flex items-center gap-3 px-8 py-3 bg-primary text-white font-black uppercase tracking-widest text-[10px] rounded-xl hover:bg-secondary transition-all shadow-lg hover:-translate-y-1 active:scale-95 border-b-2 border-primary group"
                    >
                        Visit Help Centre 
                        <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
