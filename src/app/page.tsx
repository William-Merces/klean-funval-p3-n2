import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const companies = [
    { name: 'Google', src: '/images/2.home/google.png' },
    { name: 'Microsoft', src: '/images/2.home/microsoft.png' },
    { name: 'Netflix', src: '/images/2.home/netflix.png' },
    { name: 'MailBluster', src: '/images/2.home/mailbuster.png' },
    { name: 'ThemeWagon', src: '/images/2.home/themewagon.png' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-[#6366f1]">Bootstrap 5 theme</span>
            </h1>
            <h2 className="text-3xl text-gray-700 mb-6">
              crafted by <span className="text-gray-900">ThemeWagon</span>
            </h2>
            <p className="text-gray-600 mb-8">
              ThemeWagon offers an wide array of category-oriented
              Free and Premium Bootstrap HTML Templates and Themes.
            </p>
            <Link
              href="#demo"
              className="inline-block bg-[#6366f1] text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-[#4f46e5] transition-colors"
            >
              Check Demo
            </Link>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2">
            <Image
              src="/images/2.home/illustration1.png"
              alt="Hero Illustration"
              width={600}
              height={500}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>

      {/* Companies Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {companies.map((company) => (
            <Image
              key={company.name}
              src={company.src}
              alt={`${company.name} logo`}
              width={120}
              height={40}
              className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity"
            />
          ))}
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