type Category =
    // |"lifestyle"
    // |"movies"
    |"music"
    // |"sports"
    // |"tech"
    |"restaurants"
    // |"secret spots";
    |"events"

type ArticleResponse = {
    pagination: Pagination;
    data: Articles[];
};

type Pagination = {
    count: Int;
    limit: Int;
    offset: Int;
    total: Int;
};

type DataEntry = {
    author: string | null;
    category: string;
    country: string;
    description: string;
    image: string | null;
    language: string;
    published_at: string;
    source: string;
    title: string;
    url: string;
};
