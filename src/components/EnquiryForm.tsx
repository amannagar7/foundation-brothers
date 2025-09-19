import React, { useState } from 'react';
import { X, ChevronDown, Check } from 'lucide-react';

interface EnquiryFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnquiryForm: React.FC<EnquiryFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    constructionType: '',
    customConstructionType: '',
    startTimeline: '',
    propertySize: '',
    address: '',
    name: '',
    phone: '',
    email: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const constructionTypes = [
    'Home construction',
    'Commercial construction',
    'Interior design & construction',
    'Vastu Consultation',
    'Renovation',
    'Office building',
    'Hospital construction',
    'Others'
  ];

  const startTimelines = [
    'Immediately',
    'Within 1 month',
    'Within 3 months',
    'Within 6 months',
    'Within 1 year'
  ];

  const propertySizes = [
    '100 To 200 Sq. Yards',
    '200 To 300 Sq. Yards',
    '300 Sq. Yards or more'
  ];

  const [openDropdowns, setOpenDropdowns] = useState({
    constructionType: false,
    startTimeline: false,
    propertySize: false
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }));
  };

  const selectOption = (dropdown: string, value: string) => {
    handleInputChange(dropdown, value);
    setOpenDropdowns(prev => ({ ...prev, [dropdown]: false }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.constructionType) newErrors.constructionType = 'Please select construction type';
    if (!formData.startTimeline) newErrors.startTimeline = 'Please select timeline';
    if (!formData.propertySize) newErrors.propertySize = 'Please select property size';
    if (!formData.address.trim()) newErrors.address = 'Please enter address';
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.phone.trim()) newErrors.phone = 'Please enter your phone number';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      const message = `New Enquiry:
Construction Type: ${formData.constructionType}${formData.customConstructionType ? ` (${formData.customConstructionType})` : ''}
Timeline: ${formData.startTimeline}
Property Size: ${formData.propertySize}
Address: ${formData.address}
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}`;

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email || 'not-provided@example.com',
          phone: formData.phone,
          message: message
        }),
      });

      if (response.ok) {
        console.log('Form submitted successfully, showing success notification');
        setShowSuccess(true);
        setTimeout(() => {
          console.log('Auto-closing success notification');
          setShowSuccess(false);
          onClose();
          // Reset form
          setFormData({
            constructionType: '',
            customConstructionType: '',
            startTimeline: '',
            propertySize: '',
            address: '',
            name: '',
            phone: '',
            email: ''
          });
        }, 3000);
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal */}
        <div 
          className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gray-50 px-6 py-4 rounded-t-2xl flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">
              Send us your enquiry, get a call back from us
            </h2>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Project Details */}
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-4 border-b border-gray-200 pb-2">
                  Project details
                </h3>
                
                <div className="space-y-4">
                  {/* Construction Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      What exactly are you looking for?<span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => toggleDropdown('constructionType')}
                        className={`w-full px-4 py-3 border rounded-lg text-left flex items-center justify-between ${
                          errors.constructionType ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      >
                        <span className={formData.constructionType ? 'text-gray-900' : 'text-gray-500'}>
                          {formData.constructionType || 'Select your type of construction'}
                        </span>
                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${
                          openDropdowns.constructionType ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {openDropdowns.constructionType && (
                        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                          {constructionTypes.map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => selectOption('constructionType', type)}
                              className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center justify-between"
                            >
                              <span>{type}</span>
                              {formData.constructionType === type && (
                                <Check className="w-4 h-4 text-blue-500" />
                              )}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    {errors.constructionType && (
                      <p className="mt-1 text-sm text-red-500">{errors.constructionType}</p>
                    )}
                  </div>

                  {/* Custom Construction Type */}
                  {formData.constructionType === 'Others' && (
                    <div>
                      <input
                        type="text"
                        value={formData.customConstructionType}
                        onChange={(e) => handleInputChange('customConstructionType', e.target.value)}
                        placeholder="Write here_"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  )}

                  {/* Start Timeline */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      When do you plan to start the construction?<span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => toggleDropdown('startTimeline')}
                        className={`w-full px-4 py-3 border rounded-lg text-left flex items-center justify-between ${
                          errors.startTimeline ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      >
                        <span className={formData.startTimeline ? 'text-gray-900' : 'text-gray-500'}>
                          {formData.startTimeline || 'Select'}
                        </span>
                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${
                          openDropdowns.startTimeline ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {openDropdowns.startTimeline && (
                        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                          {startTimelines.map((timeline) => (
                            <button
                              key={timeline}
                              type="button"
                              onClick={() => selectOption('startTimeline', timeline)}
                              className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center justify-between"
                            >
                              <span>{timeline}</span>
                              {formData.startTimeline === timeline && (
                                <Check className="w-4 h-4 text-blue-500" />
                              )}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    {errors.startTimeline && (
                      <p className="mt-1 text-sm text-red-500">{errors.startTimeline}</p>
                    )}
                  </div>

                  {/* Property Size */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Size of your property/plot?<span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => toggleDropdown('propertySize')}
                        className={`w-full px-4 py-3 border rounded-lg text-left flex items-center justify-between ${
                          errors.propertySize ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      >
                        <span className={formData.propertySize ? 'text-gray-900' : 'text-gray-500'}>
                          {formData.propertySize || 'Select'}
                        </span>
                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${
                          openDropdowns.propertySize ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {openDropdowns.propertySize && (
                        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                          {propertySizes.map((size) => (
                            <button
                              key={size}
                              type="button"
                              onClick={() => selectOption('propertySize', size)}
                              className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center justify-between"
                            >
                              <span>{size}</span>
                              {formData.propertySize === size && (
                                <Check className="w-4 h-4 text-blue-500" />
                              )}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    {errors.propertySize && (
                      <p className="mt-1 text-sm text-red-500">{errors.propertySize}</p>
                    )}
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      What is the address of the plot?<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      placeholder="Write here_"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.address ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.address && (
                      <p className="mt-1 text-sm text-red-500">{errors.address}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-4 border-b border-gray-200 pb-2">
                  Contact details
                </h3>
                
                <div className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Write here_"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+91-"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email id
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="abc@mail.com"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gray-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Notification */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center animate-scale-in relative">
            <button
              onClick={() => {
                setShowSuccess(false);
                onClose();
                // Reset form
                setFormData({
                  constructionType: '',
                  customConstructionType: '',
                  startTimeline: '',
                  propertySize: '',
                  address: '',
                  name: '',
                  phone: '',
                  email: ''
                });
              }}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>
            
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-in">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              🎉 Thank You!
            </h3>
            
            <p className="text-gray-600 mb-6 text-lg">
              Your enquiry has been submitted successfully. Our team will get back to you within 24 hours.
            </p>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <p className="text-green-800 text-sm font-medium">
                ✅ We've received your project details and will contact you soon!
              </p>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-green-500 h-3 rounded-full animate-pulse" style={{width: '100%'}}></div>
            </div>
            
            <p className="text-xs text-gray-500 mt-2">
              This window will close automatically in 3 seconds
            </p>
          </div>
        </div>
      )}
      
      <style>{`
        @keyframes scale-in {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes bounce-in {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out;
        }
      `}</style>
    </>
  );
};

export default EnquiryForm;
