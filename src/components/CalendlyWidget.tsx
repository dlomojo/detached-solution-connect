import { useEffect } from 'react';

const CalendlyWidget = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: 'https://calendly.com/dloimage/30min',
          text: 'Schedule a Consulting session',
          color: '#2563eb',
          textColor: '#ffffff',
          branding: true
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

declare global {
  interface Window {
    Calendly: any;
  }
}

export default CalendlyWidget;