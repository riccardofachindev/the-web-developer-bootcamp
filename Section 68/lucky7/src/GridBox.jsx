import { useState } from "react"
import Box from "./Box"

export default function GridBox() {
    const [boxes, setBoxes] = useState([
        false,
        false,
        false,
        false,
        true,
        false,
        true,
        false,
        false
    ]);

    const resetBoxes = () => {
        setBoxes(([
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false
        ]));
    }

    function toggleBox(index) {
        setBoxes(oldBoxes => {
            return oldBoxes.map((box, i) => {
                if (i === index) {
                    return !box;
                }
                return box;
            })
        })
    }

    return (
        <div className="BoxGrid">
            {boxes.map((b, i) => <Box key={i} isActive={b} toggle={() => toggleBox(i)} />)}
            <button onClick={resetBoxes} >Reset</button>
        </div>
    )
}