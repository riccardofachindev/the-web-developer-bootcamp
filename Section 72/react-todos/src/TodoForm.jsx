import { useState } from "react"
import TextField from "@mui/material/TextField"
import ListItem from "@mui/material/ListItem"
import InputAdornment from "@mui/material/InputAdornment"
import IconButton from "@mui/material/IconButton"
import Create from "@mui/icons-material/Create"

export default function ({ addTodo }) {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText('');
    }

    return (
        <>
            <ListItem>
                <form onSubmit={handleSubmit}>
                    <TextField id="outlined-basic" label="Add item" variant="outlined" value={text} onChange={handleChange}
                        slotProps={{
                            input: {
                                endAdornment:
                                    <InputAdornment position="end">
                                        <IconButton aria-label="togle buttn" edge="end" type="submit">
                                            <Create />
                                        </IconButton>
                                    </InputAdornment>
                            }
                        }}
                    />
                </form>
            </ListItem>
        </>
    )
}