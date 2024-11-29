import React, { useEffect, useState } from 'react';

const SUPABASE_URL = 'https://xnykiejhjsppxvnmqcev.supabase.co/rest/v1/klift-blog';
const SUPABASE_API_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhueWtpZWpoanNwcHh2bm1xY2V2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMyODk0NDcsImV4cCI6MjAzODg2NTQ0N30.GTpLwlyahu9lMtSdKkCX4C9PtcT_7rvZPRCPYdkP1NY';

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
  

    const fetchData = async () => {
      try {
        const response = await fetch(`${SUPABASE_URL}?select=*`, {
          headers: {
            apikey: SUPABASE_API_KEY,
            Authorization: `Bearer ${SUPABASE_API_KEY}`,
          },
        });
        const data = await response.json();

        setTimeout(() => {
          setBlogs(data);
        }, 100);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-8 mt-32">
      <h1 className="text-4xl font-bold text-gray-700 text-center mb-8">Recent Blog</h1>
      <p className="text-center mb-20">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
      </p>
      {blogs.length === 0 ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              data-aos="fade-up" 
              data-aos-delay={index * 100}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
            >
              <img
                src={blog.image_url}
                alt={blog.description}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-center mb-2 text-sm text-gray-500">
                  <span>
                    {new Date(blog.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                  <span>{blog.author}</span>
                </div>
                <p className="text-gray-700 text-base">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Blog;
