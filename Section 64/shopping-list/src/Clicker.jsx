function handleClick() {
    console.log('clicked');
}

function handleHover() {
    console.log('hovered');
}

export default function Clicker() {
    return (
        <div>
            <p onMouseOver={handleHover}>Click the button</p>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}