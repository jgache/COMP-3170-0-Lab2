import React from 'react';

const ArtistDetails = ({ artist }) => {
  // Destructure the properties from the artist object
  const { name, photo_url, country, years_active } = artist;

  return (
    <div className="artist-card">
      <img
        className="image"
        src={photo_url}
        alt={name}
        width="150"
      />

      <div className="content">
        <h2 className="name">{name}</h2> 
        
        <p><strong>Country:</strong> {country}</p> 
        
        <p><strong>Years Active:</strong> {years_active}</p> {/* Directly using years_active */}
      </div>
    </div>
  );
};

export default ArtistDetails;


