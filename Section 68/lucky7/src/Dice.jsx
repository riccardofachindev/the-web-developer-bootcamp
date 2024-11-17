import Die from "./Die"
import './Dice.css'

export default function Dice({ dice, color }) {
    return (
        <div className="Dice">
            {dice.map((value, index) => {
                return <Die val={value} key={index} color={color} />
            })}
        </div>
    )
}