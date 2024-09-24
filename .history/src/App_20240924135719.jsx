import React from 'react';
import ArtistDetails from './ArtistDetails';
import { artists } from './best-selling-music-artists';

const App = () => {
  return (
    <div>
      <h1>Best Selling Music Artists</h1>
      <ul>
        {artists.map((artist, index) => (
          <ArtistDetails key={index} artist={artist} />
        ))}
      </ul>
    </div>
  );
};

export default App;

