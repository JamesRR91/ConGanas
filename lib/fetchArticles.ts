// import { gql } from "graphql-request"
// import articleImageSort from "./ArticleImageSort";


// const fetchArticles = async(category?:Category | string, keywords?: string, isDynamic?: boolean ) => {

//     //GraphQl query
//     const query = gql`
//     query MyQuery(
//         $access_key: String!
//         $categories: String!
//         $keywords: String
//     ) {
//         myQuery(
//             access_key: $access_key
//             categories: $categories
//             countries: "us"
//             sort:"published_desc"
//             keywords: $keywords
//         ) {
//             data{
//                 author
//                 category
//                 image
//                 description
//                 country
//                 language
//                 published_at
//                 source
//                 title
//                 url
//             }
//             pagination {
//                 count
//                 limit
//                 offset
//                 total
//             }
//         }
//     }
// `;
//     //Fetch function with Next.js 13 caching
// const res = await fetch('https://gosanimaribandar.stepzen.net/api/saballos-soapbox/__graphql', {
//     method: 'POST',
//     cache: isDynamic ? "no-cache": "default",
//     next: isDynamic ? { revalidate: 0 } : { revalidate: 20},
//     headers: {
//         "Content-Type": "application/json",
//         Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
//     },
//     body: JSON.stringify({
//         query,
//        variables: {
//         access_key: process.env.MEDIASTACK_API_KEY,
//         categories: category,
//         keywords: keywords,
//        }
//     }),

// });

// console.log("LOADING NEW DATA FROM API for category >>>",
// category,
// keywords
// );

// const articleResponse=await res.json();
//     //Sort function by images vs not images present
// const data = articleImageSort(articleResponse.data.myQuery);



//     //return res
// return articles;
// }

// export default fetchArticles;
