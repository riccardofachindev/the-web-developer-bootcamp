export default function ListPicker({ list }) {
    const randIndex = Math.floor(Math.random() * list.length);
    const randItem = list[randIndex];

    return (
        <>
            <p>Index is {randIndex} - Item is {randItem}</p>
        </>
    )
}