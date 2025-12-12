import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL || '',
  import.meta.env.VITE_SUPABASE_ANON_KEY || ''
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    property_address: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.property_address.trim()) {
      newErrors.property_address = 'Property address is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitStatus('idle');

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        property_address: '',
        message: '',
      });
      setErrors({});
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-navy-700 to-navy-800 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Talk — No Pressure, No Obligations
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            We're here to help you understand your options and find the best path forward.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-navy-800 mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form and we'll be in touch within 24 hours. No obligation, just honest answers to your questions.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gold-100 p-3 rounded-lg">
                    <Phone className="text-gold-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-800 mb-1">Phone</h3>
                    <a
                      href="tel:+15551234567"
                      className="text-gray-600 hover:text-gold-600 transition-colors"
                    >
                      (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gold-100 p-3 rounded-lg">
                    <Mail className="text-gold-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-800 mb-1">Email</h3>
                    <a
                      href="mailto:info@horizonpropertyinvestors.com"
                      className="text-gray-600 hover:text-gold-600 transition-colors"
                    >
                      info@horizonpropertyinvestors.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gold-100 p-3 rounded-lg">
                    <MapPin className="text-gold-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-800 mb-1">Service Area</h3>
                    <p className="text-gray-600">
                      Serving homeowners throughout the local area
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-br from-navy-50 to-gold-50 rounded-xl p-6">
                <h3 className="font-semibold text-navy-800 mb-3">What to Expect</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="text-gold-600 mr-2 flex-shrink-0 mt-0.5" size={20} />
                    <span>Response within 24 hours</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-gold-600 mr-2 flex-shrink-0 mt-0.5" size={20} />
                    <span>Brief, friendly conversation about your property</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-gold-600 mr-2 flex-shrink-0 mt-0.5" size={20} />
                    <span>No-obligation cash offer if we're a good fit</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-gold-600 mr-2 flex-shrink-0 mt-0.5" size={20} />
                    <span>Zero pressure to accept</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-semibold text-navy-800 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 transition-colors ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John Smith"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle size={14} className="mr-1" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-semibold text-navy-800 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle size={14} className="mr-1" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-semibold text-navy-800 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle size={14} className="mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <label htmlFor="property_address" className="block text-sm font-semibold text-navy-800 mb-2">
                    Property Address *
                  </label>
                  <input
                    type="text"
                    id="property_address"
                    name="property_address"
                    value={formData.property_address}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 transition-colors ${
                      errors.property_address ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="123 Main St, City, State ZIP"
                  />
                  {errors.property_address && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle size={14} className="mr-1" />
                      {errors.property_address}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-semibold text-navy-800 mb-2">
                    Tell Us About Your Situation (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 transition-colors resize-none"
                    placeholder="Share any details that would help us understand your needs..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="mb-6 bg-green-50 border-2 border-green-500 rounded-lg p-4 flex items-start">
                    <CheckCircle className="text-green-600 mr-3 flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <p className="font-semibold text-green-800">Thank you for reaching out!</p>
                      <p className="text-sm text-green-700">We'll be in touch within 24 hours.</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 bg-red-50 border-2 border-red-500 rounded-lg p-4 flex items-start">
                    <AlertCircle className="text-red-600 mr-3 flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <p className="font-semibold text-red-800">Something went wrong</p>
                      <p className="text-sm text-red-700">Please try again or call us directly.</p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold-600 transition-all shadow-lg hover:shadow-xl disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="animate-spin mr-2" size={20} />
                      Sending...
                    </>
                  ) : (
                    'Get Your Cash Offer'
                  )}
                </button>

                <p className="mt-4 text-xs text-gray-500 text-center">
                  By submitting this form, you agree to be contacted about your property. No spam, we promise.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
