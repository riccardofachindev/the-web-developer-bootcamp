import { useState } from "react";
import { getRolls } from './utils'
import Dice from "./Dice";
import Button from "./Button";

export default function LuckyN({ title = 'Dice Game', numDice = 2, winCheck }) {
    function initialDice() {
        return getRolls(numDice);
    }

    const [dice, setDice] = useState(initialDice);

    const isWinner = winCheck(dice);

    function reroll() {
        setDice(getRolls(numDice));
    }

    return (
        <main className="LuckyN">
            <h1>{title} {isWinner && "You win!!!"}</h1>
            <Dice dice={dice} />
            {/* <button onClick={reroll}>Re-roll!</button> */}
            <Button clickFunc={reroll} title="Re-roll" />
        </main>
    )
}