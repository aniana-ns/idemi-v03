import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Thermometer, FileText, ExternalLink, User, Mail, Phone, ChevronRight, Zap } from 'lucide-react';
import SEO from '../components/SEO';
import ServiceSidebar from '../components/ServiceSidebar';
import { useScrollAnimation } from '../lib/useScrollAnimation';

const Thermal: React.FC = () => {
  useScrollAnimation();
  
  const FIXED_POINT_DATA = [
      { cell: "TPW Cell", range: "0.01 °C", cmc: "1.3 mK" },
      { cell: "Gallium Cell", range: "29.7646 °C", cmc: "1.6 mK" },
      { cell: "Tin Cell", range: "231.928 °C", cmc: "4.5 mK" },
      { cell: "Zinc Cell", range: "419.527 °C", cmc: "6.6 mK" },
      { cell: "Aluminum Cell", range: "660.323 °C", cmc: "12 mK" }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO 
        seo={{ 
          title: 'Thermal & Humidity Calibration Services | NABL Accredited Lab | IDEMI', 
          description: 'NABL Accredited Thermal Calibration laboratory equipped with Fixed Point Cells (ITS-90), SPRT, Black Body Sources, and Furnaces. Precision temperature calibration from -196°C to 1500°C for pharma, aerospace, and processing industries.',
          keywords: [
            'Thermal Calibration Mumbai', 
            'Temperature Calibration -196 to 1500 C', 
            'Fixed Point Calibration ITS-90', 
            'SPRT PRT Sensor Calibration', 
            'NABL Thermal Lab CC-2287', 
            'Relative Humidity Calibration', 
            'Dry Block Calibrator Calibration', 
            'Thermocouple Calibration'
          ],
          schemaType: 'Service'
        }} 
        path="/services/calibration/thermal" 
      />
      
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
             <Link to="/services/calibration" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-2">
                <ArrowLeft size={16} className="mr-1" /> Back to Calibration
             </Link>
             <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Thermal Calibration</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-1/4">
             <ServiceSidebar />
          </aside>

          <div className="lg:w-3/4">
             <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 reveal-on-scroll">
                <p className="text-primary dark:text-blue-400 font-bold uppercase tracking-wide text-sm mb-4">Temperature & Humidity Standards</p>
                
                <img src="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&q=80" alt="Thermal Calibration" className="w-full h-64 md:h-96 object-cover rounded-lg mb-8 shadow-md" />

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    Thermal calibration laboratory is equipped with state of the master standards like Fixed point cells, SPRT sensors, Sec.PRT sensors, S Type Thermocouple, Low temperature bath and dry wells, High temperature furnaces, black body source, thermometry bridge, thermometer readouts etc.
                </p>

                <div className="space-y-12">
                    <section>
                        <h3 className="text-xl font-bold text-primary dark:text-blue-400 mb-4 flex items-center gap-2 border-b dark:border-gray-700 pb-2">
                           <Thermometer size={24} /> Calibration Services
                        </h3>
                        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 mb-8">
                            {[
                                "SPRT / PRT sensors in the temp. Range -196°C to 660 °C by fixed point method.",
                                "RTD(PRT) sensors in the temp. range -80°C to 660 °C by comparison method.",
                                "Infrared (IR) Thermometers in the temp. range 0°C to 500 °C",
                                "Thermocouples of various types in the temp. range Ambient to 1000 °C",
                                "Glass Thermometers -50°C to 250 °C",
                                "Digital temp. indicators / Data Logger with sensors etc.",
                                "Dry Block Calibrator, Furnace -80°C to 1000°C",
                                "On site calibration of Chambers, Freezers, Ovens etc."
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300 py-1">
                                    <ChevronRight size={16} className="text-secondary shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-secondary pl-4">NABL Accredited Scope (Fixed Point)</h3>
                        
                        {/* Desktop Table */}
                        <div className="hidden md:block overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 mb-8 bg-white dark:bg-gray-800 shadow-sm">
                            <table className="w-full text-sm text-left border-collapse">
                                <thead className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white font-black uppercase text-[10px] tracking-widest">
                                    <tr>
                                        <th className="p-4 border-b dark:border-gray-600">SPRT Sensors using fixed point method</th>
                                        <th className="p-4 border-b dark:border-gray-600">Range</th>
                                        <th className="p-4 border-b dark:border-gray-600">CMC</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700 dark:text-gray-300">
                                    {FIXED_POINT_DATA.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                                            <td className="p-4 border-b dark:border-gray-600 font-bold">{row.cell}</td>
                                            <td className="p-4 border-b dark:border-gray-600">{row.range}</td>
                                            <td className="p-4 border-b dark:border-gray-600 font-black text-primary dark:text-blue-400">{row.cmc}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile Card View */}
                        <div className="md:hidden space-y-4 mb-8">
                            {FIXED_POINT_DATA.map((row, idx) => (
                                <div key={idx} className="bg-gray-50 dark:bg-gray-700/30 p-5 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col gap-4">
                                    <div className="flex justify-between items-center border-b border-gray-100 dark:border-slate-700 pb-3">
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Sensor Cell</span>
                                        <span className="text-sm font-black text-slate-900 dark:text-white">{row.cell}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Temperature Range</span>
                                        <span className="text-xs font-bold text-gray-700 dark:text-gray-300">{row.range}</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-white dark:bg-slate-800 p-3 rounded-xl border border-gray-100 dark:border-gray-600 shadow-inner">
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">CMC (Better Than)</span>
                                        <div className="flex items-center gap-1.5 text-sm font-black text-primary dark:text-blue-400">
                                            <Zap size={14} fill="currentColor" className="text-amber-500" />
                                            {row.cmc}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Contact Card */}
                    <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-2xl border border-blue-100 dark:border-gray-700 shadow-md">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <User className="text-primary dark:text-blue-400" size={20} /> Contact for Thermal Calibration
                        </h3>
                        <div className="space-y-1">
                            <p className="font-bold text-gray-900 dark:text-white text-lg">Mr. Nishant Pawaskar</p>
                            <p className="text-xs font-bold text-secondary dark:text-amber-500 uppercase tracking-wider mb-3">Joint Director (ECL)</p>
                            
                            <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300 pt-3 border-t border-blue-200 dark:border-gray-700">
                                <a href="mailto:thermal@idemi.org" className="flex items-center gap-3 hover:text-primary dark:hover:text-blue-400 transition group">
                                    <Mail size={18} className="text-gray-400 group-hover:text-primary dark:group-hover:text-blue-400" /> thermal@idemi.org
                                </a>
                                <div className="flex items-center gap-3">
                                    <Phone size={18} className="text-gray-400" /> 
                                    <span>022-24050301 ext 240</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone size={18} className="text-gray-400" /> 
                                    <span>+91 81042 93678</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
          </div>
      </div>
    </div>
  );
};

export default Thermal;