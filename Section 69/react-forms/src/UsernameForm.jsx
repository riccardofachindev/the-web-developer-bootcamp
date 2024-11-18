import { useState } from "react"

export default function UsernameForm() {
    const [username, setUsername] = useState('timmy');

    const updateUsername = (event) => {
        setUsername(event.target.value);
    }

    return (
        <div>
            <label htmlFor="username">Write username</label>
            <input type="text" placeholder="username" value={username} onChange={updateUsername} id="username"></input>
            <button>Submit</button>
        </div>
    )
}