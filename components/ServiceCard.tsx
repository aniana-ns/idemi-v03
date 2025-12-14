
import React, { useState, useEffect } from 'react';
import { ArrowRight, Activity, Scale, Wrench, Printer, Zap, Settings, Search, Database, ChevronLeft, ChevronRight, Layers, CheckCircle, Cpu, RefreshCw, Briefcase, Droplet, Gauge, Shield, Radio, Thermometer, Image as ImageIcon } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
}

const iconMap: Record<string, React.ReactNode> = {
  'Activity': <Activity size={24} aria-hidden="true" />,
  'Scale': <Scale size={24} aria-hidden="true" />,
  'Wrench': <Wrench size={24} aria-hidden="true" />,
  'Printer': <Printer size={24} aria-hidden="true" />,
  'Zap': <Zap size={24} aria-hidden="true" />,
  'Settings': <Settings size={24} aria-hidden="true" />,
  'Search': <Search size={24} aria-hidden="true" />,
  'Database': <Database size={24} aria-hidden="true" />,
  'Layers': <Layers size={24} aria-hidden="true" />,
  'Cpu': <Cpu size={24} aria-hidden="true" />,
  'RefreshCw': <RefreshCw size={24} aria-hidden="true" />,
  'Briefcase': <Briefcase size={24} aria-hidden="true" />,
  'Droplet': <Droplet size={24} aria-hidden="true" />,
  'Gauge': <Gauge size={24} aria-hidden="true" />,
  'Shield': <Shield size={24} aria-hidden="true" />,
  'Radio': <Radio size={24} aria-hidden="true" />,
  'Thermometer': <Thermometer size={24} aria-hidden="true" />
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  
  const images = service.gallery && service.gallery.length > 0 
    ? service.gallery 
    : (service.image ? [service.image] : []);

  const hasGallery = images.length > 1;

  useEffect(() => {
    setLoadedImages({});
    setCurrentSlide(0);
  }, [service.id]);

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const getOptimizedUrl = (url: string, width: number) => {
     if (url.includes('unsplash.com')) {
         const baseUrl = url.split('?')[0];
         return `${baseUrl}?auto=format&fit=crop&q=80&w=${width}`;
     }
     return url;
  };

  return (
    <div 
      className="group relative flex flex-col h-full bg-white dark:bg-gray-800 hover:bg-secondary dark:hover:bg-secondary rounded-xl shadow-md hover:shadow-2xl border border-gray-200 dark:border-gray-700 hover:border-secondary dark:hover:border-secondary transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] overflow-hidden"
      itemScope 
      itemType="https://schema.org/Service"
      aria-label={`View details for ${service.title}`}
    >
      <meta itemProp="serviceType" content={service.title} />
      
      {/* Image Area */}
      <div className="relative h-56 overflow-hidden bg-gray-200 dark:bg-gray-700">
        {images.length > 0 ? (
            <>
              {!loadedImages[currentSlide] && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 animate-pulse">
                      <ImageIcon className="text-gray-400 opacity-50" size={48} />
                  </div>
              )}

              {images.map((img, index) => (
                  <img 
                    key={index}
                    src={getOptimizedUrl(img, 600)}
                    alt={`${service.title} - View ${index + 1}`} 
                    onLoad={() => handleImageLoad(index)}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105 
                        ${index === currentSlide ? 'z-20 opacity-100' : 'z-0 opacity-0'}
                    `}
                  />
              ))}
              
              {hasGallery && (
                  <>
                    <button 
                      onClick={prevSlide} 
                      className="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-1.5 bg-black/30 hover:bg-black/50 text-white rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 hover:scale-110 focus:opacity-100"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button 
                      onClick={nextSlide} 
                      className="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-1.5 bg-black/30 hover:bg-black/50 text-white rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 hover:scale-110 focus:opacity-100"
                      aria-label="Next image"
                    >
                      <ChevronRight size={20} />
                    </button>
                    
                    {/* Indicators */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {images.map((_, idx) => (
                        <div 
                          key={idx} 
                          className={`w-1.5 h-1.5 rounded-full shadow-sm transition-all duration-300 ${idx === currentSlide ? 'bg-white scale-125 w-3' : 'bg-white/50'}`} 
                        />
                      ))}
                    </div>
                  </>
              )}
            </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-50 dark:bg-gray-800">
             <Settings size={40} strokeWidth={1.5} />
          </div>
        )}
        
        {/* Floating Icon Badge */}
        <div className="absolute top-4 right-4 z-30 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-2 rounded-lg text-primary dark:text-blue-400 shadow-sm border border-white/20 group-hover:scale-110 transition-all duration-300 group-hover:bg-white group-hover:text-secondary">
          {iconMap[service.iconName] || <Settings size={20} aria-hidden="true" />}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow relative z-10">
        {/* Title turns white on hover */}
        <h3 itemProp="name" className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-white transition-colors duration-200 leading-tight">
          {service.title}
        </h3>
        
        {/* Description turns white/90 on hover for readability against orange */}
        <p itemProp="description" className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow group-hover:text-white/90 transition-colors">
            {service.description}
        </p>
        
        {/* Features / Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
            {(service.features ? service.features : service.tags || []).slice(0, 2).map((feat, idx) => (
                <span key={idx} className="inline-flex items-center px-2 py-1 rounded text-[10px] font-bold bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 uppercase tracking-wide group-hover:bg-white/20 group-hover:text-white transition-colors border border-gray-200 dark:border-gray-600 group-hover:border-white/30">
                    {feat}
                </span>
            ))}
        </div>

        {/* Footer Link / Button */}
        <div className="mt-auto">
            <div className="w-full py-2.5 px-4 bg-gray-50 dark:bg-gray-700/50 text-primary dark:text-blue-400 text-center rounded-lg font-bold text-sm transition-all duration-300 group-hover:bg-white group-hover:text-secondary flex items-center justify-center gap-2 border border-gray-100 dark:border-gray-700 group-hover:border-transparent group-hover:shadow-md">
                Learn More
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </div>
        </div>
      </div>
      
      {/* Subtle border gradient on hover */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/10 rounded-xl pointer-events-none transition-all duration-300"></div>
    </div>
  );
};

export default ServiceCard;
