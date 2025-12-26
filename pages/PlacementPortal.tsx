
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Filter, Briefcase, MapPin, 
  Building2, Calendar, IndianRupee, Clock,
  CheckCircle, Bookmark, Send,
  Sparkles, ExternalLink, ChevronDown
} from 'lucide-react';
import SEO from '../components/SEO';
import ServiceSidebar from '../components/ServiceSidebar';
import { useScrollAnimation } from '../lib/useScrollAnimation';

interface JobOpening {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  experience: string;
  type: 'Full-time' | 'Internship' | 'Contract';
  category: 'Mechanical' | 'Electronics' | 'IT & Software' | 'Media & Animation' | 'Other';
  postedDate: string;
  deadline: string;
  description: string;
  requirements: string[];
}

const JOBS_DATA: JobOpening[] = [
  {
    id: 'j1',
    title: 'CNC Machine Operator (5-Axis)',
    company: 'Precision Aerospace Components Ltd.',
    location: 'Bangalore, Karnataka',
    salary: '₹ 2.4 - 3.6 LPA',
    experience: 'Fresher / 1 Year',
    type: 'Full-time',
    category: 'Mechanical',
    postedDate: '28-11-2025',
    deadline: '15-12-2025',
    description: 'Operating high-precision 5-axis CNC milling machines for aerospace components manufacturing. Knowledge of Hermle or Haas controllers is a plus.',
    requirements: ['Diploma in Tool & Die Making / Mechanical', 'Basic knowledge of CNC programming', 'Understanding of technical drawings']
  },
  {
    id: 'j2',
    title: 'Junior Automation Engineer',
    company: 'Indus Robotics & Automation',
    location: 'Pune, Maharashtra',
    salary: '₹ 3.0 - 4.5 LPA',
    experience: 'Fresher (IDEMI PG Diploma preferred)',
    type: 'Full-time',
    category: 'Electronics',
    postedDate: '25-11-2025',
    deadline: '10-12-2025',
    description: 'Implementation of PLC and SCADA systems for industrial projects. Candidates with IDEMI PG Diploma in Mechatronics will be prioritized.',
    requirements: ['BE/B.Tech Electronics/Instrumentation', 'Certification in PLC/SCADA', 'Ready to travel for site commissioning']
  },
  {
    id: 'j3',
    title: '3D Modeler & Texturing Artist',
    company: 'Creative Media Studios',
    location: 'Mumbai, Maharashtra',
    salary: '₹ 2.1 - 3.2 LPA',
    experience: 'Fresher',
    type: 'Full-time',
    category: 'Media & Animation',
    postedDate: '20-11-2025',
    deadline: '05-12-2025',
    description: 'Looking for fresh graduates with strong skills in Maya and Blender. Focus on architectural visualization and character modeling.',
    requirements: ['Diploma in 3D Animation (IDEMI preferred)', 'Portfolio showing modeling work', 'Knowledge of V-Ray or Arnold']
  },
  {
    id: 'j4',
    title: 'Tool Designer (Press Tool)',
    company: 'Auto-Tech Stamping Pvt Ltd.',
    location: 'Gurugram, Haryana',
    salary: '₹ 3.5 - 5.0 LPA',
    experience: '1 - 2 Years',
    type: 'Full-time',
    category: 'Mechanical',
    postedDate: '15-11-2025',
    deadline: '20-12-2025',
    description: 'Design of progressive and compound press tools for automotive parts. Must be proficient in NX or Catia.',
    requirements: ['BE/Diploma in Mechanical/Production', 'Proficiency in Unigraphics (NX)', 'Sound knowledge of Sheet Metal design']
  }
];

