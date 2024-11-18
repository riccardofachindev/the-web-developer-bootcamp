import './ColorBox.css';
import { useState } from 'react';

export default function ColorBox({ colors }) {
    const colorIndex = Math.floor(Math.random() * colors.length);
    const [color, setColor] = useState(colors[colorIndex]);

    const colorBoxStyle = {
        backgroundColor: color
    }

    const changeColor = () => {
        const newColorIndex = Math.floor(Math.random() * colors.length);
        setColor(colors[newColorIndex]);
    }

    return (
        <div className="ColorBox" style={colorBoxStyle} onClick={changeColor}>
        </div>
    )
}