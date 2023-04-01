import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios"

const App = () => {
  const [category, setCategory] = useState("general");
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    axios.get(
      `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=ae511c9c91d6ce4626a83c7ae83f05a0`
    )
    .then((res) => {
      console.log(res.data);
      setNewsData(res.data);
      setLoading(false);
    }
    )
    .catch((err) => {
      console.log(err);
      setLoading(false);
    }
    )
  }, [category])

  return (
    <div id="main">
      <h1 className="heading">Top 10 {category} news.</h1>
      <select value={category}>
        <option value="general">General</option>
        <option value="business">Business</option>
        <option value="sports">Sports</option>
        <option value="technology">Technology</option>
        <option value="world">World</option>
        <option value="entertainment">Entertainment</option>
        <option value="science">Science</option>
      </select>
      <p className="loader">Loading...</p>
      <ol>
        {newsData.map((article)
        <li key={article.url}>
          <img className={article.image} src="" alt="" />
          <section className="new-title-content-author">
            <h3 className="news-title">news title</h3>
            <section className="new-content-author">
              <p className="news-description">news description</p>
              <p className="news-source">
                <strong>Source:</strong> source name
              </p>
            </section>
          </section>
        </li>
        ))}
      </ol>
    </div>
  );
};

export default App;
