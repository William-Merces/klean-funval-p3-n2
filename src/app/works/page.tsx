import Image from 'next/image';

export default function WorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 pt-32">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-semibold mb-4">Our Projects</h2>
        <p className="text-gray-600">
          A project is a single or team activity, combining research and design with best 
          effort. Here are some of our team's projects
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="col-span-12 md:col-span-4 space-y-6">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
              <Image
                src="/images/6.projects/image1.png"
                alt="Project 1"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
              <Image
                src="/images/6.projects/image4.png"
                alt="Project 4"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Middle Column */}
          <div className="col-span-12 md:col-span-4 md:-mt-12 space-y-6">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
              <Image
                src="/images/6.projects/image2.png"
                alt="Project 2"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
              <Image
                src="/images/6.projects/image5.png"
                alt="Project 5"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-12 md:col-span-4 space-y-6">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
              <Image
                src="/images/6.projects/image3.png"
                alt="Project 3"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
              <Image
                src="/images/6.projects/image6.png"
                alt="Project 6"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-purple-200 opacity-20 rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-blue-200 opacity-20 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-yellow-200 opacity-20"></div>
      </div>

      {/* Exclusively Section */}
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h3 className="text-2xl md:text-3xl text-[#818CF8] font-semibold mb-4">
          Exclusively by ThemeWagon
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Klean is an elegant HTML5 template and a perfect starting point for your next 
          SaaS oriented site, carefully curated by ThemeWagon
        </p>
        <button className="px-6 py-3 bg-[#818CF8] text-white rounded-full hover:bg-[#6366f1] transition-colors">
          Download Free
        </button>
      </div>
    </div>
  );
}