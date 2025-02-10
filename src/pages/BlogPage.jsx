import { Link } from 'react-router-dom';
import { mockBlogPosts } from '../data/mockBlogPosts';

const BlogPage = () => {
  return (
    <div className="container">
      <h1>Our Blog</h1>
      
      <section className="latest-news">
        <h2>Latest News</h2>
        <div className="blog-slider">
          {mockBlogPosts.map((post) => (
            <article key={post.id} className="blog-post">
              <img src={post.image} alt={post.title} />
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="btn-primary">
                Read More
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="all-posts">
        <h2>All Blog Posts</h2>
        <div className="blog-grid">
          {mockBlogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <img src={post.image} alt={post.title} />
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="btn-primary">
                Read More
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
