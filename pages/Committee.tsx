
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, Briefcase, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import InfoSidebar from '../components/InfoSidebar';
import { useScrollAnimation } from '../lib/useScrollAnimation';

const SECTIONS = [
  {
    title: 'Governing Council',
    members: [
      { 
          name: 'Additional Secretary & Development Commissioner (MSME)', 
          designation: 'Chairman', 
          workAssigned: ['Ministry of MSME, Govt. of India'] 
      },
      { 
          name: 'Joint Secretary (SME)', 
          designation: 'Member', 
          workAssigned: ['Ministry of MSME'] 
      },
      { 
          name: 'Director (Finance)', 
          designation: 'Member', 
          workAssigned: ['IFW, Ministry of Industry'] 
      },
      { 
          name: 'Principal Director, IDEMI', 
          designation: 'Member Secretary', 
          workAssigned: ['IDEMI Mumbai'] 
      },
    ]
  },
  {
    title: 'Committee for the Sexual Harassment of Women at Work Place',
    members: [
      {
        name: 'Mrs. Priyanka P. Nachane',
        designation: 'Secretary (IDEMI)',
        workAssigned: ['Chairman']
      },
      {
        name: 'Mrs. Sukhada Kulkarni',
        designation: 'Manager QC (Ashida Electronics)',
        workAssigned: ['Member']
      },
      {
        name: 'Mrs. Vinaya V. Kamat',
        designation: 'Office Superintendent (IDEMI)',
        workAssigned: ['Member']
      },
      {
        name: 'Mrs. Vidya Kadam',
        designation: 'Sr. Stenographer (IDEMI)',
        workAssigned: ['Member']
      },
      {
        name: 'Mrs. Megha Y. Jangale',
        designation: 'Junior Technical Assistant (IDEMI)',
        workAssigned: ['Member']
      }
    ]
  }
];

const Committee: React.FC = () => {
  useScrollAnimation();

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO seo={{ title: "Committees | IDEMI", description: "Governing Council & Internal Committees of IDEMI." }} path="/committee" />
      
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
             <Link to="/" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-2">
                <ArrowLeft size={16} className="mr-1" /> Back to Home
             </Link>
             <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Committees</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-1/4">
             <InfoSidebar />
          </aside>

          <div className="lg:w-3/4">
             <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 reveal-on-scroll">
                <p className="text-primary dark:text-blue-400 font-bold uppercase tracking-wide text-sm mb-8">Governing Bodies</p>
                
                <div className="space-y-12">
                    {SECTIONS.map((section, secIdx) => (
                        <div key={secIdx}>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-100 dark:border-gray-700">
                                {section.title}
                            </h2>
                            
                            <div className="space-y-6">
                                {section.members.map((member, idx) => (
                                    <div key={idx} className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 dark:bg-gray-700/30 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition">
                                        <div className="shrink-0">
                                            <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-600 shadow-sm flex items-center justify-center text-gray-400 dark:text-gray-300 border-2 border-gray-100 dark:border-gray-500">
                                                <User size={32} />
                                            </div>
                                        </div>
                                        
                                        <div className="flex-grow">
                                            <div className="mb-2">
                                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{member.name}</h3>
                                                <p className="text-secondary dark:text-amber-500 font-bold text-sm uppercase tracking-wide">{member.designation}</p>
                                            </div>

                                            <div className="space-y-3">
                                                <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center gap-1">
                                                    <Briefcase size={12} /> Role / Affiliation
                                                </h4>
                                                <ul className="space-y-1">
                                                    {member.workAssigned.map((work, wIdx) => (
                                                        <li key={wIdx} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                                                            <CheckCircle size={14} className="text-green-500 shrink-0 mt-0.5" />
                                                            <span>{work}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
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

export default Committee;
