import Image from 'next/image';

export default function ServicesPage() {
  const services = [
    {
      icon: '/images/3.services/icon1.png',
      title: 'Send Texts Instantly',
      description: 'Financial planning, forecasting and adjusting rapidly with customer demands and budgets.'
    },
    {
      icon: '/images/3.services/icon2.png',
      title: 'Better Organized',
      description: 'Latest technology and experienced guidance, trained HR specialists to keep updated.'
    },
    {
      icon: '/images/3.services/icon3.png',
      title: 'Analytical Statistics',
      description: 'Messages, real-time reminders, memos, and many more will keep your team in sync.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 pt-32">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-semibold mb-4">Service</h2>
        <p className="text-gray-600">
          We offer youth with chances for career development in their practice. We also 
          support a wide range of services to ensure client satisfaction
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="h-16 w-16 mb-6 relative">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              {/* Learn More Link */}
              <a 
                href="#" 
                className="text-[#818CF8] hover:text-[#6366f1] inline-flex items-center group"
              >
                Learn More
                <svg 
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-32 left-20 w-3 h-3 bg-yellow-300 opacity-20 rotate-45"></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-8 bg-green-300 opacity-20 rounded-full"></div>
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-blue-300 opacity-20"></div>
      </div>
    </div>
  );
}