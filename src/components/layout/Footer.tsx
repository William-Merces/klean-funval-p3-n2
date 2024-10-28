export default function Footer() {
    return (
      <footer className="bg-gradient-to-br from-purple-50 via-white to-blue-50 pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Footer Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            {/* About Column */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-[#818CF8]">Prices</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#818CF8]">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#818CF8]">Services</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#818CF8]">Career</a></li>
              </ul>
            </div>
  
            {/* Resources Column */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-[#818CF8]">Terms</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#818CF8]">Help</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#818CF8]">Privacy</a></li>
              </ul>
            </div>
  
            {/* Team Column */}
            <div>
              <h4 className="font-semibold mb-4">Team</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-[#818CF8]">Developer</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#818CF8]">Designer</a></li>
              </ul>
            </div>
  
            {/* Blog Column */}
            <div>
              <h4 className="font-semibold mb-4">Blog</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-[#818CF8]">CEO</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#818CF8]">Lifestyle</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#818CF8]">Article</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#818CF8]">Tech</a></li>
              </ul>
            </div>
  
            {/* Follow Us Column */}
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-[#818CF8]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-[#818CF8]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.28-.03-.56-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-[#818CF8]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-[#818CF8]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-8">
            <p className="text-gray-600 text-sm">
              All rights Reserved © Klean, 2024
            </p>
            <p className="text-gray-600 text-sm flex items-center">
              Made by William Mercês with
              Themewagon
            </p>
          </div>
        </div>
      </footer>
    );
  }