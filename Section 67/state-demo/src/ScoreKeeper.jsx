import { useState } from "react";

export default function ScoreKeeper() {
    const [scores, setScores] = useState({ p1Score: 0, p2Score: 0 });

    function increaseP1() {
        setScores(currentScore => {
            return { ...currentScore, p1Score: currentScore.p1Score + 1 }
        })
    }

    const increaseP2 = () => {
        setScores(currentScore => {
            return { ...currentScore, p2Score: currentScore.p2Score + 1 }
        })
    }

    return (
        <>
            <p>P1 score is: {scores.p1Score}</p>
            <p>P2 score is: {scores.p2Score}</p>
            <button onClick={increaseP1}>+1 to P1</button>
            <button onClick={increaseP2}>+1 to P2</button>
        </>
    )
}