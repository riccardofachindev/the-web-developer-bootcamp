export default function ColorList({ colors }) {
    const elements = [<p>Ciao</p>, <h3>Nice one</h3>, <input type="password"></input>]
    const list = colors.map(col => <li>{col}</li>);

    return (
        <>
            <h1>These are the colors</h1>
            {colors.map(col => <li style={{ color: col }}>{col}</li>)}
        </>
    )
}