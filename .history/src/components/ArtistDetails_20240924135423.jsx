import React from 'react';

const ArtistDetails = ({ artist }) => {
  // Destructure the artist object to extract relevant properties
  const { name, photo_url, country, years_active } = artist;

  return (
    <li>
      <h2>{name}</h2>
      <img
        src={photo_url}
        alt={name}
        width="150"
        style={{ borderRadius: '15px' }} // Rounds the image corners
      />
      <p><strong>Country:</strong> {country}</p>
      <p><strong>Years Active:</strong> {years_active}</p>
    </li>
  );
};

export default ArtistDetails;
