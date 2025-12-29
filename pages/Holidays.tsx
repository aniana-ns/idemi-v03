
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Calendar, CheckCircle, ChevronRight, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import InfoSidebar from '../components/InfoSidebar';
import { useScrollAnimation } from '../lib/useScrollAnimation';

const Holidays: React.FC = () => {
  useScrollAnimation();
  const location = useLocation();

  const HOLIDAYS_LIST = [
    { no: 1, name: "Republic Day", date: "26th January, 2025", day: "Sunday" },
    { no: 2, name: "Maha Shivratri", date: "26th February, 2025", day: "Wednesday" },
    { no: 3, name: "Holi", date: "14th March, 2025", day: "Friday" },
    { no: 4, name: "Eid-ul-Fitr", date: "31st March, 2025", day: "Monday" },
    { no: 5, name: "Mahavir Jayanti", date: "10th April, 2025", day: "Thursday" },
    { no: 6, name: "Good Friday", date: "18th April, 2025", day: "Friday" },
    { no: 7, name: "Buddha Purnima", date: "12th May, 2025", day: "Monday" },
    { no: 8, name: "Eid-ul-Zuha (Bakrid)", date: "7th June, 2025", day: "Saturday" },
    { no: 9, name: "Independence Day", date: "15th August, 2025", day: "Friday" },
    { no: 10, name: "Ganesh Chaturthi", date: "27th August, 2025", day: "Wednesday" },
    { no: 11, name: "Milad-un-Nabi", date: "5th September, 2025", day: "Friday" },
    { no: 12, name: "Mahatma Gandhi Birthday", date: "2nd October, 2025", day: "Thursday" },
    { no: 13, name: "Dussehra", date: "2nd October, 2025", day: "Thursday" },
    { no: 14, name: "Diwali (Deepavali)", date: "20th October, 2025", day: "Monday" },
    { no: 15, name: "Diwali Amavasya", date: "21st October, 2025", day: "Tuesday" },
    { no: 16, name: "Guru Nanak Birthday", date: "05th November, 2025", day: "Wednesday" },
    { no: 17, name: "Christmas Day", date: "25th December, 2025", day: "Thursday" }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO seo={{ title: 'Holidays List 2025 | IDEMI', description: 'Gazetted Holidays for the Year 2025' }} path={location.pathname} />
      
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
             <Link to="/" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-2">
                <ArrowLeft size={16} className="mr-1" /> Back to Home
             </Link>
             <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Holidays List 2025</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
        <aside className="lg:w-1/4">
            <InfoSidebar />
        </aside>
        
        <div className="lg:w-3/4">
            <div className="bg-white dark:bg-gray-800 p-6 sm:p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 reveal-on-scroll">
                <div className="flex items-center justify-between mb-8 border-b dark:border-gray-700 pb-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-secondary/10 text-secondary dark:text-amber-500 rounded-2xl">
                            <Calendar size={32} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight">Gazetted Holidays</h2>
                            <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mt-1">Calendar Year 2025</p>
                        </div>
                    </div>
                    <div className="hidden sm:block">
                        <span className="px-4 py-1.5 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full font-black uppercase text-[10px] tracking-widest border border-green-100 dark:border-green-800">Verified Schedule</span>
                    </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg leading-relaxed">
                    The Institute observes the following closed holidays as per the Government of India directives for Central Government administrative offices.
                </p>

                <div className="bg-amber-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-amber-100 dark:border-slate-700 mb-10 shadow-inner">
                    <div className="flex items-start gap-4">
                        <CheckCircle size={20} className="text-amber-600 shrink-0 mt-0.5" />
                        <p className="text-sm text-amber-900 dark:text-amber-200 font-bold leading-relaxed uppercase tracking-wide">
                            Note: In addition to these closed holidays, employees are entitled to any two Restricted Holidays (RH) from the separate list maintained by the establishment section.
                        </p>
                    </div>
                </div>

                {/* Desktop Table View */}
                <div className="hidden lg:block overflow-hidden rounded-3xl border border-gray-100 dark:border-gray-700 shadow-md">
                    <table className="w-full text-left border-collapse bg-white dark:bg-gray-800">
                        <thead className="bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400 text-[10px] font-black uppercase tracking-[0.2em]">
                            <tr>
                                <th className="p-5 border-b border-gray-100 dark:border-gray-700 w-20 text-center">#</th>
                                <th className="p-5 border-b border-gray-100 dark:border-gray-700">Description of Holiday</th>
                                <th className="p-5 border-b border-gray-100 dark:border-gray-700 w-64">Date (2025)</th>
                                <th className="p-5 border-b border-gray-100 dark:border-gray-700 w-40">Week Day</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 dark:divide-gray-700">
                            {HOLIDAYS_LIST.map((holiday, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-blue-900/10 transition-colors group">
                                    <td className="p-5 text-center font-mono text-gray-400 dark:text-gray-500 text-xs">{holiday.no}</td>
                                    <td className="p-5 font-black text-gray-800 dark:text-white group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">{holiday.name}</td>
                                    <td className="p-5 font-bold text-primary dark:text-blue-300">{holiday.date}</td>
                                    <td className="p-5">
                                        <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${holiday.day === 'Sunday' || holiday.day === 'Saturday' ? 'bg-red-50 text-red-600 dark:bg-red-900/30' : 'bg-gray-100 text-gray-600 dark:bg-gray-700'}`}>
                                            {holiday.day}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Modern Mobile Card View */}
                <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4">
                    {HOLIDAYS_LIST.map((holiday, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-[2rem] border border-gray-100 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col relative overflow-hidden group">
                            {/* Accent line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
                            
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-gray-50 dark:bg-slate-700 rounded-2xl group-hover:bg-primary/10 transition-colors">
                                    <Clock size={20} className="text-primary dark:text-blue-400" />
                                </div>
                                <span className="text-[10px] font-black font-mono text-slate-300 dark:text-slate-600 uppercase tracking-widest">#{holiday.no}</span>
                            </div>

                            <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight leading-tight mb-4 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">{holiday.name}</h3>
                            
                            <div className="mt-auto space-y-3">
                                <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                    <Calendar size={14} className="text-secondary" />
                                    <span className="text-sm font-bold">{holiday.date}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                                    <span className={`text-[10px] font-black uppercase tracking-widest ${holiday.day === 'Sunday' || holiday.day === 'Saturday' ? 'text-red-500' : 'text-slate-500'}`}>
                                        {holiday.day}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Holidays;
