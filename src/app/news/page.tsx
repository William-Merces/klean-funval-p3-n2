import Image from 'next/image';

export default function NewsPage() {
  const posts = [
    {
      category: "Article",
      title: "How do you use social media for growing traffic and sales?",
      author: "Jessica Parker",
      avatar: `https://ui-avatars.com/api/?name=Jessica+Parker&background=818CF8&color=fff`,
      date: "May, 2020",
      readTime: "5 mins read",
      stats: {
        likes: 34,
        views: 203
      }
    },
    {
      category: "Lifestyle",
      title: "Health & fitness for busy people during times of stress",
      author: "Jason Bourne",
      avatar: `https://ui-avatars.com/api/?name=Jason+Bourne&background=818CF8&color=fff`,
      date: "April, 2020",
      readTime: "10 mins read",
      stats: {
        likes: 39,
        views: 604
      }
    },
    {
      category: "CEO/ Office",
      title: "QR codes- innovative ways to use them in small business",
      author: "Wanda Maximoff",
      avatar: `https://ui-avatars.com/api/?name=Wanda+Maximoff&background=818CF8&color=fff`,
      date: "March, 2020",
      readTime: "7 mins read",
      stats: {
        likes: 26,
        views: 436
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 pt-32">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-semibold mb-4">Blog post</h2>
        <p className="text-gray-600">
          Blogs are a great method to increase traffic and generate leads. Make a profit.
          Get compensated for your efforts.
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article 
              key={index} 
              className="bg-white rounded-3xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Category */}
              <span className="text-[#818CF8] text-sm mb-4 block">
                {post.category}
              </span>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4 hover:text-[#818CF8] cursor-pointer transition-colors">
                {post.title}
              </h3>

              {/* Author Info */}
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src={post.avatar}
                  alt={post.author}
                  width={32}
                  height={32}
                  className="rounded-full"
                  unoptimized
                />
                <div>
                  <p className="text-sm font-medium">{post.author}</p>
                  <p className="text-sm text-gray-500">
                    {post.date} • {post.readTime}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 text-gray-500">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="text-sm">{post.stats.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span className="text-sm">{post.stats.views}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

{/* Newsletter Section */}
<div className="max-w-7xl mx-auto px-4 py-12">
        <div className="max-w-md">
          <h4 className="text-xl font-semibold mb-4">Subscribe to our newsletter</h4>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-[#818CF8]"
            />
            <button className="p-2 text-[#818CF8] hover:text-[#6366f1]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-block px-6 py-2 text-[#818CF8] rounded-lg border border-[#818CF8] hover:bg-[#818CF8] hover:text-white transition-colors">
            View All
          </button>
        </div>
      </div>
    </div>
  );
}