import { useState } from "react";

function generateGameBoard() {
    console.log('Generating');
    return Array(5000);
}

function Dumbo() {
    const [board, setBoard] = useState(generateGameBoard);

    return (
        <>
            <button onClick={() => setBoard('hello')}>Click me!</button>
        </>
    )
}

export default Dumbo;