import Image from 'next/image';

export default function DetailsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 pt-32">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4">
              A creative team which builds stunning UI/UX
            </h2>
            <p className="text-gray-600 mb-6">
              Today, I'd like to show you some incredible Sign Up screen app 
              to take sign concept that offer a modern and extensive.
              The most stunning, cutting-edge UI/UX.
            </p>
            <div className="mb-6">
              <p className="text-gray-600">
                Klean is a free Bootstrap 5 template for multipurpose landing pages. 
                This design is a perfect choice, carefully curated by ThemeWagon
              </p>
            </div>
            <button className="bg-[#6366f1] text-white px-6 py-3 rounded-lg hover:bg-[#4f46e5] transition-colors">
              Read More
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="lg:w-1/2">
            <div className="relative">
              <Image
                src="/images/4.details/illustration1.png"
                alt="Team working on UI/UX"
                width={600}
                height={400}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Image */}
          <div className="lg:w-1/2">
            <div className="relative">
              <Image
                src="/images/4.details/illustration2.png"
                alt="Team collaboration"
                width={600}
                height={400}
                className="rounded-2xl"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4">
              Devoted to defining the cutting edge
            </h2>
            <p className="text-gray-600 mb-6">
              "The hero creation is cutting-edge technology," says the 
              researcher, "whose study originates from a baseline 
              at the forefront of space science."
            </p>
            <div className="mb-6">
              <p className="text-gray-600">
                Klean is a free Bootstrap 5 template for multipurpose landing 
                pages. This design is a perfect choice, carefully curated by 
                ThemeWagon
              </p>
            </div>
            <button className="bg-[#6366f1] text-white px-6 py-3 rounded-lg hover:bg-[#4f46e5] transition-colors">
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-200 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-blue-200 rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-yellow-200 rounded-full"></div>
      </div>
    </div>
  );
}