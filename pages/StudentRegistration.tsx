
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, BookOpen, CheckCircle, Send, AlertCircle, User, Calendar, Phone, Mail, MapPin, Loader2, Upload, FileText, Hash } from 'lucide-react';
import SimpleCaptcha from '../components/SimpleCaptcha';
import SEO from '../components/SEO';
import ServiceSidebar from '../components/ServiceSidebar';
import { useScrollAnimation } from '../lib/useScrollAnimation';

// Exact Course Data mapped from the provided HTML snippet
interface CourseCategory {
  category: string;
  courses: string[];
}

const COURSE_DATA: CourseCategory[] = [
  {
    category: "Media & Entertainment",
    courses: [
      "Graphic Designer Assistant - Duration: 390 Hours - NSQF Level: 3",
      "Film Compositor Assistant - Duration: 450 Hours - NSQF Level: 4",
      "Graphics and Web Designer Assistant - Duration: 600 Hours - NSQF Level: 4",
      "3D Animator Assistant - Duration: 600 Hours - NSQF Level: 3",
      "VFX Associate - Duration: 600 Hours - NSQF Level: 4",
      "Content Developer Assistant (Digital Marketing) - Duration: 390 Hours - NSQF Level: 4",
      "Multimedia and Animation Associate - Duration: 600 Hours - NSQF Level: 4",
      "Associate Developer AR VR - Duration: 600 Hours - NSQF Level: 5"
    ]
  },
  {
    category: "IT & ITes",
    courses: [
      "Jr. Web Designer - Duration: 390 Hours - NSQF Level: 4",
      "Full Stack Developer - Duration: 600 Hours - NSQF Level: 4.5",
      "Jr. Designer – UI/ UX - Duration: 390 Hours - NSQF Level: 4"
    ]
  },
  {
    category: "Electronics & Hardware",
    courses: [
      "Jr. Technician - Computer Hardware and Network - Duration: 360 Hours - NSQF Level: 3",
      "Jr. Technician - PCB Fabrication - Duration: 600 Hours - NSQF Level: 3",
      "Jr. Technician - Electronics Equipment - Duration: 600 Hours - NSQF Level: 3",
      "Technician - Audio Video Systems - Duration: 510 Hours - NSQF Level: 4",
      "Technician - Hand Held Products - Duration: 510 Hours - NSQF Level: 4",
      "Technician - Computer Hardware and Network Management - Duration: 600 Hours - NSQF Level: 4",
      "Jr. Embedded Developer - Duration: 600 Hours - NSQF Level: 4.5",
      "Technician - Room Air Conditioner and Home Appliances - Duration: 600 Hours - NSQF Level: 4",
      "PROCESS DESIGNER - AUTOMATION - Duration: 600 Hours - NSQF Level: 5.5"
    ]
  },
  {
    category: "Capital Goods & Manufacturing",
    courses: [
      "Sr.Product Manager (Aerospace Manufacturing) - Duration: 600 Hours - NSQF Level: 6",
      "Asst. Operator – Conventional Machines - Duration: 1200 Hours - NSQF Level: 2.5",
      "Asst. Operator – CNC Milling (Tool Room) - Duration: 600 Hours - NSQF Level: 3",
      "Jr. Technician - Inspection and Quality Control - Duration: 600 Hours - NSQF Level: 3",
      "Jr. Technician - Welding - Duration: 600 Hours - NSQF Level: 3",
      "Jr. Technician – Tool and Die Maker - Duration: 1200 Hours - NSQF Level: 3.5",
      "CNC Programmer – Tool Room - Duration: 600 Hours - NSQF Level: 4.5",
      "Jr. Designer – CAD/CAM - Duration: 600 Hours - NSQF Level: 4.5",
      "Sr. Technician - Mechatronics - Duration: 600 Hours - NSQF Level: 4.5",
      "Jr. Designer - Tool - Duration: 600 Hours - NSQF Level: 4.5",
      "Technical Supervisor - Computer Aided Engineering - Duration: 600 Hours - NSQF Level:5",
      "Assistant Operator – CNC Turning (Tool Room) - Duration: 600 Hours - NSQF Level: 3",
      "Technical Supervisor -Additive Manufacturing - Duration: 600 Hours - NSQF Level:5",
      "Technician – CNC Machining - Duration: 600 Hours - NSQF Level: 4",
      "Jr. Technician – Tool and Die - Duration: 1200 Hours - NSQF Level: 3.5",
      "Technician – Tool and Die - Duration: 1200 Hours - NSQF Level: 4",
      "Sr. Technician/ Supervisor – Tool and Die - Duration: 1200 Hours - NSQF Level: 4.5"
    ]
  },
  {
    category: "Construction",
    courses: [
      "Front Line Junior Supervisor (Construction) - Duration: 600 Hours - NSQF Level: 4.5",
      "PROJECT COORDINATOR (construction) - Duration: 1200 Hours - NSQF Level: 5.5"
    ]
  },
  {
    category: "Power",
    courses: [
      "Assistant Electrician (Domestic cum Industrial) - Duration: 600 Hours - NSQF Level: 3"
    ]
  },
  {
    category: "Short Term Courses (NSQF Exempted)",
    courses: [
      "AutoCAD – Mechanical - Duration: 96 Hours",
      "Solidworks - Duration: 96 Hours",
      "Unigraphics - Duration: 96 Hours",
      "CATIA - Duration: 96 Hours",
      "CREO Parametric - Duration: 96 Hours",
      "ANSYS - Duration: 96 Hours",
      "Hypermesh - Duration: 96 Hours",
      "3DS Max - Duration: 96 Hours",
      "STAADPRO - Duration: 96 Hours",
      "REVIT Architecture - Duration: 96 Hours",
      "PLC Programming - Duration: 96 Hours",
      "SCADA - Duration: 96 Hours",
      "Embedded systems - Duration: 96 Hours",
      "VLSI - Duration: 96 Hours",
      "Electrical CAD - Duration: 96 Hours",
      "CNC Programming - Lathe - Duration: 96 Hours",
      "CNC Machining - Lathe - Duration: 96 Hours",
      "CNC Programming - Milling - Duration: 96 Hours",
      "CNC Machining - Milling - Duration: 96 Hours",
      "MATLAB - Duration: 96 Hours",
      "DelCAM - Duration: 96 Hours",
      "3D Printing - Duration: 96 Hours",
      "JAVA - Duration: 96 Hours",
      "MasterCAM - Duration: 96 Hours",
      "Microcontroller Programming - Duration: 96 Hours",
      "Computer Hardware and Networking - Duration: 96 Hours"
    ]
  }
];

