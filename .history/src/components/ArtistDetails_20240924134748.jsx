import React from "react";

const ArtistDetails = ({ artist }) => {
  return (
    <div className="artist-card">
      <img
        className="image"
        src={artist.photo_url}
        alt={artist.name}
        width="150"
      />

      <div className="content">
        <h2 className="name">{artist.name}</h2>

        <p> <bold>Country:</bold> {artist.country} </p>
        
        <p> <strong>Years Active:</strong> {artist.years_active} </p>
      </div>
    </div>
  );
};

export default ArtistDetails;
