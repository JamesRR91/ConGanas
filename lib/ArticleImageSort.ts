export default function articleImageSort(articles: ArticleResponse) {
    const articleWithImage = articles.data.filter((item) =>item.image !== null);
    const articleNoImage = articles.data.filter((item) =>item.image === null);

    const sortedImage = {
        pagination: articles.pagination,
        data: [...articleWithImage, ...articleNoImage],
    }

    return sortedImage;
}
