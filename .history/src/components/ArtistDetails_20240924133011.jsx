import React from 'react';

const ArtistDetails = ({ artist }) => {
  return (
    <div>
      <h2 className='name'>{artist.name}</h2>
      <img className='image' src={artist.photo_url} alt={artist.name} width="150" />
      <p><strong>Country:</strong> {artist.country}</p>
      <p><strong>Years Active:</strong> {artist.years_active}</p>
    </div>
  );
};

export default ArtistDetails;