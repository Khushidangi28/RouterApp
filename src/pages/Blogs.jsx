import './Home.css';  // Importing the CSS for styling

const Blogs = () => {
  const blogPosts = [
    { id: 1, title: 'Understanding JavaScript Closures', description: 'An introduction to closures in JavaScript, including examples and use cases.' },
    { id: 2, title: 'Exploring React Lifecycle Methods', description: 'Learn about React lifecycle methods and how to use them effectively in your components.' },
    { id: 3, title: 'Introduction to Node.js', description: 'A beginner\'s guide to Node.js, its features, and why it is so popular for backend development.' },
    { id: 4, title: 'CSS Grid vs Flexbox', description: 'A comparison between CSS Grid and Flexbox, two powerful layout systems for web development.' },
  ];

  return (
    <div className="blogs">
      <h1>Blog Articles</h1>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <a href={`/blogs/${post.id}`} className="read-more">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
