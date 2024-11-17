import { useState } from "react";
import TextField from "@mui/material/TextField"
import Slider from "@mui/material/Slider"
import Box from '@mui/material/Box';


export default function FormDemo() {
    const [name, setName] = useState('');
    const [volume, setVolume] = useState(50);

    const handleChange = (e) => {
        setName(e.target.value);
    }

    function handleVolumeChange(e) {
        setVolume(e.target.value);
    }

    return (
        <Box sx={{ border: '1px solid black', p: 1 }}>
            <h1>The name is {name}</h1>
            <TextField id="outlined-basic" label="Nice name" variant="outlined" value={name} placeholder="Poppy" onChange={handleChange} />
            <h2>Volume is: {volume}</h2>
            <Slider aria-label="Volume" value={volume} onChange={handleVolumeChange} />
        </Box>
    )
}