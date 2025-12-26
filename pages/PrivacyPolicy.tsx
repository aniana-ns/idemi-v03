
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import InfoSidebar from '../components/InfoSidebar';
// Added CheckCircle to imports
import { Shield, Lock, Info, Eye, Database, Globe, Scale, Mail, Phone, MapPin, ArrowLeft, Clock, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../lib/useScrollAnimation';

const PrivacyPolicy: React.FC = () => {
  useScrollAnimation();
  const location = useLocation();
  const lastUpdated = "November 28, 2025";

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO 
        seo={{ 
          title: 'Privacy Policy | IDEMI Mumbai', 
          description: 'Official Privacy Policy for the Institute for Design of Electrical Measuring Instruments (IDEMI). Learn how we collect, use, and protect your data.',
          keywords: ['Privacy Policy', 'Data Protection', 'IDEMI Mumbai', 'Cookies Policy', 'GDPR Compliance'],
          schemaType: 'Article'
        }} 
        path={location.pathname} 
      />
      
      {/* Page Header */}
      <div className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <Shield size={32} className="text-blue-200" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Privacy Policy</h1>
            <div className="flex items-center justify-center gap-2 text-blue-100 text-sm font-medium">
                <Clock size={16} />
                <span>Last updated: {lastUpdated}</span>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <aside className="lg:w-1/4">
            <InfoSidebar />
        </aside>

        {/* Main Content */}
        <div className="lg:w-3/4">
            <Link to="/" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-6">
                <ArrowLeft size={16} className="mr-1" /> Back to Home
            </Link>

            <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 reveal-on-scroll">
                
                <div className="prose prose-blue dark:prose-invert max-w-none">
                    <p className="lead text-lg text-gray-600 dark:text-gray-300">
                        This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                        We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
                    </p>

                    <div className="h-px bg-gray-100 dark:bg-gray-700 my-10"></div>

                    <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-white">
                        <Info className="text-primary" /> Interpretation and Definitions
                    </h2>
                    <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                    
                    <h3 className="text-xl font-bold mt-8 mb-4">Definitions</h3>
                    <ul className="space-y-4">
                        <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                        <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Institute of Design for Electrical Measuring Instruments, Swatantryaveer Tatya Tope Marg, Chunabhatti, Sion, Mumbai - 400 022 INDIA.</li>
                        <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
                        <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
                        <li><strong>Website</strong> refers to IDEMI, accessible from <a href="https://idemi.org" className="text-primary hover:underline">idemi.org</a></li>
                        <li><strong>Country</strong> refers to: Maharashtra, India</li>
                        <li><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company.</li>
                        <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
                        <li><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website.</li>
                        <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
                        <li><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself.</li>
                    </ul>

                    <div className="h-px bg-gray-100 dark:bg-gray-700 my-10"></div>

                    <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-white">
                        <Database className="text-primary" /> Collecting and Using Your Personal Data
                    </h2>
                    
                    <h3 className="text-xl font-bold mt-8 mb-4">Types of Data Collected</h3>
                    <h4 className="font-bold text-gray-800 dark:text-gray-200">Personal Data</h4>
                    <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        {['Email address', 'First name and last name', 'Phone number', 'Address, State, ZIP/Postal code, City'].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-100 dark:border-gray-600">
                                <CheckCircle size={16} className="text-green-500" />
                                <span className="text-sm font-medium">{item}</span>
                            </div>
                        ))}
                    </div>

                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mt-6">Usage Data</h4>
                    <p>Usage Data is collected automatically when using the Service. This may include information such as Your Device's IP address, browser type, pages visited, time and date of visit, unique device identifiers and other diagnostic data.</p>

                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mt-6">Tracking Technologies and Cookies</h4>
                    <p>We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service.</p>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800 my-6">
                        <h5 className="font-bold text-primary dark:text-blue-400 mb-2">Types of Cookies We Use:</h5>
                        <ul className="space-y-4 text-sm">
                            <li><strong>Necessary / Essential Cookies:</strong> These Cookies are essential to provide You with services available through the Website. They help to authenticate users and prevent fraudulent use of user accounts.</li>
                            <li><strong>Cookies Policy / Notice Acceptance Cookies:</strong> These Cookies identify if users have accepted the use of cookies on the Website.</li>
                            <li><strong>Functionality Cookies:</strong> These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference.</li>
                        </ul>
                    </div>

                    <div className="h-px bg-gray-100 dark:bg-gray-700 my-10"></div>

                    <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-white">
                        <Eye className="text-primary" /> Use of Your Personal Data
                    </h2>
                    <p>The Company may use Personal Data for the following purposes:</p>
                    <ul className="space-y-3">
                        <li><strong>To provide and maintain our Service:</strong> including to monitor the usage of our Service.</li>
                        <li><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service.</li>
                        <li><strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for products or services.</li>
                        <li><strong>To contact You:</strong> by email, phone, SMS, or other equivalent forms of electronic communication.</li>
                        <li><strong>To provide You with news:</strong> special offers and general information about other goods, services and events which we offer.</li>
                        <li><strong>To manage Your requests:</strong> To attend and manage Your requests to Us.</li>
                    </ul>

                    <h3 className="text-xl font-bold mt-8 mb-4">Sharing Your Personal Information</h3>
                    <p>We may share your personal information in the following situations:</p>
                    <ul className="space-y-3">
                        <li><strong>With Service Providers:</strong> To monitor and analyze the use of our Service, or to contact You.</li>
                        <li><strong>For Business transfers:</strong> In connection with, or during negotiations of, any merger or sale of Company assets.</li>
                        <li><strong>With Affiliates:</strong> In which case we will require those affiliates to honor this Privacy Policy.</li>
                        <li><strong>With Business partners:</strong> To offer You certain products, services or promotions.</li>
                        <li><strong>With other users:</strong> when You share personal information or otherwise interact in the public areas.</li>
                    </ul>

                    <div className="h-px bg-gray-100 dark:bg-gray-700 my-10"></div>

                    <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-white">
                        <Lock className="text-primary" /> Security and Retention
                    </h2>
                    
                    <h3 className="text-xl font-bold mt-6 mb-4">Retention of Data</h3>
                    <p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements.</p>

                    <h3 className="text-xl font-bold mt-6 mb-4">Transfer of Your Personal Data</h3>
                    <p>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to computers located outside of Your state, province, country or other governmental jurisdiction.</p>
                    <p>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>

                    <h3 className="text-xl font-bold mt-6 mb-4">Disclosure of Your Personal Data</h3>
                    <div className="space-y-4">
                        <p><strong>Business Transactions:</strong> If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred.</p>
                        <p><strong>Law enforcement:</strong> Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities.</p>
                    </div>

                    <h3 className="text-xl font-bold mt-6 mb-4">Security of Your Data</h3>
                    <p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>

                    <div className="h-px bg-gray-100 dark:bg-gray-700 my-10"></div>

                    <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-white">
                        <Globe className="text-primary" /> Additional Information
                    </h2>
                    
                    <h3 className="text-xl font-bold mt-6 mb-4">Links to Other Websites</h3>
                    <p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>

                    <h3 className="text-xl font-bold mt-6 mb-4">Changes to this Privacy Policy</h3>
                    <p>We may update our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>

                    <div className="h-px bg-gray-100 dark:bg-gray-700 my-10"></div>

                    <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-white mb-8">
                        <Mail className="text-primary" /> Contact Us
                    </h2>
                    <p className="mb-6">If you have any questions about this Privacy Policy, You can contact us through any of the following channels:</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-gray-50 dark:bg-gray-700/30 rounded-2xl border border-gray-100 dark:border-gray-600 flex items-start gap-4">
                            <Mail className="text-primary dark:text-blue-400 shrink-0" />
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white text-sm uppercase mb-1">By Email</h4>
                                <a href="mailto:admin@idemi.org" className="text-primary dark:text-blue-400 font-medium hover:underline">admin@idemi.org</a>
                            </div>
                        </div>
                        <div className="p-6 bg-gray-50 dark:bg-gray-700/30 rounded-2xl border border-gray-100 dark:border-gray-600 flex items-start gap-4">
                            <Phone className="text-primary dark:text-blue-400 shrink-0" />
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white text-sm uppercase mb-1">By Phone</h4>
                                <a href="tel:02224050301" className="text-primary dark:text-blue-400 font-medium hover:underline">022 2405 0301</a>
                            </div>
                        </div>
                        <div className="p-6 bg-gray-50 dark:bg-gray-700/30 rounded-2xl border border-gray-100 dark:border-gray-600 flex items-start gap-4 md:col-span-2">
                            <MapPin className="text-primary dark:text-blue-400 shrink-0" />
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white text-sm uppercase mb-1">By Mail</h4>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">
                                    Institute for Design of Electrical Measuring Instruments,<br />
                                    Swatantryaveer Tatya Tope Marg, Chunabhatti, Sion,<br />
                                    Mumbai - 400 022 INDIA
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Link 
                        to="/contact" 
                        className="inline-flex items-center gap-2 text-primary dark:text-blue-400 font-bold hover:underline"
                    >
                        Visit our Contact page <ArrowLeft size={16} className="rotate-180" />
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
