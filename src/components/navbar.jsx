import React, { useState, useEffect } from 'react';
import "./nav.css";

const Navbar = () => {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState('');

  const handleclick = () => {
    alert('scroll down for the menu');
  };

  const fetchNews = async () => {
    if (!query) return;
  
    try {
      const response = await fetch(`/api/api/v4/search?q=${query}&lang=en&country=us&max=10&apikey=a2e9ccd7ca5fecf62a92c4835c8b842c`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer a2e9ccd7ca5fecf62a92c4835c8b842c`,
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setNews(data.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };
  

  const searchclick = () => {
    fetchNews();
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <div className="home">
        <div className='svv'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 12C8 18 12 22 12 22C12 22 16 18 16 12C16 6 12 2 12 2C12 2 8 6 8 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M21 15H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 9H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg> AcoNews
        </div>
        <div className="search">
          <input
            className='place'
            type="text"
            placeholder='Search for latest news'
            value={query}
            onChange={handleInputChange}
          />
          <button onClick={searchclick} className='seabtn'>Search</button>
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <svg onClick={handleclick} className='menu' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
          <path d="M4 5L16 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 19L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      
      <div className="news-container">
        {news.length > 0 && news.map((article, index) => (
          <div className="news-item" key={index}>
            <img src={article.image} alt={article.title} />
            <div className="news-content">
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read More..
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
