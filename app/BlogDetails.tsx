interface Article {
    title: string;
    description: string;
    url: string;
  }

  interface BlogDetailsProps {
    articles: Article[];
  }

  const BlogDetails: React.FC<BlogDetailsProps> = ({ articles }) => {
    return (
      <div className="content py-12">
        <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">Section Title</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col mb-6 md:w-full lg:w-1/2 xl:w-1/3"
              key={article.url}
            >
              <div className="bg-gray-200 rounded-lg h-40 mb-4"></div>
              <h2 className="text-lg font-bold">{article.title}</h2>
              <p className="text-gray-500 mt-2">{article.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
    );
  };

  export default BlogDetails;
