import React from 'react';
import SongArtist from './songArtist';
import SongLyric from './songLyric';

function SongDetails({search,lyric,bio}) {
    return ( 
    <>
        <h2>Details</h2>
        <SongArtist />
        <SongLyric />
    </> 
    );
}

export default SongDetails;