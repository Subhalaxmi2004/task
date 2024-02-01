// Ticket.jsx
import React from 'react';

const Ticket = () => {
  // Get the image URL from the URL parameter
  const params = new URLSearchParams(window.location.search);
  const imageUrl = params.get('image');

  return (
    <div className="TicketContainer">
    <div className="image">
      {imageUrl && <img src={decodeURIComponent(imageUrl)} alt="Show Poster" width="100%" height="100%"/>}</div>
      <div className="form">
      <div className="heading">
      <h1>Book Your Ticket</h1></div>
      {/* Form for ticket booking */}
      <form>
      <div className="items">
        {/* Include form fields like name, email, number of tickets, etc. */}
        <label>Name:</label>
        <input type="text" name="name" required placeholder ="Enter Name" />
        </div>
        <div className="items">
        <label>Email:</label>
        <input type="email" name="email" required placeholder="Enter Email" />
</div>
        <div className="items">
        <label>Number of Tickets:</label>
        <input type="number" name="tickets" min="1" required  placeholder="Enter Number Of Tickets"/></div>
        <div className="items">
        <button type="submit">Submit</button></div>
      </form>
      </div>
    </div>
  );
};

export default Ticket;
