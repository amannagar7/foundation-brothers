import React, { useEffect, useState } from 'react';
import { CheckCircle, Mail, Heart, Sparkles, Rocket, Star } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose, duration = 4000 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    const timer1 = setTimeout(() => setIsVisible(true), 100);
    
    // Auto close after duration
    const timer2 = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onClose, 300); // Wait for exit animation
    }, duration);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [duration, onClose]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(onClose, 300);
  };

  const getIcon = () => {
    if (type === 'success') {
      const icons = [CheckCircle, Mail, Heart, Sparkles, Rocket, Star];
      const Icon = icons[Math.floor(Math.random() * icons.length)];
      return <Icon className="h-6 w-6 text-green-600" />;
    }
    return <CheckCircle className="h-6 w-6 text-red-600" />;
  };

  const getBackgroundColor = () => {
    return type === 'success' 
      ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' 
      : 'bg-gradient-to-r from-red-50 to-pink-50 border-red-200';
  };

  const getTextColor = () => {
    return type === 'success' ? 'text-green-800' : 'text-red-800';
  };

  return (
    <div
      className={`fixed top-4 right-4 z-50 transform transition-all duration-300 ease-in-out ${
        isVisible && !isExiting 
          ? 'translate-x-0 opacity-100 scale-100' 
          : 'translate-x-full opacity-0 scale-95'
      }`}
    >
      <div
        className={`max-w-sm w-full ${getBackgroundColor()} border rounded-xl shadow-lg backdrop-blur-sm`}
      >
        <div className="p-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              {getIcon()}
            </div>
            <div className="flex-1 min-w-0">
              <p className={`text-sm font-medium ${getTextColor()}`}>
                {message}
              </p>
            </div>
            <div className="flex-shrink-0">
              <button
                onClick={handleClose}
                className={`inline-flex ${getTextColor()} hover:opacity-70 transition-opacity`}
              >
                <span className="sr-only">Close</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="h-1 bg-white/20 rounded-b-xl overflow-hidden">
          <div 
            className={`h-full ${type === 'success' ? 'bg-green-400' : 'bg-red-400'} transition-all ease-linear`}
            style={{
              animation: `shrink ${duration}ms linear forwards`
            }}
          />
        </div>
      </div>
      
      <style>{`
        @keyframes shrink {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  );
};

export default Toast;
