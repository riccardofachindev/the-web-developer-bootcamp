import { useState } from "react"
import { v4 as uuid } from 'uuid';

export default function DynamicScoreKeeper({ players = 3, target = 5 }) {
    const createScores = () => {
        console.log('ciao');
        let playersArr = new Array(players);

        for (let i = 0; i < playersArr.length; i++) {
            playersArr[i] = { id: uuid(), score: 0 };
        }

        return playersArr;
    }

    const [scores, setScores] = useState(createScores)

    const addOne = (newScore) => {
        setScores(oldScores => {
            return oldScores.map(s => {
                if (s.id === newScore.id) {
                    return { id: s.id, score: newScore.score + 1 }
                } else {
                    return s;
                }
            })
        })
    }

    function resetScores() {
        setScores(oldScores => {
            return oldScores.map(score => {
                return { id: score.id, score: 0 }
            });
        })
    }

    const scoresList = [];

    console.log(scores);

    scores.forEach((s, i) => {
        scoresList.push(
            <li key={s.id}>
                Player{i + 1}: {s.score}
                <button onClick={() => addOne(s)}>+1</button>
                {s.score >= target && <span>You win!!!</span>}
            </li>
        )
    })

    return (
        <>
            <ul>
                {scoresList}
            </ul>
            <button onClick={resetScores}>Reset!</button>
        </>
    )
}