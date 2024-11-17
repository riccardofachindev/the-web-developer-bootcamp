import { useState } from "react"

export default function Counter() {
    console.log('Rendering');

    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    }

    const addThree = () => {
        setCount(currentValue => currentValue + 1);
        setCount(currentValue => currentValue + 1);
        setCount(currentValue => currentValue + 1);
    }

    const setToTen = () => {
        setCount(10);
    }

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>+1</button>
            <button onClick={addThree}>+3</button>
            <button onClick={setToTen}>To 10</button>
        </>
    )
}