import Image from 'next/image';

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 pt-32">
      {/* First Section */}
      <div className="max-w-7xl mx-auto px-4 mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">
              A creative team which builds stunning UI/UX
            </h2>
            <p className="text-gray-600">
              Today, I'd like to show you some incredible Sign Up screen app 
              to take sign concept that offer a modern and extensive.
              The most stunning, cutting-edge UI/UX.
            </p>
            <p className="text-gray-600">
              Klean is a free Bootstrap 5 template for multipurpose landing pages. 
              This design is a perfect choice, carefully curated by ThemeWagon
            </p>
            <button className="px-6 py-3 bg-[#818CF8] text-white rounded-full hover:bg-[#6366f1] transition-colors">
              Read More
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -z-10 w-full h-full bg-purple-100 rounded-3xl blur-3xl opacity-30"></div>
            <Image
              src="/images/7.team/image1.png"
              alt="UI/UX Design Setup"
              width={600}
              height={400}
              className="rounded-3xl w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="max-w-7xl mx-auto px-4 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -z-10 w-full h-full bg-blue-100 rounded-3xl blur-3xl opacity-30"></div>
            <Image
              src="/images/7.team/image2.png"
              alt="Team Collaboration"
              width={600}
              height={400}
              className="rounded-3xl w-full h-auto"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">
              Devoted to defining the cutting edge
            </h2>
            <p className="text-gray-600">
              "The hero creation is cutting-edge technology," says the 
              researcher, "whose study originates from a baseline 
              at the forefront of space science."
            </p>
            <p className="text-gray-600">
              Klean is a free Bootstrap 5 template for multipurpose landing 
              pages. This design is a perfect choice, carefully curated by 
              ThemeWagon
            </p>
            <button className="px-6 py-3 bg-[#818CF8] text-white rounded-full hover:bg-[#6366f1] transition-colors">
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-yellow-200 opacity-20"></div>
        <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-purple-200 opacity-20 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-blue-200 opacity-20 rotate-45"></div>
      </div>
    </div>
  );
}