'use client'
import Image from 'next/image';
// import {categories} from "../constants"
// import fetchArticles from "@/lib/fetchArticles";
import Carousel from './Carousel';
import CategoryList from './CategoryList';
import ContentSection from './ContentSection';
import BlogDetails from './BlogDetails';
import TipTap from './BlogPoster';
import NavLinks from './NavLinks';
import Search from './Search';
import dynamic from 'next/dynamic';
import './globals.css'

// const MyEditor = dynamic(() => import('./BlogPoster'), {
// 	ssr: false
// })

const articles = [
	{
	  title: 'Article 1 Title',
	  description: 'Article 1 description',
	  url: 'https://example.com/article-1'
	},
	{
	  title: 'Article 2 Title',
	  description: 'Article 2 description',
	  url: 'https://example.com/article-2'
	},
	// Add more articles as needed
  ];


// interface Article {
// 	title: string;
// 	description: string;
// 	author: string;
// 	words: string;
//   }
//   const articles: Article[] = [
//   {
//     title: 'Breaking News',
//     description: 'This is the description of the breaking news article.',
//     author: 'John Doe',
// 	words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
//   },
//   {
//     title: 'Feature Story',
//     description: 'This is the description of the feature story.',
//     author: 'Jane Smith',
// 	words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
//   },
//   {
//     title: 'Technology Update',
//     description: 'This is the description of the technology update article.',
//     author: 'Sam Wilson',
// 	words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
//   },
//   {
//     title: 'Sports News',
//     description: 'This is the description of the sports news article.',
//     author: 'Alex Thompson',
// 	words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
//   },
//   {
//     title: 'Entertainment Buzz',
//     description: 'This is the description of the entertainment buzz article.',
//     author: 'Emma Davis',
// 	words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
//   },
//   {
//     title: 'Entertainment Buzz',
//     description: 'This is the description of the entertainment buzz article.',
//     author: 'Emma Davis',
// 	words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
//   },
// ];

function Home() {
	return (
		<div>
			<nav>
			  <CategoryList />
			  {/* <NavLinks /> */}
			  <Search />
			  <ContentSection selectedCategory="" />
			  <ul className="nav-links">
				<li><a href="#">Home</a></li>
				<li><a href="#">About</a></li>
				<li><a href="#">Events</a></li>
				<li><a href="#">Guides</a></li>
				{/* Add more navigation links as needed */}
			  </ul>
			</nav>

		  <main>
			<section className="hero">
				<BlogDetails articles={articles}/>
			  <div className="hero-content">
			  	<TipTap />
				<h1>Welcome to Secret Los Angeles</h1>
				<p className='text-chrismaroon'>Discover the hidden gems of Los Angeles</p>
				<a href="#" className="btn-primary">Explore Now</a>
			  </div>
			</section>

			<section className="featured-section">
			  <div className="container">
				<div className="featured-content">
				  <h2>Featured Articles</h2>
				  <div className="article-grid">
					{/* Placeholder for featured articles */}
					<div className="article">
					  <img src="/article1.jpg" alt="Article 1" style={{ maxWidth: '50%', height: 'auto' }}/>
					  <h3>Article Title</h3>
					  <p>Article description</p>
					</div>
					<div className="article">
					  <img src="/article2.jpg" alt="Article 2" style={{ maxWidth: '50%', height: 'auto' }}/>
					  <h3>Article Title</h3>
					  <p>Article description</p>
					</div>
					<div className='carousel'>
						<Carousel />
					</div>
					<div>
						<h3>Top 10 Most Popular Articles</h3>
					</div>
				  </div>
				</div>
			  </div>
			</section>
		  </main>
		</div>
	  );

}

export default Home;
