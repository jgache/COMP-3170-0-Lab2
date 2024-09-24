import React from 'react';
import { artists } from './best-selling-music-artists'; 
import ArtistDetails from './components/ArtistDetails';
const App = () => {
  return (
    <div>
      <h1 className='heading'>Best Selling Music Artists</h1>
      <div>
        {artists.map((artist, card) => (
          <ArtistDetails key={index} artist={artist} />
        ))}
      </div>
    </div>
  );
};

export default App;
