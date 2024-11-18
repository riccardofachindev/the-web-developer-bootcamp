import ColorBox from "./ColorBox";
import './ColorBoxGrid.css';

export default function ColorBoxGrid({ colors }) {
    let index = 0;

    const boxes = [];

    for (let i = 0; i < 25; i++) {
        boxes.push(<ColorBox key={index++} colors={colors} />);
    }

    return (
        <div className="ColorBoxGrid">
            {boxes}
        </div>
    )
}