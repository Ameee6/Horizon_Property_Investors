import { Heart, Target, Shield, Users, MessageCircle, TrendingUp, ArrowRight } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We understand that every situation is unique and often challenging. We approach each homeowner with empathy and respect.',
    },
    {
      icon: Shield,
      title: 'Honesty',
      description: 'Transparency is at the core of everything we do. No hidden fees, no surprises — just straightforward communication.',
    },
    {
      icon: Target,
      title: 'Clarity',
      description: 'We make the process simple and clear, so you always know what to expect and can make informed decisions.',
    },
    {
      icon: Users,
      title: 'Local Expertise',
      description: 'As local investors, we understand the market and community, providing insights that matter to you.',
    },
  ];

  const mission = [
    {
      icon: MessageCircle,
      title: 'Simple Process',
      description: 'No complicated paperwork or endless showings',
    },
    {
      icon: Shield,
      title: 'Fair Offers',
      description: 'Transparent pricing you can trust',
    },
    {
      icon: Heart,
      title: 'Respect for Your Situation',
      description: 'Understanding and support when you need it',
    },
    {
      icon: TrendingUp,
      title: 'Transparent Communication',
      description: 'Clear answers to all your questions',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Committed to Helping Homeowners Find Real Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Guiding you through difficult real estate situations with honesty, clarity, and compassion
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Horizon Property Investors was created to help people navigate difficult real estate situations with honesty, clarity, and compassion.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We've seen firsthand how overwhelming selling a home can be — especially during stressful life events — and we're committed to offering real options, not pressure.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe everyone deserves a chance to move forward and see a better horizon.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-pink-50 to-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              To give homeowners a genuine alternative with support and respect
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {mission.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-100 p-3 rounded-lg flex-shrink-0">
                    <item.icon className="text-pink-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-navy-600 to-navy-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <value.icon className="text-pink-400" size={36} />
                </div>
                <h3 className="text-xl font-semibold text-navy-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-slate-700 via-purple-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              A Different Approach to Real Estate
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              We're not just investors — we're problem solvers dedicated to helping you find the best path forward.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center"
            >
              Contact Us to See How We Can Help
              <ArrowRight className="ml-2" size={24} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
