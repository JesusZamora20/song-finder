import React, { useState, useEffect } from 'react';
import SongDetails from './songDetails';
import SongForm from './songForm';
import { Typography } from '@mui/material';
import { helpHttp } from '../helpers/helpHttp';


function SongSearch() {
    const [search, setSearch ] = useState(null);
    const [lyric, setLyric] = useState(null);
    const [bio, setBio] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(search === null) return;

        const fetchData = async() => {
            const {artist, song} = search;

            let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
            let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

            setLoading(true);

            const [artistRes, songRes] = await Promise.all([
                helpHttp().get(artistUrl), 
                helpHttp().get(songUrl)]);

            setBio(artistRes);
            setLyric(songRes);

            console.log(artistRes,songRes);

            setLoading(false);
        }

        fetchData();
    }, [search]);

    const handleSearch = (data) => {
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