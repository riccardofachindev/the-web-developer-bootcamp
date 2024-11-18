import { useEffect } from "react";
import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    function consoleSomething(word) {
        console.log(word);
    }

    useEffect(() => consoleSomething('THIS IS MY EFFECT'), [count]);

    function incrementCount() {
        setCount(oldCount => oldCount + 1);
    }

    const handleChange = (e) => {
        setName(oldName => e.target.value);
    }

    return (
        <>
            <div style={{ display: 'flex' }}>
                <p>Count is: {count}</p>
                <button onClick={incrementCount}>+1</button>
            </div>
            <div>
                <label htmlFor="name">Add name</label>
                <input type="text" value={name} onChange={handleChange} id="name" />
            </div>
        </>
    )
}