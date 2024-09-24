import React from 'react';

const ArtistDetails = ({ artist }) => {
  return (
    <div>
      <h2>{artist.name}</h2>
      <img src={artist.photo_url} alt={artist.name} width="150" />
      <p><strong>Country:</strong> {artist.country}</p>
      <p><strong>Years Active:</strong> {artist.years_active}</p>
    </>
  );
};

export default ArtistDetails;