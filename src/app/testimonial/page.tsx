import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const companies = [
    { name: 'Google', src: '/images/2.home/google.png' },
    { name: 'Netflix', src: '/images/2.home/netflix.png' },
    { name: 'Microsoft', src: '/images/2.home/microsoft.png' },
    { name: 'MailBluster', src: '/images/2.home/mailbuster.png' },
    { name: 'ThemeWagon', src: '/images/2.home/themewagon.png' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 text-left mb-12 lg:mb-0">
            <h1 className="text-[#818CF8] text-6xl font-normal mb-6">
              Bootstrap 5 theme
            </h1>
            <h2 className="text-3xl mb-6">
              crafted by <span className="text-gray-900">ThemeWagon</span>
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              ThemeWagon offers an wide array of category-oriented
              Free and Premium Bootstrap HTML Templates and Themes.
            </p>
            <Link
              href="#"
              className="inline-block bg-[#818CF8] text-white px-8 py-3 rounded-lg text-sm hover:bg-[#6366f1] transition-colors"
            >
              Check Demo
            </Link>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2">
            <Image
              src="/images/2.home/illustration1.png"
              alt="Team illustration"
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
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {companies.map((company) => (
            <Image
              key={company.name}
              src={company.src}
              alt={`${company.name} logo`}
              width={120}
              height={40}
              className="h-6 w-auto opacity-40 hover:opacity-60 transition-opacity"
            />
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Colored shapes */}
        <div className="absolute top-32 left-20 w-3 h-3 bg-yellow-300 opacity-20 rotate-45"></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-8 bg-green-300 opacity-20 rounded-full"></div>
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-blue-300 opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-purple-300 opacity-20 rounded-full"></div>
      </div>
    </div>
  );
}