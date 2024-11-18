export default function Slot({ icons }) {
    let isWin = true;
    let first = icons[0];

    for (const icon of icons) {
        if (icon !== first) {
            isWin = false;
        }
    }

    return (
        <div>
            {icons.map(icon => <p style={{ display: 'inline-block' }}>{icon}</p>)}
            {isWin ? <h2 style={{ color: 'green' }}>You win</h2> : <h2 style={{ color: "red" }}>You lose..</h2>}
            {isWin && <h3>Get 5000 euros!</h3>}
        </div>

    )
}