import React from 'react';
import { artists } from './best-selling-music-artists'; 
import ArtistDetails from './components/ArtistDetails';

const App = () => {
  return (
    <>
      <h1 className='heading'>Best Selling Music Artists</h1>
      <ul>
        {artists.map((artist, card) => (
          <ArtistDetails key={index} artist={artist} />
        ))}
      </ul>
    </>
  );
};

export default App;

