import React, { useState } from 'react';
import SongDetails from './songDetails';
import SongForm from './songForm';
import { Typography } from '@mui/material';


function SongSearch() {
    const [search, setSearch ] = useState(null);
    const [lyric, setLyric] = useState(null);
    const [bio, setBio] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = (data) => {
        // console.log(data);
        setSearch(data);
    }
    
    return (
        <>
            <Typography variant='h4'>Song Search</Typography>
            <br/>
            <SongForm handleSearch={handleSearch}/>
            <SongDetails
            search={search}
            lyric={lyric}
            bio={bio}
            />
            <br/>
        </>
    );
}

export default SongSearch;