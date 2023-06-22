import { NextResponse } from 'next/server';
import { getBlogPosts } from '../BlogPoster.tsx';

// Handle GET requests for the /api/articles endpoint
export async function GET(request) {
  // Fetch the articles from the local data store
  const articles = await getBlogPosts();

  // Return the articles as a JSON response
  return NextResponse.json({ articles });
}

// Handle POST requests for the /api/articles endpoint
export async function POST(request) {
  // Extract the article data from the request body
  const { title, content } = await request.json();

  // Save the article data to the local data store
  const articles = await getBlogPosts();
  articles.push({ title, content });
  await fs.writeFile(ARTICLES_FILE, JSON.stringify(articles, null, 2));

  // Return a successful response with a message
  return NextResponse.json({ message: 'Article saved successfully!' });
}
