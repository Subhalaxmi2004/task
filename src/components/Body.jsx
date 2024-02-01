import React from 'react'
import {useState,useEffect} from "react";
import { Link } from 'react-router-dom';
const Body = () => {
const [data, setData] = useState([]);
const apiGet = () => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json);
        console.log('Data:', data);
      });
  };
  useEffect(() => {
    apiGet();
  }, []);
  const handleWatchNowClick = (officialSite) => {
    // Open the official site in a new tab/window
    window.open(officialSite, '_blank');
  };

  return (
    <>
    <div className="main">
     {data.map((item) => (
        <div className="ShowCard" key={item.show.id}>
        <div className="img">
          {item.show.image && (
            <img className="ShowImage" src={item.show.image.medium} alt={item.show.name} height="100%" width="100%" />
          )}
          <div className="overlay">
            <h1>{item.show.name}</h1>
          </div>
        </div>
          <div className="ShowInfo">
          <div className="row">
          <h2>Genre</h2>
            <p>{item.show.genres.join(', ')}</p>
          </div>
          <div className="row" id="status">
          <p>Status: {item.show.status}</p>
            <p>Released Date: {item.show.premiered}</p>
          </div>
          <div className="row">
          
          Ended On: {item.show.ended || 'N/A'}
          <div>
          {item.show.network && ( 
              <>
                {' '}
                 {item.show.network.name}
              </>
            )}
            </div>
          </div>
          <div className="row" id="row4">
         
          Ratings: {item.show.rating?.average || 'N/A'}
          </div>
          <div className="row" id="button">
          <button className="watchButton" onClick={() => handleWatchNowClick(item.show.officialSite || item.show.url)}>
                Watch Now
              </button>
              <Link to={`/Card/${item.show.id}`}>
  <button className="detailsButton">See Details</button>
</Link>

          </div>
          </div>
        </div>
      ))}
</div>
    </>
  )
}

export default Body;