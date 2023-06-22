export function saveBlogPost(title, content) {
    // Read the existing blog posts from localStorage, or create an empty array if none exist
    const existingPosts = JSON.parse(localStorage.getItem('blog-posts') || '[]');

    // Add the new blog post to the existing posts
    const newPost = {
      title,
      content,
      categories:[],
      createdAt: Date.now(),
    };
    existingPosts.push(newPost);

    // Save the updated blog posts back to localStorage
    localStorage.setItem('blog-posts', JSON.stringify(existingPosts));
  }
