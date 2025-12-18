import React, { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';
import Breadcrumbs from './Breadcrumbs';
import WhatsAppChat from './WhatsAppChat';
import ScrollProgress from './ScrollProgress';
import CustomCursor from './CustomCursor';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (location.hash) {
        const elementId = location.hash.substring(1);
        const element = document.getElementById(elementId);
        
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          setTimeout(() => {
            const el = document.getElementById(elementId);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 300);
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    };

    handleScroll();
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-200 overflow-x-hidden">
      <CustomCursor />
      
      {/* Accessibility Skip Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md shadow-lg"
      >
        Skip to main content
      </a>
      
      <Header />
      <ScrollProgress />
      <Breadcrumbs />
      
      <main 
        id="main-content" 
        className="flex-grow focus:outline-none animate-fade-in relative z-10" 
        tabIndex={-1}
        key={location.pathname}
      >
        {children}
      </main>
      
      <Footer />
      <BackToTop />
      <WhatsAppChat />
    </div>
  );
};

export default Layout;
