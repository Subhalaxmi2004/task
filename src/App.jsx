// App.jsx

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Body from './components/Body';
import Ticket from './components/Ticket';
import Card from './components/Card';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body data={data} />} />
        <Route path="/Ticket" element={<Ticket />} />
        {/* Update the Route for /Card to include the data prop */}
        <Route path="/Card/:id" element={<Card data={data} />} />
      </Routes>
    </Router>
  );
};

export default App;
