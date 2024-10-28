import Image from 'next/image';

export default function FeaturesPage() {
  const features = [
    {
      title: "Encrypted Mail",
      description: "A process of encrypting email communications",
      icon: "/images/5.features/icon1.png"
    },
    {
      title: "Display Sharing",
      description: "With other participants, you may share your screen",
      icon: "/images/5.features/icon2.png"
    },
    {
      title: "Private Notebook",
      description: "Private Notebook is an application that is protected",
      icon: "/images/5.features/icon3.png"
    },
    {
      title: "App App Assistance",
      description: "App Assistant is quickly and effectively ran the system",
      icon: "/images/5.features/icon4.png"
    },
    {
      title: "Multiple Printing",
      description: "Our canvas prints are crafted on top-notch canvas.",
      icon: "/images/5.features/icon5.png"
    },
    {
      title: "Free Sketch",
      description: "Our canvas prints are crafted on top-notch canvas.",
      icon: "/images/5.features/icon6.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 pt-32">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-semibold mb-4">Features</h2>
        <p className="text-gray-600">
          We provide a number of excellent features that will undoubtedly improve the 
          user experience. We also provide a better support system
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 group"
            >
              {/* Icon Container */}
              <div className="relative w-16 h-16 mb-6">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  fill
                  className="object-contain z-10"
                />
                <div className="absolute top-2 left-2 w-12 h-12 bg-[#818CF8] bg-opacity-10 rounded-xl -z-0 group-hover:scale-110 transition-transform duration-300"></div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-blue-200 opacity-20 rotate-45"></div>
        <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-purple-200 opacity-20 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/3 w-8 h-8 bg-yellow-200 opacity-20"></div>
      </div>
    </div>
  );
}