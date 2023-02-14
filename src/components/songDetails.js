import { Typography } from '@mui/material';
import React from 'react';
import SongArtist from './songArtist';
import SongLyric from './songLyric';

function SongDetails({search,lyric,bio}) {
    return ( 
    <>
        <Typography variant='subtitle2'>Details</Typography>
        <SongArtist />
        <SongLyric />
    </> 
    );
}

export default SongDetails;