const PlacementPortal: React.FC = () => {
  const { refreshObserver } = useScrollAnimation();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');

  useEffect(() => {
    refreshObserver();
  }, [refreshObserver, searchTerm, categoryFilter, typeFilter]);

  const filteredJobs = JOBS_DATA.filter(job => {
    const matchesSearch = 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = categoryFilter === 'All' || job.category === categoryFilter;
    const matchesType = typeFilter === 'All' || job.type === typeFilter;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const categories = ['All', 'Mechanical', 'Electronics', 'IT & Software', 'Media & Animation', 'Other'];
  const types = ['All', 'Full-time', 'Internship', 'Contract'];

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO 
        seo={{ 
          title: 'Placement Portal - Job Openings for Students | IDEMI', 
          description: 'Latest job opportunities for IDEMI trained students in Mechanical, Electronics, IT, and Animation sectors.',
          keywords: ['IDEMI Placements', 'Job Portal', 'Engineering Recruitment'],
          schemaType: 'Article'
        }} 
        path="/training/job-openings" 
      />
      
      <div className="relative bg-primary to-blue-800 overflow-hidden border-b border-white/10">
        <div className="container mx-auto px-4 py-16 md:py-20 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-blue-200 text-xs font-black uppercase tracking-widest mb-6 border border-white/10">
                <Sparkles size={14} className="animate-pulse" />
                Student Placement Support
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Launch Your Career</h1>
            <p className="text-lg text-blue-100/90 mb-10 max-w-2xl mx-auto">
                Connecting our highly skilled trainees with global industry leaders.
            </p>
            
            <div className="w-full max-w-2xl mx-auto relative group">
                <div className="relative flex items-center bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-2">
                    <Search size={24} className="ml-4 text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="Search by job title or company..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-grow px-4 py-3 bg-transparent text-gray-900 dark:text-white outline-none font-medium"
                    />
                </div>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-1/4">
             <div className="sticky top-40">
                <ServiceSidebar />
             </div>
          </aside>

          <div className="lg:w-3/4">
             {/* Horizontal Filter Bar */}
             <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-md border border-gray-100 dark:border-slate-800 mb-8 reveal-on-scroll">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex-grow overflow-hidden">
                        <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 ml-1">Job Category</label>
                        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                            {categories.map(cat => (
                                <button 
                                    key={cat}
                                    onClick={() => setCategoryFilter(cat)}
                                    className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                                        categoryFilter === cat 
                                        ? 'bg-primary text-white border-primary shadow-md' 
                                        : 'bg-gray-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-transparent hover:border-gray-200 dark:hover:border-slate-600'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    <div className="shrink-0">
                        <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 ml-1">Job Type</label>
                        <div className="relative">
                            <select 
                                value={typeFilter}
                                onChange={(e) => setTypeFilter(e.target.value)}
                                className="appearance-none bg-gray-50 dark:bg-slate-800 border border-transparent dark:border-slate-700 text-slate-900 dark:text-white text-xs font-bold py-2.5 pl-4 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer min-w-[140px]"
                            >
                                {types.map(t => (
                                    <option key={t} value={t}>{t === 'All' ? 'All Job Types' : t}</option>
                                ))}
                            </select>
                            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                        </div>
                    </div>
                </div>
             </div>

             {/* Results Count Summary */}
             <div className="mb-6 flex items-center justify-between reveal-on-scroll">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Briefcase size={20} className="text-secondary" />
                    Available Openings
                    <span className="bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-400 px-2 py-0.5 rounded-full text-xs ml-1">
                        {filteredJobs.length}
                    </span>
                </h2>
                {searchTerm && (
                    <button 
                        onClick={() => {setSearchTerm(''); setCategoryFilter('All'); setTypeFilter('All');}}
                        className="text-xs font-bold text-gray-500 hover:text-red-500 transition underline underline-offset-4"
                    >
                        Clear all filters
                    </button>
                )}
             </div>

             {/* Job Listings Grid */}
             <div className="space-y-6">
                {filteredJobs.length > 0 ? (
                    filteredJobs.map((job) => (
                        <div key={job.id} className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-800 p-6 md:p-8 hover:shadow-2xl transition-all duration-300 reveal-on-scroll">
                            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                                <div className="flex-grow">
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider mb-3 inline-block ${
                                        job.category === 'Mechanical' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300' :
                                        job.category === 'Electronics' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :
                                        job.category === 'IT & Software' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300' :
                                        'bg-gray-100 text-gray-700 dark:bg-slate-800 dark:text-slate-300'
                                    }`}>
                                        {job.category}
                                    </span>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight mb-2">{job.title}</h3>
                                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                                        <div className="flex items-center gap-1.5"><Building2 size={16} className="text-primary" /><span>{job.company}</span></div>
                                        <div className="flex items-center gap-1.5"><MapPin size={16} className="text-secondary" /><span>{job.location}</span></div>
                                    </div>
                                </div>
                                <button className="p-3 bg-gray-50 dark:bg-slate-800 rounded-xl text-slate-400 hover:text-primary transition-colors border border-transparent hover:border-gray-200 dark:hover:border-slate-700"><Bookmark size={20} /></button>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-gray-50 dark:bg-slate-800/50 rounded-2xl border border-gray-100 dark:border-slate-800 mb-6 text-sm">
                                <div><p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Exp Required</p><p className="font-bold text-slate-700 dark:text-slate-200">{job.experience}</p></div>
                                <div><p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Package</p><p className="font-bold text-slate-700 dark:text-slate-200">{job.salary}</p></div>
                                <div><p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Posted</p><p className="font-bold text-slate-700 dark:text-slate-200">{job.postedDate}</p></div>
                                <div><p className="text-[10px] font-black text-red-400 uppercase tracking-widest mb-1">Apply By</p><p className="font-bold text-red-600 dark:text-red-400">{job.deadline}</p></div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-gray-100 dark:border-slate-800">
                                <Link to={`/student-registration?course=Placement%20-%20${encodeURIComponent(job.title)}`} className="w-full sm:flex-1 py-4 bg-primary text-white text-center rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-800 transition-all flex items-center justify-center gap-3 shadow-lg active:scale-[0.98]">
                                    Apply Now <Send size={16} />
                                </Link>
                                <button className="w-full sm:w-auto px-6 py-4 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-slate-700 transition">
                                    Full Details <ExternalLink size={16} />
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-24 bg-white dark:bg-slate-900 rounded-3xl border-2 border-dashed border-gray-200 dark:border-slate-800 flex flex-col items-center">
                        <div className="w-16 h-16 bg-gray-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
                            <Search size={32} className="text-gray-300" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No matching jobs found</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs mx-auto">Try adjusting your keywords or filters to find what you're looking for.</p>
                        <button 
                            onClick={() => {setSearchTerm(''); setCategoryFilter('All'); setTypeFilter('All');}}
                            className="mt-6 px-6 py-2 bg-primary text-white font-bold rounded-lg hover:bg-blue-800 transition text-sm"
                        >
                            Reset all filters
                        </button>
                    </div>
                )}
             </div>
          </div>
      </div>
    </div>
  );
};

export default PlacementPortal;
