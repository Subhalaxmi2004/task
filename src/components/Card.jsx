// Card.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Card = ({ data }) => {
  const { id } = useParams();
  const selectedShow = data.find((item) => item.show.id.toString() === id);

  if (!selectedShow) {
    return <div>No show found!</div>;
  }

  const handleBookTicketClick = () => {
    window.location.href = `/Ticket?image=${encodeURIComponent(selectedShow.show.image.original)}`;
  };

  const previousEpisodeLink =
    selectedShow.show._links && selectedShow.show._links.previous_episode
      ? selectedShow.show._links.previous_episode.href
      : null;

  return (
    <div className="CardContainer">
      <div className="CardImage">
        {selectedShow.show.image && (
          <img src={selectedShow.show.image.original} alt={selectedShow.show.name} height="100%" width="100%" />
        )}
      </div>
      <div className="CardInfo">
        <h1 id="name">{selectedShow.show.name}</h1>
        <div className="summary" dangerouslySetInnerHTML={{ __html: selectedShow.show.summary }} />
        <div id="but">
          {previousEpisodeLink && (
            <a href={previousEpisodeLink} target="_blank" rel="noopener noreferrer">
              <button>Previous Episode</button>
            </a>
          )}
          <button onClick={handleBookTicketClick}>Book Ticket</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
