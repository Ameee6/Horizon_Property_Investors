import {
  Home as HomeIcon,
  Users,
  Heart,
  Scale,
  Briefcase,
  Hammer,
  Building,
  MessageSquare,
  ClipboardList,
  DollarSign,
  Calendar,
  CheckCircle,
  Award,
  Shield,
  Clock,
} from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const painPoints = [
    {
      icon: HomeIcon,
      title: 'Inherited Property',
      description: 'Unexpected property you need to sell quickly',
    },
    {
      icon: Scale,
      title: 'Facing Foreclosure',
      description: 'Time-sensitive situation requiring immediate action',
    },
    {
      icon: Users,
      title: 'Tired Landlord',
      description: 'Ready to move on from rental property management',
    },
    {
      icon: Heart,
      title: 'Divorce',
      description: 'Need to sell and move forward with life',
    },
    {
      icon: Briefcase,
      title: 'Job Loss or Relocation',
      description: 'Circumstances changed and you need to sell fast',
    },
    {
      icon: Hammer,
      title: 'Costly Repairs',
      description: 'Property needs work you cant afford or manage',
    },
    {
      icon: Building,
      title: 'Vacant Property',
      description: 'Sitting empty and costing you money',
    },
  ];

  const howItWorksSteps = [
    {
      icon: MessageSquare,
      title: 'Contact Us',
      description: 'Tell us about your property',
    },
    {
      icon: DollarSign,
      title: 'Get Your Offer',
      description: 'Fair, no-obligation cash offer',
    },
    {
      icon: Calendar,
      title: 'Close Easily',
      description: 'Choose the closing date that works for you',
    },
  ];

  const benefits = [
    {
      icon: Award,
      title: 'Local & Honest Guidance',
      description: 'We understand the market and treat you with respect',
    },
    {
      icon: DollarSign,
      title: 'Fair Cash Offers',
      description: 'Transparent pricing based on current market value',
    },
    {
      icon: Hammer,
      title: 'Zero Repairs or Cleaning',
      description: 'Sell your home as-is, in any condition',
    },
    {
      icon: Shield,
      title: 'No Agent Fees or Commissions',
      description: 'Keep more money in your pocket',
    },
    {
      icon: Heart,
      title: 'Support Through Tough Situations',
      description: 'Compassionate guidance when you need it most',
    },
    {
      icon: Clock,
      title: 'Fast & Flexible Closing',
      description: 'Close on your timeline, not ours',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-purple-700/35 to-indigo-900/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Sell Your Home As-Is, Fast, and Stress-Free.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              We help homeowners find real solutions — no repairs, no fees, no pressure.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Your Cash Offer
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              We Help in Any Situation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whatever your circumstances, Horizon Property Investors offers a genuine solution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-pink-400 hover:shadow-lg transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-navy-100 p-3 rounded-lg">
                    <point.icon className="text-navy-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-800 mb-2">{point.title}</h3>
                    <p className="text-gray-600 text-sm">{point.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-navy-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our simple, three-step process makes selling your home easy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <step.icon className="text-pink-600" size={32} />
                </div>
                <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-navy-800 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('how-it-works')}
              className="text-navy-700 font-semibold hover:text-pink-600 transition-colors inline-flex items-center"
            >
              Learn More About Our Process
              <ClipboardList className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              Why Choose Horizon Property Investors
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to making your experience simple, fair, and supportive
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-pink-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-pink-200"
              >
                <div className="bg-navy-700 p-3 rounded-lg w-fit mb-4">
                  <benefit.icon className="text-pink-400" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-navy-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-slate-700 via-purple-900 to-slate-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to talk?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Get a no-pressure consultation today.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center"
          >
            Contact Us
            <CheckCircle className="ml-2" size={24} />
          </button>
        </div>
      </section>
    </div>
  );
}
