export default function Die({ numSides = 6 }) {
    const ranNum = Math.floor(Math.random() * numSides) + 1;

    return (
        <>
            <h1>{numSides}-sided die roll: {ranNum}</h1>
        </>
    )
}