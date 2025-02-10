import { useState } from 'react';

const BlogManagement = () => {
  const [blogTitle, setBlogTitle] = useState('');
  const [blogContent, setBlogContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add blog post to database
    console.log('Blog post added:', {
      title: blogTitle,
      content: blogContent
    });
  };

  return (
    <div className="container">
      <h1>Manage Blog Posts</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Blog Title</label>
          <input 
            type="text" 
            value={blogTitle}
            onChange={(e) => setBlogTitle(e.target.value)}
            required 
          />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea 
            value={blogContent}
            onChange={(e) => setBlogContent(e.target.value)}
            required 
          />
        </div>
        <button type="submit" className="btn-primary">
          Publish Post
        </button>
      </form>
    </div>
  );
};

export default BlogManagement;