const StudentRegistration: React.FC = () => {
  useScrollAnimation();
  const location = useLocation();
  
  const [formData, setFormData] = useState({
    coursename: '',
    fullname: '',
    aadharNumber: '',
    gender: '',
    dateofbirth: '',
    mobilenumber: '',
    emailid: '',
    caste: '',
    qualification: '',
    reference: '',
    address: '',
    comment: ''
  });

  const [files, setFiles] = useState<{
    aadharCard: File | null;
    educationCertificate: File | null;
    casteCertificate: File | null;
  }>({
    aadharCard: null,
    educationCertificate: null,
    casteCertificate: null
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  
  // Validation State
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Auto-select course if passed via URL query
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const courseParam = searchParams.get('course');
    if (courseParam) {
        let found = false;
        COURSE_DATA.forEach(cat => {
            cat.courses.forEach(c => {
                if (c.toLowerCase().includes(courseParam.toLowerCase())) {
                    setFormData(prev => ({ ...prev, coursename: c }));
                    found = true;
                }
            });
        });
        if (!found) setFormData(prev => ({ ...prev, coursename: courseParam }));
    }
  }, [location.search]);

  const validateField = (name: string, value: string): string | undefined => {
      switch(name) {
          case 'coursename':
              if (!value) return "Please select a course";
              break;
          case 'fullname':
              if (!value.trim()) return "Full name is required";
              break;
          case 'aadharNumber':
              if (value.trim() && !/^[0-9]{12}$/.test(value.replace(/\s/g, ''))) return "Aadhar must be exactly 12 digits";
              break;
          case 'gender':
              if (!value) return "Please select gender";
              break;
          case 'dateofbirth':
              if (!value) return "Date of birth is required";
              break;
          case 'mobilenumber':
              if (!value.trim()) return "Mobile number is required";
              if (!/^[0-9]{10}$/.test(value.replace(/[^0-9]/g, ''))) return "Valid 10-digit mobile number required";
              break;
          case 'emailid':
              if (!value.trim()) return "Email is required";
              if (!/^\S+@\S+\.\S+$/.test(value)) return "Valid email is required";
              break;
          case 'caste':
              if (!value) return "Please select caste category";
              break;
          case 'qualification':
              if (!value) return "Qualification is required";
              break;
          case 'address':
              if (!value.trim()) return "Address is required";
              break;
          default:
              return undefined;
      }
      return undefined;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'mobilenumber' || name === 'aadharNumber') {
        const numericValue = value.replace(/[^0-9]/g, '');
        setFormData(prev => ({ ...prev, [name]: numericValue }));
        if (touched[name]) {
            const error = validateField(name, numericValue);
            setFormErrors(prev => ({ ...prev, [name]: error || '' }));
        }
    } else {
        setFormData(prev => ({ ...prev, [name]: value }));
        if (touched[name]) {
            const error = validateField(name, value);
            setFormErrors(prev => ({ ...prev, [name]: error || '' }));
        }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files: selectedFiles } = e.target;
    if (selectedFiles && selectedFiles[0]) {
      setFiles(prev => ({ ...prev, [name]: selectedFiles[0] }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setTouched(prev => ({ ...prev, [name]: true }));
      const error = validateField(name, value);
      setFormErrors(prev => ({ ...prev, [name]: error || '' }));
  };

  const handleCaptchaVerify = (isValid: boolean) => {
    setIsCaptchaValid(isValid);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    let isValid = true;
    
    const requiredFields = ['coursename', 'fullname', 'gender', 'dateofbirth', 'mobilenumber', 'emailid', 'caste', 'qualification', 'address'];
    
    requiredFields.forEach(field => {
        const error = validateField(field, formData[field as keyof typeof formData]);
        if (error) {
            newErrors[field] = error;
            isValid = false;
        }
    });

    // Validate Aadhar if provided
    if (formData.aadharNumber) {
        const aadharError = validateField('aadharNumber', formData.aadharNumber);
        if (aadharError) {
            newErrors.aadharNumber = aadharError;
            isValid = false;
        }
    }

    // Simple file requirements check
    if (!files.aadharCard) { newErrors.aadharCard = "Aadhar Card is required"; isValid = false; }
    if (!files.educationCertificate) { newErrors.educationCertificate = "Education Certificate is required"; isValid = false; }

    setFormErrors(newErrors);
    
    const allTouched: Record<string, boolean> = {};
    requiredFields.forEach(f => allTouched[f] = true);
    setTouched(prev => ({...prev, ...allTouched}));

    if (!isValid) {
        const firstError = document.querySelector('.error-message');
        firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
    }

    if (!isCaptchaValid) {
        alert("Please complete the security check.");
        return;
    }

    setStatus('submitting');
    setErrorMessage('');

    const TARGET_EMAIL = 'anians.890@gmail.com';
    const ENDPOINT = `https://formsubmit.co/ajax/${TARGET_EMAIL}`;

    // For files, we MUST use FormData
    const submissionData = new FormData();
    submissionData.append('_subject', `New Student Registration: ${formData.fullname}`);
    submissionData.append('_template', 'table');
    submissionData.append('_captcha', 'false');

    Object.entries(formData).forEach(([key, value]) => {
        submissionData.append(key.toUpperCase(), value);
    });

    if (files.aadharCard) submissionData.append('AADHAR_CARD_FILE', files.aadharCard);
    if (files.educationCertificate) submissionData.append('EDUCATION_CERTIFICATE_FILE', files.educationCertificate);
    if (files.casteCertificate) submissionData.append('CASTE_CERTIFICATE_FILE', files.casteCertificate);

    try {
        const response = await fetch(ENDPOINT, {
            method: 'POST',
            // Do NOT set Content-Type header when sending FormData, the browser will set it automatically with the boundary
            body: submissionData
        });

        const result = await response.json();

        if (response.ok) {
            setStatus('success');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            setStatus('error');
            setErrorMessage(result.message || 'Failed to submit enquiry. Please try again.');
        }
    } catch (error: any) {
        console.error("Submission error:", error);
        setStatus('error');
        setErrorMessage('Unable to connect to the mail server. Please check your internet connection.');
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO 
        seo={{ title: 'Student Registration | IDEMI', description: 'Online Registration for Technical Training Courses with Document Upload' }} 
        path="/student-registration" 
      />

      <div className="bg-primary text-white py-12 border-b border-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Enquiry Form (Training Courses)</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Kickstart your technical career with IDEMI. Please fill out the form and upload required documents.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
        <aside className="lg:w-1/4">
             <ServiceSidebar />
        </aside>

        <div className="lg:w-3/4">
          <Link to="/training" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-6">
            <ArrowLeft size={16} className="mr-1" /> Back to Training
          </Link>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden reveal-on-scroll">
            
            {status === 'success' ? (
              <div className="p-12 text-center flex flex-col items-center justify-center h-full animate-fade-in" role="status" aria-live="polite">
                <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-6 animate-scale-up">
                  <CheckCircle size={48} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Inquiry Registered Successfully!</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md">
                  Thank you for your interest. Your details and uploaded documents have been sent to our team. Our counselor will contact you shortly.
                </p>
                <button 
                  onClick={() => {
                      setStatus('idle');
                      setFormData({
                        coursename: '', fullname: '', aadharNumber: '', gender: '', dateofbirth: '', mobilenumber: '', 
                        emailid: '', caste: '', qualification: '', reference: '', address: '', comment: ''
                      });
                      setFiles({ aadharCard: null, educationCertificate: null, casteCertificate: null });
                      setFormErrors({});
                      setTouched({});
                      setIsCaptchaValid(false);
                  }}
                  className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition shadow-md"
                >
                  Register Another Student
                </button>
              </div>
            ) : (
              <div className="p-6 md:p-10">
                <div className="flex items-center gap-3 mb-8 border-b border-gray-100 dark:border-gray-700 pb-4">
                   <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-primary dark:text-blue-400">
                       <BookOpen size={24} />
                   </div>
                   <div>
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white">Registration Details</h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Fields marked with <span className="text-red-500">*</span> are mandatory</p>
                   </div>
                </div>

                {status === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400 text-sm flex items-center gap-2">
                        <AlertCircle size={18} />
                        {errorMessage}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  
                  {/* Course Details */}
                  <div>
                    <label htmlFor="coursename" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Course Name <span className="text-red-500">*</span></label>
                    <div className="relative">
                        <select
                            id="coursename"
                            name="coursename"
                            value={formData.coursename}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`w-full px-4 py-3 rounded-lg border ${formErrors.coursename ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary'} bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-4 focus:ring-opacity-20 outline-none transition appearance-none`}
                        >
                            <option value="">Select Course</option>
                            {COURSE_DATA.map((group, idx) => (
                                <optgroup key={idx} label={group.category} className="text-gray-900 dark:text-white font-bold bg-gray-50 dark:bg-gray-800">
                                    {group.courses.map((course, cIdx) => (
                                        <option key={cIdx} value={course} className="text-gray-700 dark:text-gray-300 font-normal bg-white dark:bg-gray-700">{course}</option>
                                    ))}
                                </optgroup>
                            ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                        </div>
                    </div>
                    {formErrors.coursename && <p className="text-red-500 text-xs mt-1 flex items-center gap-1 error-message animate-fade-in"><AlertCircle size={12}/> {formErrors.coursename}</p>}
                  </div>

                  {/* Personal Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="fullname" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Full Name <span className="text-red-500">*</span></label>
                        <div className="relative">
                            <User size={18} className="absolute left-3 top-3.5 text-gray-400" />
                            <input
                            type="text"
                            id="fullname"
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            maxLength={50}
                            className={`w-full pl-10 pr-4 py-3 rounded-lg border ${formErrors.fullname ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary'} bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-4 focus:ring-opacity-20 outline-none transition`}
                            placeholder="As per documents"
                            />
                        </div>
                        {formErrors.fullname && <p className="text-red-500 text-xs mt-1 flex items-center gap-1 error-message animate-fade-in"><AlertCircle size={12}/> {formErrors.fullname}</p>}
                      </div>

                      <div>
                        <label htmlFor="aadharNumber" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Aadhar Number</label>
                        <div className="relative">
                            <Hash size={18} className="absolute left-3 top-3.5 text-gray-400" />
                            <input
                            type="text"
                            id="aadharNumber"
                            name="aadharNumber"
                            value={formData.aadharNumber}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            maxLength={12}
                            className={`w-full pl-10 pr-4 py-3 rounded-lg border ${formErrors.aadharNumber ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary'} bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-4 focus:ring-opacity-20 outline-none transition`}
                            placeholder="12 digit number"
                            />
                        </div>
                        {formErrors.aadharNumber && <p className="text-red-500 text-xs mt-1 flex items-center gap-1 animate-fade-in"><AlertCircle size={12}/> {formErrors.aadharNumber}</p>}
                      </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="gender" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Gender <span className="text-red-500">*</span></label>
                        <select
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`w-full px-4 py-3 rounded-lg border ${formErrors.gender ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary'} bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-4 outline-none transition`}
                        >
                            <option value="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        {formErrors.gender && <p className="text-red-500 text-xs mt-1 flex items-center gap-1 error-message animate-fade-in"><AlertCircle size={12}/> {formErrors.gender}</p>}
                      </div>

                      <div>
                        <label htmlFor="dateofbirth" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Date of Birth <span className="text-red-500">*</span></label>
                        <div className="relative">
                            <Calendar size={18} className="absolute left-3 top-3.5 text-gray-400 pointer-events-none" />
                            <input
                            type="date"
                            id="dateofbirth"
                            name="dateofbirth"
                            value={formData.dateofbirth}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`w-full pl-10 pr-4 py-3 rounded-lg border ${formErrors.dateofbirth ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary'} bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-4 focus:ring-opacity-20 outline-none transition`}
                            />
                        </div>
                        {formErrors.dateofbirth && <p className="text-red-500 text-xs mt-1 flex items-center gap-1 error-message animate-fade-in"><AlertCircle size={12}/> {formErrors.dateofbirth}</p>}
                      </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="mobilenumber" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Mobile Number <span className="text-red-500">*</span></label>
                        <div className="relative">
                            <Phone size={18} className="absolute left-3 top-3.5 text-gray-400" />
                            <input
                            type="tel"
                            id="mobilenumber"
                            name="mobilenumber"
                            value={formData.mobilenumber}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            maxLength={10}
                            placeholder="10 digit number"
                            className={`w-full pl-10 pr-4 py-3 rounded-lg border ${formErrors.mobilenumber ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary'} bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-4 focus:ring-opacity-20 outline-none transition`}
                            />
                        </div>
                        {formErrors.mobilenumber && <p className="text-red-500 text-xs mt-1 flex items-center gap-1 error-message animate-fade-in"><AlertCircle size={12}/> {formErrors.mobilenumber}</p>}
                      </div>

                      <div>
                        <label htmlFor="emailid" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Email ID <span className="text-red-500">*</span></label>
                        <div className="relative">
                            <Mail size={18} className="absolute left-3 top-3.5 text-gray-400" />
                            <input
                            type="email"
                            id="emailid"
                            name="emailid"
                            value={formData.emailid}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            maxLength={50}
                            placeholder="student@example.com"
                            className={`w-full pl-10 pr-4 py-3 rounded-lg border ${formErrors.emailid ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary'} bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-4 focus:ring-opacity-20 outline-none transition`}
                            />
                        </div>
                        {formErrors.emailid && <p className="text-red-500 text-xs mt-1 flex items-center gap-1 error-message animate-fade-in"><AlertCircle size={12}/> {formErrors.emailid}</p>}
                      </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="caste" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Caste <span className="text-red-500">*</span></label>
                        <select
                            id="caste"
                            name="caste"
                            value={formData.caste}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`w-full px-4 py-3 rounded-lg border ${formErrors.caste ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary'} bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-4 outline-none transition`}
                        >
                            <option value="">Select</option>
                            <option value="General">General</option>
                            <option value="OBC">OBC</option>
                            <option value="SC">SC</option>
                            <option value="ST">ST</option>
                            <option value="EWS">EWS</option>
                            <option value="Minority">Minority</option>
                        </select>
                        {formErrors.caste && <p className="text-red-500 text-xs mt-1 flex items-center gap-1 error-message animate-fade-in"><AlertCircle size={12}/> {formErrors.caste}</p>}
                      </div>

                      <div>
                        <label htmlFor="qualification" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Educational Qualification <span className="text-red-500">*</span></label>
                        <select
                            id="qualification"
                            name="qualification"
                            value={formData.qualification}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`w-full px-4 py-3 rounded-lg border ${formErrors.qualification ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary'} bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-4 outline-none transition`}
                        >
                            <option value="">Select</option>
                            <option value="Below 10th">Below 10th</option>
                            <option value="10th Pass">10th Pass</option>
                            <option value="12th/Intermediate/PUC Pass">12th/Intermediate/PUC Pass</option>
                            <option value="Diploma">Diploma</option>
                            <option value="Bachelors Degree">Bachelors Degree</option>
                            <option value="Masters Degree">Masters Degree</option>
                            <option value="PhD">PhD</option>
                            <option value="Other">Other</option>
                        </select>
                        {formErrors.qualification && <p className="text-red-500 text-xs mt-1 flex items-center gap-1 error-message animate-fade-in"><AlertCircle size={12}/> {formErrors.qualification}</p>}
                      </div>
                  </div>

                  {/* Document Upload Section */}
                  <div className="bg-blue-50 dark:bg-gray-700/20 p-6 rounded-xl border border-blue-100 dark:border-gray-700 space-y-6">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <Upload size={20} className="text-primary dark:text-blue-400" />
                        Document Upload
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Please upload clear copies of your documents. Max size: 2MB per file.</p>
                      
                      <div className="grid md:grid-cols-3 gap-6">
                          <div>
                              <label className="block text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">Aadhar Card *</label>
                              <div className="relative group">
                                  <input 
                                    type="file" 
                                    name="aadharCard" 
                                    accept="image/*,application/pdf" 
                                    onChange={handleFileChange}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                  />
                                  <div className={`p-4 border-2 border-dashed rounded-xl flex flex-col items-center justify-center text-center transition-colors ${files.aadharCard ? 'border-green-500 bg-green-50 dark:bg-green-900/10' : 'border-gray-300 dark:border-gray-600 group-hover:border-primary dark:group-hover:border-blue-500'}`}>
                                      {files.aadharCard ? (
                                          <>
                                            <CheckCircle size={24} className="text-green-500 mb-2" />
                                            <span className="text-[10px] font-bold text-gray-700 dark:text-gray-200 truncate w-full px-2">{files.aadharCard.name}</span>
                                          </>
                                      ) : (
                                          <>
                                            <FileText size={24} className="text-gray-400 mb-2" />
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Select File</span>
                                          </>
                                      )}
                                  </div>
                              </div>
                              {formErrors.aadharCard && <p className="text-red-500 text-[10px] mt-1 font-bold italic">{formErrors.aadharCard}</p>}
                          </div>

                          <div>
                              <label className="block text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">Edu Certificate *</label>
                              <div className="relative group">
                                  <input 
                                    type="file" 
                                    name="educationCertificate" 
                                    accept="image/*,application/pdf" 
                                    onChange={handleFileChange}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                  />
                                  <div className={`p-4 border-2 border-dashed rounded-xl flex flex-col items-center justify-center text-center transition-colors ${files.educationCertificate ? 'border-green-500 bg-green-50 dark:bg-green-900/10' : 'border-gray-300 dark:border-gray-600 group-hover:border-primary dark:group-hover:border-blue-500'}`}>
                                      {files.educationCertificate ? (
                                          <>
                                            <CheckCircle size={24} className="text-green-500 mb-2" />
                                            <span className="text-[10px] font-bold text-gray-700 dark:text-gray-200 truncate w-full px-2">{files.educationCertificate.name}</span>
                                          </>
                                      ) : (
                                          <>
                                            <FileText size={24} className="text-gray-400 mb-2" />
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Select File</span>
                                          </>
                                      )}
                                  </div>
                              </div>
                              {formErrors.educationCertificate && <p className="text-red-500 text-[10px] mt-1 font-bold italic">{formErrors.educationCertificate}</p>}
                          </div>

                          <div>
                              <label className="block text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">Caste Cert (If applicable)</label>
                              <div className="relative group">
                                  <input 
                                    type="file" 
                                    name="casteCertificate" 
                                    accept="image/*,application/pdf" 
                                    onChange={handleFileChange}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                  />
                                  <div className={`p-4 border-2 border-dashed rounded-xl flex flex-col items-center justify-center text-center transition-colors ${files.casteCertificate ? 'border-green-500 bg-green-50 dark:bg-green-900/10' : 'border-gray-300 dark:border-gray-600 group-hover:border-primary dark:group-hover:border-blue-500'}`}>
                                      {files.casteCertificate ? (
                                          <>
                                            <CheckCircle size={24} className="text-green-500 mb-2" />
                                            <span className="text-[10px] font-bold text-gray-700 dark:text-gray-200 truncate w-full px-2">{files.casteCertificate.name}</span>
                                          </>
                                      ) : (
                                          <>
                                            <FileText size={24} className="text-gray-400 mb-2" />
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Select File</span>
                                          </>
                                      )}
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Address <span className="text-red-500">*</span></label>
                    <div className="relative">
                        <MapPin size={18} className="absolute left-3 top-3.5 text-gray-400" />
                        <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        maxLength={120}
                        rows={3}
                        className={`w-full pl-10 pr-4 py-3 rounded-lg border ${formErrors.address ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary'} bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-4 focus:ring-opacity-20 outline-none transition`}
                        placeholder="Max 120 characters"
                        ></textarea>
                    </div>
                    {formErrors.address && <p className="text-red-500 text-xs mt-1 flex items-center gap-1 error-message animate-fade-in"><AlertCircle size={12}/> {formErrors.address}</p>}
                  </div>

                  <div className="flex flex-col gap-4">
                      <SimpleCaptcha onVerify={handleCaptchaVerify} />
                  </div>

                  <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                    <button
                      type="submit"
                      disabled={status === 'submitting' || !isCaptchaValid}
                      className="w-full bg-primary text-white font-bold text-lg py-4 rounded-xl hover:bg-blue-800 transition shadow-lg hover:shadow-xl transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {status === 'submitting' ? (
                        <>Sending Application... <Loader2 className="animate-spin" size={20} /></>
                      ) : (
                        <>
                          Submit Registration <Send size={20} />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentRegistration;
