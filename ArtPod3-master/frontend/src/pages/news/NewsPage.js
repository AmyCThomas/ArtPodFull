import React, { useEffect, useState } from "react";
import NewsArticles from "../../components/news/NewsArticles";
import Pagination from "../../components/Pagination";
import './NewsPgStyles.css'

function NewsPage() {
  const axios = require("axios");
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
 
    const options = {
      method: 'GET',
    url: 'https://api.newscatcherapi.com/v2/search',
      params: {q: 'art', lang: 'en', sort_by: 'relevancy', page: '1'},
      headers: {
        'x-api-key': 'WdZ6bm4OXbsyNnYMGSpAMXH8PNeqA6B95Tgxx9IzDl0'
      }
    }
  useEffect(() => {
    axios.request(options).then(function (response) {
      const data = response.data
      const elements = []
      for (let i=0; i < 25; i++) {
        elements.push(data.articles[i])
      }
      setArticles(elements)
    }).catch(function (error) {
      console.error(error);
    });
  }, [])

  // get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = articles.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  
  return (
    <div>
      <header className="news-header">
      </header>
      <h2 className="news-title">Current News in the World of Art</h2>
      <NewsArticles articles={currentPosts} />
      <Pagination postsPerPage={postsPerPage} totalPosts={articles.length} paginate={paginate}/>
    </div>   
  )
}

export default NewsPage;