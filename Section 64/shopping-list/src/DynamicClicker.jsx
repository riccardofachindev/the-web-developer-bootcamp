
export default function DynamicClicker({ message, buttonText }) {
    return (
        <button onClick={() => alert(message)}>{buttonText}</button>
    )
}