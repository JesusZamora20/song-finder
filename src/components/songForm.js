import { Button, TextField, Typography, Stack } from '@mui/material';
import React, { useState } from 'react';


function SongForm({handleSearch}) {
    const initialForm = {
        artist:'',
        song:''
    }

    const [form, setForm] = useState(initialForm);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        if(!form.artist || !form.song){
            alert('incomplete Data');
            return;
        }

        handleSearch(form);
        setForm(initialForm);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2} direction='row' >
                    <TextField label='Artist' size='small' color='primary'
                    type='text' 
                    name='artist' 
                    onChange={handleChange} 
                    value={form.artist} />

                    <TextField label='Song' size='small' color='primary'
                    type='text' 
                    name='song'  
                    onChange={handleChange} 
                    value={form.song}
                    />

                    <Button size='small' variant='contained' type='submit' >Search</Button>
                </Stack>
            </form>
            
        </>
    );
}

export default SongForm;