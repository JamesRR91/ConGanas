interface ContentSectionProps {
    selectedCategory: string;
  }

  const ContentSection: React.FC<ContentSectionProps> = ({ selectedCategory }) => {
    const renderContent = () => {
      if (selectedCategory === 'Shop') {
        return <p>Shop content goes here</p>;
      } else if (selectedCategory === 'Radio') {
        return <p>Radio content goes here</p>;
      } else if (selectedCategory === 'Blog') {
        return <p>Blog content goes here</p>;
      } else if (selectedCategory === 'Newsletter') {
        return <p>Newsletter content goes here</p>;
      }

      // Add more conditional rendering for other categories
    };

    return (
      <div>
        {renderContent()}
      </div>
    );
  };

  export default ContentSection;
