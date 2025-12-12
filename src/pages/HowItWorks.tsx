import {
  Phone,
  Home,
  DollarSign,
  Calendar,
  CheckCircle,
  MessageSquare,
  ClipboardCheck,
  Handshake,
  ArrowRight,
} from 'lucide-react';

interface HowItWorksProps {
  onNavigate: (page: string) => void;
}

export default function HowItWorks({ onNavigate }: HowItWorksProps) {
  const steps = [
    {
      number: 1,
      icon: MessageSquare,
      title: 'Reach Out',
      description: 'Fill out a simple form or call us. We\'ll ask a few quick questions.',
      details:
        'Getting started is easy. Just reach out via our contact form or give us a call. We\'ll have a brief, friendly conversation about your property and situation. No pressure, no obligation — just a genuine conversation to understand your needs.',
      color: 'from-navy-500 to-navy-600',
    },
    {
      number: 2,
      icon: Home,
      title: 'Property Review',
      description: 'We take a look at the home — no cleaning or repairs needed.',
      details:
        'We\'ll schedule a convenient time to view your property. Don\'t worry about cleaning, staging, or making repairs. We want to see your home exactly as it is. Our review is quick, respectful, and straightforward.',
      color: 'from-navy-600 to-navy-700',
    },
    {
      number: 3,
      icon: DollarSign,
      title: 'Fair Cash Offer',
      description: 'Transparent, no-obligation offer based on local market and condition.',
      details:
        'After reviewing your property, we\'ll present you with a fair cash offer. Our offers are based on current market conditions, the property\'s condition, and local comps. There\'s no obligation — take your time to consider it.',
      color: 'from-pink-500 to-pink-600',
    },
    {
      number: 4,
      icon: Calendar,
      title: 'You Choose the Closing Date',
      description: 'Fast closing or extra time if needed.',
      details:
        'If you accept our offer, you choose when to close. Need to move out quickly? We can close in as little as 7 days. Need more time to plan your move? No problem — we work on your timeline.',
      color: 'from-pink-600 to-pink-700',
    },
    {
      number: 5,
      icon: CheckCircle,
      title: 'Get Paid',
      description: 'Straightforward, secure process.',
      details:
        'At closing, you\'ll receive your cash payment. We handle all the paperwork and make the process as smooth as possible. No surprises, no hidden fees — just a straightforward transaction.',
      color: 'from-navy-700 to-navy-800',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Selling a home shouldn't feel overwhelming — we make the process simple.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative"
              >
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-12 top-24 w-0.5 h-32 bg-gradient-to-b from-pink-400 to-navy-400"></div>
                )}

                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className={`flex-shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                    <step.icon className="text-white" size={40} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                        {step.number}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold text-navy-800">
                        {step.title}
                      </h2>
                    </div>
                    <p className="text-lg font-semibold text-navy-600 mb-3">
                      {step.description}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {step.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-pink-50 to-navy-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <Handshake className="text-pink-600 mx-auto mb-4" size={48} />
              <h2 className="text-3xl font-bold text-navy-800 mb-4">
                No Pressure, Just Solutions
              </h2>
              <p className="text-lg text-gray-600">
                We understand that selling your home is a big decision. That's why we make the process transparent, straightforward, and completely pressure-free. You're in control every step of the way.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4">
                <ClipboardCheck className="text-navy-600 mx-auto mb-3" size={32} />
                <h3 className="font-semibold text-navy-800 mb-2">No Obligations</h3>
                <p className="text-sm text-gray-600">Get an offer with zero commitment</p>
              </div>
              <div className="text-center p-4">
                <Phone className="text-navy-600 mx-auto mb-3" size={32} />
                <h3 className="font-semibold text-navy-800 mb-2">Quick Response</h3>
                <p className="text-sm text-gray-600">Hear back within 24 hours</p>
              </div>
              <div className="text-center p-4">
                <CheckCircle className="text-navy-600 mx-auto mb-3" size={32} />
                <h3 className="font-semibold text-navy-800 mb-2">Simple Process</h3>
                <p className="text-sm text-gray-600">No complicated paperwork or hassles</p>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center"
              >
                Start the Process
                <ArrowRight className="ml-2" size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
