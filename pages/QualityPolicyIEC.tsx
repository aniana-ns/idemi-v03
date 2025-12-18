
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ShieldCheck, Download, Eye, X, FileText } from 'lucide-react';
import SEO from '../components/SEO';
import { useScrollAnimation } from '../lib/useScrollAnimation';

const DATA = {
    title: 'Quality Policy for ISO / IEC 17025: 2017',
    description: 'General requirements for the competence of testing and calibration laboratories.',
    content: 'IDEMI is committed to good professional practice and quality of its testing and calibration services to its customers.',
    pdfLink: "https://idemi.org/assets/downloads/EC%20Blr%20Newspaper%20Ad%20A5%20Size.pdf"
};

const QualityPolicyIEC: React.FC = () => {
  useScrollAnimation();
  const location = useLocation();
  const [showPdf, setShowPdf] = useState(false);

  const getViewerUrl = (url: string) => {
      return `https://docs.google.com/gview?url=${encodeURIComponent(url)}&embedded=true`;
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <SEO seo={{ title: `${DATA.title} | IDEMI`, description: DATA.description }} path={location.pathname} />
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
            <div className="inline-block p-3 bg-white/10 rounded-full mb-4"><ShieldCheck size={40} /></div>
            <h1 className="text-3xl font-bold mb-2">{DATA.title}</h1>
            <p className="text-blue-100 max-w-2xl mx-auto">{DATA.description}</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
         <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col reveal-on-scroll">
            <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Policy Statement</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">{DATA.content}</p>
                <div className="flex flex-col gap-3">
                    <button onClick={() => setShowPdf(!showPdf)} className={`block w-full py-3 border rounded-lg font-bold transition flex items-center justify-center gap-2 ${showPdf ? 'bg-red-50 border-red-200 text-red-600 hover:bg-red-100' : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'}`}>{showPdf ? <><X size={18} /> Close Viewer</> : <><Eye size={18} /> View Document</>}</button>
                    <a href={DATA.pdfLink} download className="block w-full py-3 bg-secondary text-white text-center rounded-lg font-bold hover:bg-amber-700 transition flex items-center justify-center gap-2"><Download size={18} /> Download PDF</a>
                </div>
            </div>
            {showPdf && (
                <div className="border-t border-gray-200 dark:border-gray-700 p-6 bg-gray-50 dark:bg-gray-900 animate-slide-up">
                    <div className="w-full h-[800px] bg-white rounded-lg border border-gray-300 dark:border-gray-600 overflow-hidden shadow-inner"><iframe src={getViewerUrl(DATA.pdfLink)} className="w-full h-full" title={`PDF Viewer`} /></div>
                </div>
            )}
         </div>
      </div>
    </div>
  );
};

export default QualityPolicyIEC;
